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
  origin?: string; // Mantemos o campo, mas não o usamos para back_urls
}

export async function handleCheckout(c: Context) {
  try {
    const body: CheckoutRequest = await c.req.json();
    
    console.log("Checkout request received:", { email: body.email, planType: body.planType, receivedOrigin: body.origin });

    // Validar dados
    if (!body.name || !body.email || !body.phone || !body.amount) {
      return c.json({ error: "Dados incompletos" }, 400);
    }

    // 1. Determinar o Origin: Usamos a URL base do Supabase para garantir que o Mercado Pago aceite.
    let safeOrigin = SUPABASE_URL ? SUPABASE_URL.replace("/functions/v1", "") : "http://localhost:3000";
      
    // Limpar barra final se presente
    if (safeOrigin.endsWith('/')) {
        safeOrigin = safeOrigin.slice(0, -1);
    }
    
    if (!safeOrigin || !safeOrigin.startsWith("http")) {
        throw new Error("Não foi possível determinar uma URL de origem válida para o Mercado Pago.");
    }

    console.log("Using safeOrigin (Supabase Base URL) for back_urls:", safeOrigin);

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
    
    // Definir back_urls usando a URL base do Supabase
    const backUrls = {
        success: `${safeOrigin}/pagamento-confirmado`,
        failure: `${safeOrigin}/pagamento-falhou`,
        pending: `${safeOrigin}/pagamento-pendente`,
    };

    console.log("Sending back_urls to Mercado Pago:", backUrls);

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
      back_urls: backUrls,
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
      
      // Tenta extrair a mensagem de erro mais específica
      let errorMessage = data.message || "Erro ao criar preferência de pagamento";
      
      if (data.cause && data.cause.length > 0 && data.cause[0].description) {
          errorMessage = data.cause[0].description;
      }
      
      // Se o erro for sobre back_urls, lançamos a mensagem específica
      if (errorMessage.includes("back_url.success must be defined")) {
         throw new Error("Erro de URL: O Mercado Pago rejeitou a URL de retorno. Verifique se o token está correto e se a URL de preview é pública.");
      }
      
      // Lançar o erro mais específico encontrado
      throw new Error(`Erro do Mercado Pago: ${errorMessage}`);
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

// Função de Webhook (Placeholder, precisa ser implementada para processar notificações)
export async function handleWebhook(c: Context) {
    try {
        const body = await c.req.json();
        const topic = c.req.query('topic');
        const id = c.req.query('id');

        console.log(`Webhook received: Topic=${topic}, ID=${id}`);
        
        if (topic === 'payment' && id) {
            // Aqui você faria a lógica para buscar o pagamento no MP e atualizar o status no KV store
            // Exemplo: const paymentDetails = await fetchPaymentDetails(id);
            // if (paymentDetails.status === 'approved') {
            //     await kv.set(`subscription:${paymentDetails.email}`, { status: 'active', ... });
            //     await sendConfirmationEmail({ to: paymentDetails.email, name: paymentDetails.name, orderId: id });
            // }
            
            // Retornar 200 OK para o Mercado Pago
            return c.json({ status: "Notification received and processed (Placeholder)" }, 200);
        }

        return c.json({ status: "Notification received, but not processed (Missing ID or Topic)" }, 200);

    } catch (error) {
        console.error("Webhook processing error:", error);
        // Retornar 500 para que o Mercado Pago tente novamente
        return c.json({ error: "Internal Server Error during webhook processing" }, 500);
    }
}