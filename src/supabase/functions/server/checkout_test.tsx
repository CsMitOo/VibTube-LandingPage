import type { Context } from "npm:hono";
import * as kv from "./kv_store.tsx";

const MERCADO_PAGO_ACCESS_TOKEN = Deno.env.get("MERCADO_PAGO_ACCESS_TOKEN");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");

interface CheckoutRequest {
  name: string;
  email: string;
  phone: string;
  origin?: string;
}

export async function handleTestCheckout(c: Context) {
  const TEST_AMOUNT = 1.00; // Valor fixo de R$ 1,00 para teste

  try {
    const body: CheckoutRequest = await c.req.json();
    
    console.log("Test Checkout request received:", { email: body.email, amount: TEST_AMOUNT });

    if (!body.name || !body.email || !body.phone) {
      return c.json({ error: "Dados incompletos" }, 400);
    }

    // 1. Determinar o Origin: Usamos a URL base do Supabase para garantir que o Mercado Pago aceite.
    let safeOrigin = SUPABASE_URL ? SUPABASE_URL.replace("/functions/v1", "") : "http://localhost:3000";
      
    if (safeOrigin.endsWith('/')) {
        safeOrigin = safeOrigin.slice(0, -1);
    }
    
    if (!safeOrigin || !safeOrigin.startsWith("http")) {
        throw new Error("Não foi possível determinar uma URL de origem válida para o Mercado Pago.");
    }

    // Verificar se o token do Mercado Pago está configurado
    if (!MERCADO_PAGO_ACCESS_TOKEN) {
      return c.json({ 
        error: "Sistema de pagamento em configuração. MERCADO_PAGO_ACCESS_TOKEN não está configurado.",
      }, 503);
    }
    
    // Definir back_urls usando a URL base do Supabase
    const backUrls = {
        success: `${safeOrigin}/pagamento-confirmado`,
        failure: `${safeOrigin}/pagamento-falhou`,
        pending: `${safeOrigin}/pagamento-pendente`,
    };

    // Criar preferência de pagamento no Mercado Pago
    const preference = {
      items: [
        {
          title: "VIBTUBE ACADEMY - Teste de Produção",
          description: "Pagamento de teste no valor de R$ 1,00",
          quantity: 1,
          currency_id: "BRL",
          unit_price: TEST_AMOUNT,
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
      let errorMessage = data.message || "Erro ao criar preferência de pagamento de teste";
      if (data.cause && data.cause.length > 0 && data.cause[0].description) {
          errorMessage = data.cause[0].description;
      }
      throw new Error(`Erro do Mercado Pago: ${errorMessage}`);
    }

    // Salvar informações do pedido (usando o ID da preferência)
    const orderId = data.id;
    await kv.set(`order:${orderId}`, {
      orderId,
      email: body.email,
      name: body.name,
      phone: body.phone,
      planType: "test_1_real",
      amount: TEST_AMOUNT,
      status: "pending",
      createdAt: new Date().toISOString(),
      mercadoPagoId: data.id,
    });

    console.log("Test Checkout created successfully:", { orderId, email: body.email });

    // Retornar URL de pagamento
    return c.json({
      success: true,
      paymentUrl: data.init_point, // URL para redirecionar o usuário
      orderId: data.id,
    });
  } catch (error) {
    console.error("Test Checkout error:", error);
    return c.json(
      { 
        error: error instanceof Error ? error.message : "Erro ao processar checkout de teste",
        details: error instanceof Error ? error.stack : undefined
      },
      500
    );
  }
}