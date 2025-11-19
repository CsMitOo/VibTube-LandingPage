# ⚡ CHECKLIST RÁPIDO - Setup em 10 Minutos

## 📍 INFORMAÇÕES DO SEU PROJETO

```
Project ID: ivcuanklgyjprgmevyel
URL Base: https://ivcuanklgyjprgmevyel.supabase.co
Webhook URL: https://ivcuanklgyjprgmevyel.supabase.co/functions/v1/make-server-efd1629b/webhook
```

---

## ✅ FASE 1: SETUP INICIAL (5 min)

### 1️⃣ Criar Conta Mercado Pago
- [ ] Acesse: https://www.mercadopago.com.br/developers
- [ ] Clique "Criar conta" ou faça login
- [ ] Confirme seu email

### 2️⃣ Pegar Token de Teste
- [ ] Entre em: https://www.mercadopago.com.br/developers/panel
- [ ] Menu: **"Credenciais"**
- [ ] Seção: **"Credenciais de teste"**
- [ ] Copie: **"Access Token"** (começa com APP_USR-...)

### 3️⃣ Configurar no Supabase
- [ ] ✅ JÁ ESTÁ CONFIGURADO: `MERCADO_PAGO_ACCESS_TOKEN`
- [ ] Se precisar trocar:
  - Supabase → Settings → Edge Functions → Secrets
  - Edite `MERCADO_PAGO_ACCESS_TOKEN`
  - Cole o novo token

### 4️⃣ Criar Webhook
- [ ] No painel: Menu → **"Webhooks"**
- [ ] Clique: **"Criar webhook"**
- [ ] Cole URL:
  ```
  https://ivcuanklgyjprgmevyel.supabase.co/functions/v1/make-server-efd1629b/webhook
  ```
- [ ] Marque: **payment** e **merchant_order**
- [ ] Modo: **Teste**
- [ ] Salvar

---

## 🧪 FASE 2: TESTAR (5 min)

### Modo Demo (Sem Mercado Pago)
- [ ] Abra sua landing page
- [ ] Clique "Entrar Agora"
- [ ] Veja mensagem "Modo Demo Ativo"
- [ ] Teste 3 cenários:

| Email | Resultado |
|-------|-----------|
| `teste@email.com` | ✅ Aprovado |
| `teste.pendente@email.com` | ⏳ Pendente |
| `teste.falha@email.com` | ❌ Recusado |

### Modo Real (Com Mercado Pago)
- [ ] Clique "Modo Demo Ativo" para desativar
- [ ] Faça checkout normal
- [ ] Na página de pagamento, use cartão teste:

```
Cartão: 5031 4332 1540 6351
Nome: APRO
Validade: 11/25
CVV: 123
CPF: 12345678909
```

- [ ] Confirme redirecionamento para página de sucesso

### Verificar Webhook
- [ ] Painel MP → Webhooks → Ver histórico
- [ ] Status deve ser: **200** ✅

---

## 🚀 FASE 3: PRODUÇÃO (Quando estiver pronto)

### 1️⃣ Pegar Token de Produção
- [ ] Painel MP → Credenciais
- [ ] **"Credenciais de produção"**
- [ ] Copie **Access Token**
- [ ] ⚠️ Pode pedir validação de conta

### 2️⃣ Atualizar Supabase
- [ ] Supabase → Secrets
- [ ] Edite `MERCADO_PAGO_ACCESS_TOKEN`
- [ ] Cole token de PRODUÇÃO

### 3️⃣ Criar Webhook de Produção
- [ ] Mesma URL do webhook
- [ ] Modo: **PRODUÇÃO**
- [ ] Salvar

### 4️⃣ Testar com Pagamento Real
- [ ] ⚠️ Vai cobrar de verdade!
- [ ] Faça uma compra teste
- [ ] Confirme funcionamento
- [ ] Pode reembolsar depois

---

## 🆘 AJUDA RÁPIDA

| Problema | Solução |
|----------|---------|
| Webhook retorna 404 | Use Modo Demo por enquanto |
| Erro ao processar | Verifique token no Supabase |
| Cartão teste não funciona | Use nome "APRO" exatamente |
| Modal não abre | F12 → Console → Veja erros |

---

## 📞 LINKS ÚTEIS

- **Painel:** https://www.mercadopago.com.br/developers/panel
- **Docs:** https://www.mercadopago.com.br/developers/pt/reference
- **Suporte:** https://www.mercadopago.com.br/developers/pt/support

---

## 🎯 RESUMO

1. ✅ Conta criada
2. ✅ Token copiado
3. ✅ Supabase configurado
4. ✅ Webhook criado
5. ✅ Testes passaram
6. 🚀 Pronto para vender!

---

**💡 DICA:** Comece com **Modo Demo** para testar sem complicação!
