# 🚀 GUIA COMPLETO: Configurar Sistema de Pagamento do Zero

## 📋 ÍNDICE

1. [Preparação](#-etapa-1-preparação)
2. [Criar Conta Mercado Pago Developers](#-etapa-2-criar-conta-mercado-pago-developers)
3. [Obter Credenciais](#-etapa-3-obter-credenciais-access-token)
4. [Verificar Supabase](#-etapa-4-verificar-configuração-supabase)
5. [Configurar Webhook](#-etapa-5-configurar-webhook-no-mercado-pago)
6. [Testar Sistema (Modo Teste)](#-etapa-6-testar-sistema-modo-teste)
7. [Ativar Produção](#-etapa-7-ativar-modo-produção)
8. [Troubleshooting](#-troubleshooting)

---

# 🎯 ETAPA 1: Preparação

## O que você vai precisar:
- ✅ CPF ou CNPJ
- ✅ Email válido
- ✅ Acesso ao projeto no Figma Make
- ✅ Acesso ao Supabase (se necessário)

## Tempo estimado:
⏱️ **15-20 minutos**

---

# 🏦 ETAPA 2: Criar Conta Mercado Pago Developers

## Passo 2.1: Acessar o site
1. Abra seu navegador
2. Acesse: **https://www.mercadopago.com.br/developers**
3. Clique em **"Criar conta grátis"** ou **"Começar agora"**

## Passo 2.2: Fazer cadastro
Você tem 2 opções:

### Opção A: Se já tem conta Mercado Pago
1. Clique em **"Entrar"**
2. Digite seu email e senha
3. Faça login normalmente
4. Você será direcionado para o painel de desenvolvedores

### Opção B: Criar nova conta
1. Clique em **"Criar conta"**
2. Preencha:
   - **Nome completo**
   - **Email** (use um válido, você receberá confirmação)
   - **Senha** (mínimo 6 caracteres)
   - **CPF ou CNPJ**
3. Aceite os termos de uso
4. Clique em **"Criar conta"**
5. **Verifique seu email** e confirme o cadastro

## Passo 2.3: Acessar Painel de Desenvolvedores
1. Após login, você estará em: `https://www.mercadopago.com.br/developers/panel`
2. Se não estiver, clique em **"Desenvolvedores"** no menu
3. Você verá o painel com várias opções

✅ **Pronto! Conta criada e verificada.**

---

# 🔑 ETAPA 3: Obter Credenciais (Access Token)

## Passo 3.1: Acessar Credenciais
1. No painel: `https://www.mercadopago.com.br/developers/panel`
2. No menu lateral esquerdo, procure:
   - **"Credenciais"** ou
   - **"Credentials"** ou
   - **"Suas integrações"**
3. Clique nessa opção

## Passo 3.2: Criar/Selecionar Aplicação
1. Você verá duas opções:
   - **Credenciais de teste** (para testar)
   - **Credenciais de produção** (para vender de verdade)

2. **Vamos começar com TESTE:**
   - Clique em **"Credenciais de teste"**

## Passo 3.3: Copiar Access Token de TESTE
1. Você verá duas chaves:
   - **Public Key** (começa com `APP_USR-...`)
   - **Access Token** (começa com `APP_USR-...` também, mas é diferente)

2. **Copie o ACCESS TOKEN** (não a Public Key!)
   - Exemplo: `APP_USR-1234567890-123456-abcd1234efgh5678-987654321`
   
3. **GUARDE ESSE TOKEN!** Vamos usar no próximo passo

### ⚠️ IMPORTANTE:
- ❌ NÃO compartilhe esse token publicamente
- ❌ NÃO coloque no código frontend
- ✅ Use APENAS no backend (Supabase)

✅ **Token copiado com sucesso!**

---

# ☁️ ETAPA 4: Verificar Configuração Supabase

## Passo 4.1: Verificar se o token já está configurado

**ÓTIMA NOTÍCIA:** O sistema já detectou que você tem o token configurado!

✅ **`MERCADO_PAGO_ACCESS_TOKEN`** - Já configurado

Se precisar atualizar ou trocar o token:

## Passo 4.2: Acessar Supabase (se necessário)
1. Acesse: **https://supabase.com/dashboard/projects**
2. Encontre seu projeto: **`ivcuanklgyjprgmevyel`**
3. Clique no projeto

## Passo 4.3: Configurar Secret (se necessário)
1. No menu lateral, clique em **"Settings"** (ícone de engrenagem)
2. Clique em **"Edge Functions"**
3. Role até **"Function Secrets"** ou **"Secrets"**
4. Procure por: **`MERCADO_PAGO_ACCESS_TOKEN`**

### Se NÃO existir:
1. Clique em **"Add secret"** ou **"New secret"**
2. **Name:** `MERCADO_PAGO_ACCESS_TOKEN`
3. **Value:** Cole o Access Token que você copiou
4. Clique em **"Save"** ou **"Add"**

### Se JÁ existir:
1. Clique no ícone de **lápis** (editar)
2. Cole o novo token (se quiser atualizar)
3. Clique em **"Save"**

✅ **Credenciais configuradas no Supabase!**

---

# 🔗 ETAPA 5: Configurar Webhook no Mercado Pago

## O que é Webhook?
É um link que o Mercado Pago chama automaticamente quando um pagamento é aprovado/recusado.

## Passo 5.1: Acessar Webhooks
1. Volte para: **https://www.mercadopago.com.br/developers/panel**
2. No menu lateral esquerdo, procure:
   - **"Webhooks"** ou
   - **"Notificações"** ou
   - **"Webhooks v2"**
3. Clique nessa opção

## Passo 5.2: Criar Novo Webhook
1. Você verá uma lista (pode estar vazia)
2. Clique em:
   - **"Criar webhook"** ou
   - **"Nova notificação"** ou
   - **"+ Novo"**

## Passo 5.3: Configurar o Webhook

### Campo 1: URL de Notificação
```
https://ivcuanklgyjprgmevyel.supabase.co/functions/v1/make-server-efd1629b/webhook
```
**⚠️ COPIE EXATAMENTE COMO ESTÁ ACIMA!**

### Campo 2: Eventos/Tópicos
Marque/Selecione:
- ✅ **`payment`** (Pagamentos)
- ✅ **`merchant_order`** (Pedidos - se houver a opção)

Se houver opção de escolher eventos específicos:
- ✅ `payment.created` (Pagamento criado)
- ✅ `payment.updated` (Pagamento atualizado)

### Campo 3: Modo/Environment
- ✅ Selecione **"Teste"** ou **"Test"**
- ❌ NÃO selecione "Produção" ainda

### Campo 4: Aplicação (se pedir)
- Selecione sua aplicação (geralmente já vem selecionada)

## Passo 5.4: Salvar Webhook
1. Revise todas as informações
2. Clique em **"Salvar"** ou **"Criar"** ou **"Create"**

## Passo 5.5: Verificar Status
Após salvar, você verá o webhook na lista:
- ✅ **Status: Ativo** (bolinha verde) = Configurado corretamente!
- ❌ **Status: Erro** (bolinha vermelha) = Verifique a URL

✅ **Webhook configurado com sucesso!**

---

# 🧪 ETAPA 6: Testar Sistema (Modo Teste)

## Opção 1: Usar Modo Demo (RECOMENDADO para testar rápido)

### Passo 6.1: Acessar a landing page
1. Abra seu projeto no navegador
2. Role até a seção de preço
3. Clique em **"Entrar Agora"**

### Passo 6.2: Preencher formulário
Você verá uma mensagem **"🎭 Modo Demonstração Ativo"** no topo.

**Teste 1 - Pagamento APROVADO:**
- **Nome:** João Silva
- **Email:** joao@teste.com (qualquer email)
- **Telefone:** (11) 99999-9999
- Clique em **"Continuar para Pagamento"**
- **Resultado:** Página de sucesso ✅

**Teste 2 - Pagamento PENDENTE:**
- **Nome:** Maria Silva
- **Email:** maria.pendente@teste.com (com palavra "pendente")
- **Telefone:** (11) 98888-8888
- Clique em **"Continuar para Pagamento"**
- **Resultado:** Página pendente ⏳

**Teste 3 - Pagamento RECUSADO:**
- **Nome:** Pedro Silva
- **Email:** pedro.falha@teste.com (com palavra "falha")
- **Telefone:** (11) 97777-7777
- Clique em **"Continuar para Pagamento"**
- **Resultado:** Página de erro ❌

✅ **Modo Demo funcionando!**

---

## Opção 2: Testar com Mercado Pago Real (Sandbox)

⚠️ **ATENÇÃO:** Só funciona se o servidor Supabase estiver deployado.

### Passo 6.3: Desativar Modo Demo
1. No modal de checkout, clique em **"✓ Modo Demo Ativo"** (no rodapé)
2. A mensagem deve mudar para **"Ativar Modo Demo"**

### Passo 6.4: Fazer um pagamento teste
1. Preencha o formulário:
   - **Nome:** Seu nome
   - **Email:** Seu email real
   - **Telefone:** Seu telefone
2. Clique em **"Continuar para Pagamento"**

### Passo 6.5: Na página do Mercado Pago
Você será redirecionado para uma página de pagamento.

**Use um dos cartões de TESTE abaixo:**

#### ✅ Para APROVAR o pagamento:
```
Número: 5031 4332 1540 6351
Nome: APRO
Vencimento: 11/25
CVV: 123
CPF: 12345678909
```

#### ⏳ Para DEIXAR PENDENTE:
```
Número: 5031 4332 1540 6351
Nome: CONT
Vencimento: 11/25
CVV: 123
CPF: 12345678909
```

#### ❌ Para RECUSAR:
```
Número: 5031 4332 1540 6351
Nome: OTHE
Vencimento: 11/25
CVV: 123
CPF: 12345678909
```

**⚠️ IMPORTANTE:** O **nome do titular** define o resultado!

### Passo 6.6: Confirmar pagamento
1. Preencha os dados do cartão de teste
2. Clique em **"Pagar"**
3. Aguarde o processamento
4. Você será redirecionado de volta para seu site

### Passo 6.7: Verificar Webhook
1. Volte para: **https://www.mercadopago.com.br/developers/panel**
2. Vá em **"Webhooks"**
3. Clique no webhook que você criou
4. Veja o **"Histórico"** ou **"Últimas notificações"**
5. Você deve ver uma chamada com:
   - **Status: 200** ✅ = Funcionou!
   - **Status: 404** ❌ = Servidor não respondeu

✅ **Sistema testado com sucesso!**

---

# 🚀 ETAPA 7: Ativar Modo PRODUÇÃO

⚠️ **CUIDADO:** No modo produção, pagamentos são REAIS e cobram dinheiro de verdade!

## Quando ativar produção?
- ✅ Todos os testes passaram
- ✅ Webhook retorna status 200
- ✅ Páginas de retorno funcionam
- ✅ Você está pronto para vender

## Passo 7.1: Obter Credenciais de PRODUÇÃO
1. Acesse: **https://www.mercadopago.com.br/developers/panel**
2. Vá em **"Credenciais"**
3. Clique em **"Credenciais de produção"**

### ⚠️ Pode pedir validação da conta:
O Mercado Pago pode pedir:
- Confirmar identidade (foto de documento)
- Informações da empresa
- Dados bancários

Complete o que for solicitado.

## Passo 7.2: Copiar Access Token de PRODUÇÃO
1. Na seção **"Credenciais de produção"**
2. Copie o **Access Token** (diferente do de teste!)
3. **TOKEN FORNECIDO:** `APP_USR-3681367590923066-111823-fe4bc251f550d359ca93bb50789ce149-2992097832`

## Passo 7.3: Atualizar no Supabase (AÇÃO OBRIGATÓRIA)
1. Acesse Supabase: **https://supabase.com/dashboard/projects**
2. Projeto: **`ivcuanklgyjprgmevyel`**
3. **Settings** → **Edge Functions** → **Secrets**
4. Encontre **`MERCADO_PAGO_ACCESS_TOKEN`**
5. **Edite** e cole o token de PRODUÇÃO fornecido acima.
6. Salve

## Passo 7.4: Criar Webhook de PRODUÇÃO
1. Volte para: **https://www.mercadopago.com.br/developers/panel**
2. Vá em **"Webhooks"**
3. Clique em **"Criar webhook"**
4. **URL:** (mesma de antes)
   ```
   https://ivcuanklgyjprgmevyel.supabase.co/functions/v1/make-server-efd1629b/webhook
   ```
5. **Eventos:** payment, merchant_order
6. **Modo:** ✅ **PRODUÇÃO** ou **PRODUCTION**
7. Salve

## Passo 7.5: Testar em Produção
⚠️ **ATENÇÃO:** Agora você vai fazer um pagamento REAL!

1. Use um cartão real ou PIX real
2. Faça um pagamento de teste (pode ser o valor mínimo)
3. Confirme que tudo funciona
4. Você pode reembolsar pagamentos de teste pelo painel do Mercado Pago

✅ **Sistema em PRODUÇÃO!**

---

# ❌ TROUBLESHOOTING

## Problema 1: Webhook retorna 404
**Causa:** Servidor Supabase não está deployado ou URL errada

**Solução:**
1. Verifique se a URL está correta (copie novamente)
2. Teste o health check:
   ```
   GET https://ivcuanklgyjprgmevyel.supabase.co/functions/v1/make-server-efd1629b/health
   ```
3. Se retornar 404, o servidor não está no ar
4. Use o **Modo Demo** enquanto isso

---

## Problema 2: "Erro ao processar pagamento"
**Causa:** Access Token inválido ou não configurado

**Solução:**
1. Verifique se você copiou o token correto
2. Certifique-se de usar token de TESTE no modo teste
3. Verifique no Supabase se o secret está salvo
4. O nome do secret deve ser exatamente: `MERCADO_PAGO_ACCESS_TOKEN`

---

## Problema 3: Cartão de teste não funciona
**Causa:** Dados do cartão incorretos

**Solução:**
1. Use EXATAMENTE os dados fornecidos
2. O **nome do titular** define o resultado:
   - **APRO** = Aprovado
   - **CONT** = Pendente
   - **OTHE** = Recusado
3. Não invente números de cartão

---

## Problema 4: Webhook não recebe notificações
**Causa:** Webhook mal configurado ou servidor offline

**Solução:**
1. Volte no painel do Mercado Pago
2. Verifique se o webhook está **Ativo** (bolinha verde)
3. Veja o histórico de notificações
4. Se todas retornam erro, verifique a URL
5. Teste fazer um novo pagamento

---

## Problema 5: "Modal não abre" ou "Nada acontece"
**Causa:** JavaScript com erro ou botão não conectado

**Solução:**
1. Abra o Console do navegador (F12)
2. Veja se há erros em vermelho
3. Recarregue a página (Ctrl+F5)
4. Teste em modo anônimo/privado

---

## Problema 6: Modo Demo não funciona
**Causa:** Improvável, mas pode ser cache

**Solução:**
1. Limpe o cache do navegador
2. Recarregue com Ctrl+F5
3. Tente em outro navegador
4. Verifique se há erros no console

---

# 📞 SUPORTE

## Documentação Oficial:
- **Mercado Pago Developers:** https://www.mercadopago.com.br/developers
- **API Reference:** https://www.mercadopago.com.br/developers/pt/reference
- **Webhooks Guide:** https://www.mercadopago.com.br/developers/pt/docs/webhooks

## Contato Mercado Pago:
- **Suporte:** https://www.mercadopago.com.br/developers/pt/support
- **Comunidade:** https://www.mercadopago.com.br/developers/pt/community

---

# ✅ CHECKLIST FINAL

Antes de ir para produção, confirme:

- [ ] Conta Mercado Pago Developers criada e verificada
- [ ] Access Token de TESTE copiado
- [ ] Secret configurado no Supabase
- [ ] Webhook de TESTE criado e ativo
- [ ] Teste com Modo Demo: ✅ Sucesso, ⏳ Pendente, ❌ Falha
- [ ] Teste com cartão de teste APRO: Pagamento aprovado
- [ ] Webhook recebe notificações (status 200)
- [ ] Páginas de retorno funcionam
- [ ] Access Token de PRODUÇÃO copiado
- [X] Secret atualizado com token de produção (Ação do Usuário)
- [ ] Webhook de PRODUÇÃO criado
- [ ] Teste real feito e funcionando

---

# 🎉 PARABÉNS!

Seu sistema de pagamento está configurado e funcionando!

**Próximos passos:**
- 📊 Monitore os pagamentos no painel do Mercado Pago
- 📧 Configure emails de confirmação (se ainda não tiver)
- 🔒 Implemente segurança adicional (se necessário)
- 📈 Acompanhe as vendas e assinaturas

**Boa sorte com seu VIBTUBE ACADEMY! 🚀✨**