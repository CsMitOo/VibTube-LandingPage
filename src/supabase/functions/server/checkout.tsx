import type { Context } from "npm:hono";
import * as kv from "./kv_store.tsx";
import { sendConfirmationEmail } from "./email.tsx"; // Import the new email utility

// Você precisará configurar seu Access Token do Mercado Pago
const MERCADO_PAGO_ACCESS_TOKEN = Deno.env.get("MERCADO_PAGO_ACCESS_TOKEN");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");

interface CheckoutRequest {
  name: string;
  email: string;
  phone: string;
  planType: string;
  amount: number;
  origin?: string; // Adicionado para receber o origin do frontend
}

export async function handleCheckout(c: Context) {
  try {
    const body: CheckoutRequest = await c.req.json();
    
    console.log("Checkout request received:", { email: body.email, planType: body.planType, receivedOrigin: body.origin });

    // Validar dados
    if (!body.name || !body.email || !body.phone || !body.amount) {
      return c.json({ error: "Dados incompletos" }, 400);
    }

    // 1. Determinar o Origin (Prioriza o valor enviado pelo frontend)
    let safeOrigin = body.origin && body.origin.startsWith("http") 
      ? body.origin 
      : "http://localhost:5173"; 

    // Se o origin for localhost, usamos a URL do Supabase como base para as back_urls,
    // pois o Mercado Pago não aceita localhost.
    if (safeOrigin.includes("localhost") && SUPABASE_URL) {
        // Remove o /functions/v1 do SUPABASE_URL para obter a URL base do projeto
        safeOrigin = SUPABASE_URL.replace("/functions/v1", "");
        console.warn("Localhost detected. Using Supabase URL as safeOrigin for Mercado Pago back_urls:", safeOrigin);
    } else if (safeOrigin.includes("localhost")) {
        console.warn("Localhost detected, but SUPABASE_URL is missing. Using localhost, which may fail Mercado Pago validation.");
    }
    
    if (!safeOrigin || !safeOrigin.startsWith("http")) {
        throw new Error("Não foi possível determinar uma URL de origem válida para o Mercado Pago.");
    }

    console.log("Using safeOrigin for back_urls:", safeOrigin);

    // Verificar se já existe assinatura ativa
    const existingSubscription = await kv.get(`subscription:${body.email}`);
    if (existingSubscription && existingSubscription.status === "active") {
      return c.json({ error: "Você já possui uma assinatura ativa" }, 400);
    }

    // Verificar se o token do Mercado Pago está configurado
    if (!MERCADO_PAGO_ACCESS_TOKEN) {
      console.error("MERCADO_PAGO_ACCESS_TOKEN not configured");
      
      // Salvar pedido pendente
      const orderId = `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      await kv.set(`order:${orderId}`, {
        orderId,
        email: body.email,
        name: body.name,
        phone: body.phone,
        planType: body.planType,
        amount: body.amount,
        status: "pending_config",
        createdAt: new Date().toISOString(),
      });
      
      return c.json({ 
        error: "Sistema de pagamento em configuração. Configure o MERCADO_PAGO_ACCESS_TOKEN para habilitar pagamentos.",
        orderId 
      }, 503);
    }
    
    // Criar preferência de pagamento no Mercado Pago
    const preference = {
      items: [
        {
          title: "VIBTUBE ACADEMY - Plano Anual",
          description: "Acesso premium por 12 meses",
          quantity: 1,
          currency_id: "BRL",
          unit_price: body.amount,
        },
      ],
      payer: {
        name: body.name,
        email: body.email,
        phone: {
          area_code: body.phone.replace(/\D/g, "").substring(0, 2),
          number: body.phone.replace(/\D/g, "").substring(2),
        },
      },
      back_urls: {
        success: `${safeOrigin}/pagamento-confirmado`,
        failure: `${safeOrigin}/pagamento-falhou`,
        pending: `${safeOrigin}/pagamento-pendente`,
      },
      auto_return: "approved",
      notification_url: `${SUPABASE_URL}/make-server-efd1629b/webhook`,
      external_reference: body.email,
    };

    // Fazer request para API do Mercado Pago
    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MERCADO_PAGO_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(preference),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Mercado Pago API error:", data);
      // Se o erro for sobre back_urls, lançamos a mensagem específica
      if (data.message && data.message.includes("back_url.success must be defined")) {
         throw new Error("Erro: back_url.success deve ser definido. Verifique a URL de origem.");
      }
      throw new Error(data.message || "Erro ao criar preferência de pagamento");
    }

    // Salvar informações do pedido (usando o ID da preferência)
    const orderId = data.id;
    await kv.set(`order:${orderId}`, {
      orderId,
      email: body.email,
      name: body.name,
      phone: body.phone,
      planType: body.planType,
      amount: body.amount,
      status: "pending",
      createdAt: new Date().toISOString(),
      mercadoPagoId: data.id,
    });

    console.log("Checkout created successfully:", { orderId, email: body.email });

    // Retornar URL de pagamento
    return c.json({
      success: true,
      paymentUrl: data.init_point, // URL para redirecionar o usuário
      orderId: data.id,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return c.json(
      { 
        error: error instanceof Error ? error.message : "Erro ao processar checkout",
        details: error instanceof Error ? error.stack : undefined
      },
      500
    );
  }
}

export async function handleWebhook(c: Context) {
  try {
    const body = await c.req.json();
    
    console.log("Webhook received:", body);

    // Verificar se é notificação de pagamento
    if (body.type === "payment") {
      const paymentId = body.data.id;

      // Buscar informações do pagamento
      const paymentResponse = await fetch(
        `https://api.mercadopago.com/v1/payments/${paymentId}`,
        {
          headers: {
            Authorization: `Bearer ${MERCADO_PAGO_ACCESS_TOKEN}`,
          },
        }
      );

      const payment = await paymentResponse.json();
      
      console.log("Payment info:", { 
        id: payment.id, 
        status: payment.status, 
        email: payment.external_reference 
      });

      // Atualizar status da assinatura
      if (payment.status === "approved") {
        const email = payment.external_reference;
        const name = payment.payer?.first_name || "Cliente"; // Tenta obter o nome do objeto de pagamento
        const orderId = payment.id;

        await kv.set(`subscription:${email}`, {
          email,
          name,
          status: "active",
          planType: "annual",
          startDate: new Date().toISOString(),
          endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
          paymentId: payment.id,
          updatedAt: new Date().toISOString(),
        });

        console.log("Subscription activated for:", email);
        
        // 🚀 ENVIAR EMAIL DE CONFIRMAÇÃO
        try {
          await sendConfirmationEmail({ to: email, name: name, orderId: orderId });
          console.log(`Email confirmation process initiated for ${email}.`);
        } catch (emailError) {
          // Loga o erro do email, mas não falha o webhook
          console.error("🚨 FAILED TO SEND CONFIRMATION EMAIL:", emailError);
        }
      }
    }

    return c.json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return c.json(
      { 
        error: error instanceof Error ? error.message : "Erro ao processar webhook",
        details: error instanceof Error ? error.stack : undefined
      },
      500
    );
  }
}