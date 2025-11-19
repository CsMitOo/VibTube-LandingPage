# ⚠️ Ação Necessária: Configurar Redirecionamento no Mercado Pago

O Mercado Pago rejeitou a URL de retorno (back_urls) que o sistema estava enviando (a URL de preview do Figma Make).

Para garantir que o checkout funcione, o backend agora está enviando a **URL base do Supabase** como URL de retorno, pois ela é um domínio público e confiável.

**URL Base do Supabase:** `https://ivcuanklgyjprgmevyel.supabase.co`

Isso significa que, após o pagamento, o Mercado Pago tentará redirecionar o usuário para:

- ✅ Sucesso: `https://ivcuanklgyjprgmevyel.supabase.co/pagamento-confirmado`
- ❌ Falha: `https://ivcuanklgyjprgmevyel.supabase.co/pagamento-falhou`
- ⏳ Pendente: `https://ivcuanklgyjprgmevyel.supabase.co/pagamento-pendente`

**Como essas páginas não existem no Supabase, o usuário verá um erro 404.**

## 🛠️ SOLUÇÃO: Redirecionamento no Figma Make

Você precisa configurar o Figma Make para que as URLs acima sejam tratadas como **rotas de entrada** que redirecionam para as telas corretas do seu projeto.

### 1. Crie as Telas no Figma Make

Certifique-se de que você tem as 4 telas criadas no Figma Make, conforme o guia:

- `VIBTUBE ACADEMY` (App.tsx)
- `Pagamento Confirmado` (PagamentoConfirmado.tsx)
- `Pagamento Pendente` (PagamentoPendente.tsx)
- `Pagamento Falhou` (PagamentoFalhou.tsx)

### 2. Configure o Redirecionamento no Supabase (Ação do Usuário)

Se você tiver acesso ao painel do Supabase, você pode configurar um redirecionamento de domínio para que qualquer requisição para `https://ivcuanklgyjprgmevyel.supabase.co/pagamento-confirmado` seja redirecionada para a URL de preview do Figma Make.

**Alternativa (Mais Simples): Use o Modo Demo**

Se você não puder configurar o redirecionamento no Supabase ou no Figma Make, a única maneira de testar o fluxo completo de redirecionamento no preview é:

1. **Ativar o Modo Demo** no modal de checkout.
2. O Modo Demo simula o redirecionamento diretamente no frontend, ignorando o Mercado Pago e o problema de URL.

---

## 💡 Próximo Passo Imediato:

Para continuar o desenvolvimento e testar o fluxo de sucesso/falha, **ative o Modo Demo** no modal de checkout.

Se você deseja testar a integração real do Mercado Pago, você precisará:

1. **Configurar um domínio customizado** no Figma Make.
2. **Usar esse domínio customizado** como `safeOrigin` no backend (o que exigiria uma nova alteração no `checkout.tsx` para usar uma variável de ambiente).

Por enquanto, por favor, <dyad-command type="restart"></dyad-command> o servidor e **ative o Modo Demo** no modal para prosseguir com os testes de fluxo.