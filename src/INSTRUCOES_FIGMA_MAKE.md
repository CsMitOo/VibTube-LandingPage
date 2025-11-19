# 📘 Instruções para Configurar no Figma Make

## ✅ COMO CONFIGURAR AS PÁGINAS DE PAGAMENTO

Para que o sistema de checkout funcione corretamente no Figma Make, você precisa criar **4 telas separadas**:

---

## 🎯 PASSO A PASSO

### 1️⃣ **Tela Principal (Landing Page)**
- **Nome da tela:** `VIBTUBE ACADEMY` (ou qualquer nome)
- **Arquivo:** Use `App.tsx` como entrypoint
- **URL:** Esta será sua página inicial

---

### 2️⃣ **Tela: Pagamento Confirmado** ✅
- **Nome da tela:** `Pagamento Confirmado`
- **Arquivo entrypoint:** `PagamentoConfirmado.tsx`
- **Quando criar:** Clique em "Add Screen" no Figma Make
- **URL gerada:** Algo como `https://seu-projeto.make.figma.com/pagamento-confirmado`

**Esta tela mostra:**
- ✅ Ícone de sucesso
- Mensagem de confirmação
- Botão para acessar a área do aluno
- Botão para voltar à home

---

### 3️⃣ **Tela: Pagamento Pendente** ⏳
- **Nome da tela:** `Pagamento Pendente`
- **Arquivo entrypoint:** `PagamentoPendente.tsx`
- **URL gerada:** `https://seu-projeto.make.figma.com/pagamento-pendente`

**Esta tela mostra:**
- ⏳ Ícone de relógio
- Mensagem explicando que o pagamento está em análise
- Instruções sobre o que fazer
- Botão para voltar à home

---

### 4️⃣ **Tela: Pagamento Falhou** ❌
- **Nome da tela:** `Pagamento Falhou`
- **Arquivo entrypoint:** `PagamentoFalhou.tsx`
- **URL gerada:** `https://seu-projeto.make.figma.com/pagamento-falhou`

**Esta tela mostra:**
- ❌ Ícone de erro
- Mensagem explicando o que aconteceu
- Possíveis causas do erro
- Botão para tentar novamente
- Botão para voltar à home

---

## 🔗 CONFIGURAR URLs NO MERCADO PAGO

Depois de criar as 4 telas no Figma Make, você terá URLs como:

```
✅ Sucesso:  https://seu-projeto.make.figma.com/pagamento-confirmado
⏳ Pendente: https://seu-projeto.make.figma.com/pagamento-pendente
❌ Falha:    https://seu-projeto.make.figma.com/pagamento-falhou
```

**IMPORTANTE:** O backend já está configurado para detectar automaticamente a origem e gerar as URLs corretas! Você **NÃO** precisa editar código.

---

## 🎨 NAVEGAÇÃO ENTRE TELAS

### No Figma Make, você pode adicionar navegação usando botões:

**Exemplo: Botão "Voltar para Home"**
1. Selecione o botão na tela de pagamento
2. Configure a ação: `Navigate to → VIBTUBE ACADEMY`
3. Isso vai navegar para a tela principal

**Exemplo: Botão "Tentar Novamente" (na tela de falha)**
1. Selecione o botão
2. Configure a ação: `Navigate to → VIBTUBE ACADEMY`
3. O usuário volta para a home e pode tentar de novo

---

## 📁 ESTRUTURA DOS ARQUIVOS

```
/
├── App.tsx                      ← Landing page principal (Tela 1)
├── PagamentoConfirmado.tsx      ← Tela de sucesso (Tela 2)
├── PagamentoPendente.tsx        ← Tela de pendente (Tela 3)
├── PagamentoFalhou.tsx          ← Tela de falha (Tela 4)
│
├── /components
│   ├── PaymentSuccess.tsx       ← Componente da página de sucesso
│   ├── PaymentPending.tsx       ← Componente da página de pendente
│   ├── PaymentFailure.tsx       ← Componente da página de falha
│   ├── CheckoutModal.tsx        ← Modal de checkout
│   └── ...outros componentes
│
└── /supabase/functions/server
    ├── checkout.tsx             ← Processa pagamentos e gera URLs
    └── index.tsx                ← Servidor principal
```

---

## 🧪 TESTANDO O FLUXO COMPLETO

### 1. **Teste o Checkout:**
- Abra a landing page
- Clique em "Começar Agora"
- Preencha o formulário
- Clique em "Finalizar Compra"
- Você será redirecionado para o Mercado Pago

### 2. **Teste as Páginas de Retorno:**
- **Pagamento Aprovado:** Mercado Pago redireciona para `/pagamento-confirmado`
- **Pagamento Pendente:** Mercado Pago redireciona para `/pagamento-pendente`
- **Pagamento Falhou:** Mercado Pago redireciona para `/pagamento-falhou`

---

## ⚙️ BACKEND - URLs Automáticas

O backend detecta automaticamente a origem da requisição:

```typescript
back_urls: {
  success: `${origin}/pagamento-confirmado`,
  failure: `${origin}/pagamento-falhou`,
  pending: `${origin}/pagamento-pendente`,
}
```

**Funciona em:**
- ✅ Desenvolvimento local (localhost:5173)
- ✅ Preview do Figma Make
- ✅ Produção (seu domínio customizado)

---

## 🚀 PRÓXIMOS PASSOS

1. ✅ Criar as 4 telas no Figma Make
2. ✅ Configurar os arquivos entrypoint corretos
3. ✅ Testar a navegação entre telas
4. ✅ Testar o fluxo completo de checkout
5. ✅ Configurar o Mercado Pago em produção

---

## 💡 DICAS

### ✅ **CORRETO (Figma Make):**
```
Tela 1: VIBTUBE ACADEMY        → App.tsx
Tela 2: Pagamento Confirmado   → PagamentoConfirmado.tsx
Tela 3: Pagamento Pendente     → PagamentoPendente.tsx
Tela 4: Pagamento Falhou       → PagamentoFalhou.tsx
```

### ❌ **ERRADO (Tentar usar rotas em uma tela só):**
```
❌ React Router
❌ Hash navigation (#pagamento-confirmado)
❌ pathname navigation (/pagamento-confirmado)
```

---

## 📞 SUPORTE

Se tiver dúvidas, consulte a documentação do Figma Make sobre como criar múltiplas telas e navegação entre elas.

**Documentação:** https://help.figma.com/hc/en-us/articles/figma-make

---

✅ **TUDO PRONTO!** Agora você pode criar as telas no Figma Make e o sistema funcionará perfeitamente! 🎉
