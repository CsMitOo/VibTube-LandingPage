# 💳 CARTÕES DE TESTE - Mercado Pago

## ⚠️ IMPORTANTE
Use estes cartões APENAS no **Modo Teste** (Sandbox).
No modo produção, use cartões reais.

---

## ✅ APROVADO - Use nome "APRO"

```
╔════════════════════════════════════╗
║  5031 4332 1540 6351               ║
║                                    ║
║  Nome: APRO                        ║
║  Validade: 11/25                   ║
║  CVV: 123                          ║
║  CPF: 12345678909                  ║
╚════════════════════════════════════╝
```

**Resultado:** ✅ Pagamento APROVADO imediatamente

---

## ⏳ PENDENTE - Use nome "CONT"

```
╔════════════════════════════════════╗
║  5031 4332 1540 6351               ║
║                                    ║
║  Nome: CONT                        ║
║  Validade: 11/25                   ║
║  CVV: 123                          ║
║  CPF: 12345678909                  ║
╚════════════════════════════════════╝
```

**Resultado:** ⏳ Pagamento fica PENDENTE

---

## ❌ RECUSADO - Use nome "OTHE"

```
╔════════════════════════════════════╗
║  5031 4332 1540 6351               ║
║                                    ║
║  Nome: OTHE                        ║
║  Validade: 11/25                   ║
║  CVV: 123                          ║
║  CPF: 12345678909                  ║
╚════════════════════════════════════╝
```

**Resultado:** ❌ Pagamento RECUSADO

---

## 🎯 REGRAS IMPORTANTES

### O que muda o resultado?
🔑 **APENAS O NOME DO TITULAR!**

| Nome do Titular | Resultado |
|----------------|-----------|
| APRO | ✅ Aprovado |
| CONT | ⏳ Em análise |
| OTHE | ❌ Outro motivo (recusado) |
| CALL | 📞 Recusado, ligar |
| FUND | 💰 Saldo insuficiente |
| SECU | 🔒 Código segurança inválido |
| EXPI | 📅 Data expiração inválida |
| FORM | 📝 Erro no formulário |

### O que é fixo?
- Número do cartão: **sempre 5031 4332 1540 6351**
- Validade: pode ser qualquer data futura (ex: 11/25)
- CVV: pode ser qualquer 3 dígitos (ex: 123)
- CPF: pode ser qualquer válido (ex: 12345678909)

---

## 🧪 COMO TESTAR

### Passo a Passo:
1. Desative o Modo Demo no modal
2. Faça o checkout normalmente
3. Você será redirecionado para página de pagamento MP
4. Preencha com um dos cartões acima
5. ⚠️ **Atenção no NOME!** É isso que define o resultado
6. Clique em "Pagar"
7. Aguarde redirecionamento

---

## 📱 TESTE PIX (Sandbox)

No modo teste, o PIX também funciona!

1. Faça checkout normalmente
2. Escolha "PIX" como forma de pagamento
3. Aparecerá um QR Code **fake**
4. Use o botão "Pagar agora" (simula pagamento instantâneo)
5. Pronto! Pagamento aprovado

---

## 💡 DICAS

### ✅ Boas Práticas:
- Teste TODOS os cenários (aprovado, pendente, recusado)
- Verifique se o webhook é chamado em cada caso
- Confirme as páginas de retorno corretas
- Veja os pagamentos no painel do Mercado Pago

### ❌ Não Faça:
- Não use cartões reais no modo teste
- Não use cartões de teste no modo produção
- Não compartilhe seus tokens reais

---

## 🔍 VERIFICAR PAGAMENTOS

### No Painel Mercado Pago:
1. https://www.mercadopago.com.br/developers/panel
2. Menu: **"Atividades"** ou **"Transações"**
3. Filtro: **Modo Teste**
4. Veja todos os pagamentos de teste

### Detalhes de cada pagamento:
- ID da transação
- Status (approved, pending, rejected)
- Valor
- Data/hora
- Meio de pagamento
- Dados do comprador

---

## 🌍 MAIS CARTÕES (Outros Países)

### Visa (Outros países):
```
Número: 4509 9535 6623 3704
Nome: APRO / CONT / OTHE
```

### Mastercard:
```
Número: 5031 7557 3453 0604
Nome: APRO / CONT / OTHE
```

### American Express:
```
Número: 3711 803032 57522
Nome: APRO / CONT / OTHE
```

**⚠️ Use principalmente o Mastercard 5031 4332 1540 6351 - é o mais testado!**

---

## 📚 DOCUMENTAÇÃO OFICIAL

Mais detalhes em:
https://www.mercadopago.com.br/developers/pt/docs/checkout-api/integration-test/test-cards

---

## ✨ EXEMPLOS PRÁTICOS

### Teste 1: Compra Aprovada
```
1. Modal checkout → Desativar demo
2. Preencher dados pessoais
3. Mercado Pago página
4. Cartão: 5031 4332 1540 6351
5. Nome: APRO 👈 IMPORTANTE!
6. CVV: 123, Validade: 11/25
7. Pagar
8. ✅ Sucesso!
```

### Teste 2: Compra Recusada
```
1. Modal checkout → Desativar demo
2. Preencher dados pessoais
3. Mercado Pago página
4. Cartão: 5031 4332 1540 6351
5. Nome: OTHE 👈 IMPORTANTE!
6. CVV: 123, Validade: 11/25
7. Pagar
8. ❌ Recusado!
```

### Teste 3: Compra Pendente
```
1. Modal checkout → Desativar demo
2. Preencher dados pessoais
3. Mercado Pago página
4. Cartão: 5031 4332 1540 6351
5. Nome: CONT 👈 IMPORTANTE!
6. CVV: 123, Validade: 11/25
7. Pagar
8. ⏳ Em análise!
```

---

🎉 **Agora você tem todos os cartões para testar!**

**Dica Final:** Cole este documento ao lado do navegador enquanto testa! 📌
