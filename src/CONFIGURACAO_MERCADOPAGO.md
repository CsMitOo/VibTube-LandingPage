# 🏦 Configuração Mercado Pago - VIBTUBE ACADEMY

## 📍 Informações do Projeto

**Project ID:** `ivcuanklgyjprgmevyel`

**URL Base Supabase:** `https://ivcuanklgyjprgmevyel.supabase.co`

---

## 🔐 1. Credenciais (Secrets do Supabase)

### Já Configuradas:
- ✅ `MERCADO_PAGO_ACCESS_TOKEN` - Token de acesso do Mercado Pago

### Como obter o Access Token:
1. Acesse: https://www.mercadopago.com.br/developers/panel
2. Vá em **"Credenciais"** ou **"Credentials"**
3. **Para Testes:** Copie o **Access Token de Teste**
4. **Para Produção:** Copie o **Access Token de Produção**
5. Cole no Supabase (já foi configurado como `MERCADO_PAGO_ACCESS_TOKEN`)

---

## 🔗 2. Webhook URL

**URL do Webhook:**
```
https://ivcuanklgyjprgmevyel.supabase.co/functions/v1/make-server-efd1629b/webhook
```

### Como Configurar no Mercado Pago:

1. **Acessar Painel:**
   - URL: https://www.mercadopago.com.br/developers/panel
   - Login com sua conta Mercado Pago

2. **Criar Webhook:**
   - Menu: **"Webhooks"** ou **"Notificações"**
   - Botão: **"Criar Webhook"** ou **"Nova notificação"**

3. **Configurações:**
   ```
   URL de notificação: https://ivcuanklgyjprgmevyel.supabase.co/functions/v1/make-server-efd1629b/webhook
   Eventos: payment, merchant_order
   Modo: Teste (para desenvolvimento) ou Produção (para ao vivo)
   ```

4. **Salvar:** Clique em **"Salvar"** ou **"Criar"**

---

## 🎯 3. Endpoints Disponíveis

### Health Check (Testar se servidor está online):
```
GET https://ivcuanklgyjprgmevyel.supabase.co/functions/v1/make-server-efd1629b/health
```

### Criar Checkout (Gerar link de pagamento):
```
POST https://ivcuanklgyjprgmevyel.supabase.co/functions/v1/make-server-efd1629b/checkout
Content-Type: application/json
Authorization: Bearer {SUPABASE_ANON_KEY}

Body:
{
  "name": "João Silva",
  "email": "joao@email.com",
  "phone": "(11) 99999-9999",
  "planType": "annual",
  "amount": 129.90
}
```

### Webhook (Recebe notificações do Mercado Pago):
```
POST https://ivcuanklgyjprgmevyel.supabase.co/functions/v1/make-server-efd1629b/webhook
```

---

## 🔄 4. Fluxo de Pagamento

1. **Usuário clica** em "Entrar Agora"
2. **Frontend envia** dados para `/checkout`
3. **Backend cria** preferência no Mercado Pago
4. **Usuário é redirecionado** para página de pagamento
5. **Usuário paga** (PIX, Cartão, Boleto)
6. **Mercado Pago notifica** via webhook
7. **Backend ativa** assinatura automaticamente
8. **Usuário recebe** email de confirmação

---

## 📋 5. URLs de Retorno

Após o pagamento, o usuário é redirecionado para:

- ✅ **Sucesso:** `/pagamento-confirmado`
- ⏳ **Pendente:** `/pagamento-pendente`
- ❌ **Falha:** `/pagamento-falhou`

---

## 🧪 6. Modo Demo

Para testar sem Mercado Pago:
- O sistema vem com **Modo Demo ativado por padrão**
- Simula pagamentos sem integração real
- Útil para desenvolvimento e apresentações

### Emails de teste no Modo Demo:
- `usuario@email.com` → ✅ Pagamento Aprovado
- `teste.pendente@email.com` → ⏳ Pagamento Pendente
- `teste.falha@email.com` → ❌ Pagamento Recusado

---

## 🔐 7. Cartões de Teste (Sandbox Mercado Pago)

### Aprovar Pagamento:
```
Cartão: 5031 4332 1540 6351
CVV: 123
Validade: 11/25
Titular: APRO
CPF: 12345678909
```

### Pagamento Pendente:
```
Cartão: 5031 4332 1540 6351
CVV: 123
Validade: 11/25
Titular: CONT
CPF: 12345678909
```

### Recusar Pagamento:
```
Cartão: 5031 4332 1540 6351
CVV: 123
Validade: 11/25
Titular: OTHE
CPF: 12345678909
```

**⚠️ Importante:** O nome do titular define o resultado!

---

## 📊 8. Monitoramento

### Ver Logs do Webhook:
1. Painel Mercado Pago > Webhooks
2. Histórico de notificações
3. Status 200 = Sucesso ✅

### Ver Pagamentos:
1. Painel Mercado Pago > Atividades
2. Filtre por data/status
3. Veja detalhes de cada transação

---

## ✅ 9. Checklist de Configuração

- [ ] Criar conta no Mercado Pago Developers
- [ ] Copiar Access Token (Teste ou Produção)
- [ ] Configurar no Supabase como `MERCADO_PAGO_ACCESS_TOKEN`
- [ ] Criar Webhook no painel Mercado Pago
- [ ] Colar URL do webhook
- [ ] Testar com cartão de teste
- [ ] Verificar webhook no histórico
- [ ] Modo Produção: Trocar para Access Token de Produção

---

## 🆘 10. Suporte

**Documentação Mercado Pago:**
- Developers: https://www.mercadopago.com.br/developers
- API Reference: https://www.mercadopago.com.br/developers/pt/reference
- Webhooks: https://www.mercadopago.com.br/developers/pt/docs/webhooks

**Problemas Comuns:**
- Webhook retorna 404: Servidor não está deployado
- Pagamento não aparece: Verifique Access Token correto
- Erro no cartão: Use exatamente os dados de teste acima

---

🚀 **VIBTUBE ACADEMY - Sistema de Pagamento Profissional**
