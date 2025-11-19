# 🤖 Regras de Desenvolvimento e Stack Tecnológico (VIBTUBE ACADEMY)

Este documento define o stack tecnológico e as regras de uso de bibliotecas para garantir a consistência, manutenibilidade e elegância do código.

## 🛠️ Stack Tecnológico

1.  **Framework:** React (TypeScript)
2.  **Build Tool:** Vite
3.  **Estilização:** Tailwind CSS (abordagem mobile-first e responsiva)
4.  **Componentes UI:** shadcn/ui (construído sobre Radix UI)
5.  **Ícones:** `lucide-react`
6.  **Gerenciamento de Estado:** Hooks nativos do React (`useState`, `useEffect`, `useCallback`).
7.  **Backend/Serverless:** Supabase Edge Functions (Hono) para lógica de checkout e webhooks.
8.  **Integração de Pagamento:** Mercado Pago (processado via Supabase Functions).
9.  **Roteamento:** O projeto utiliza a estrutura de telas do Figma Make, onde as páginas de pagamento (`PagamentoConfirmado.tsx`, etc.) são entrypoints separados.
10. **Utilidades de Classes:** `clsx` e `tailwind-merge` para manipulação de classes CSS.

## 📚 Regras de Uso de Bibliotecas

| Categoria | Biblioteca(s) | Regra de Uso |
| :--- | :--- | :--- |
| **UI/Componentes** | shadcn/ui, Radix UI | **Obrigatório.** Utilize os componentes existentes do shadcn/ui. Evite criar componentes de UI do zero se houver um equivalente no shadcn/ui. |
| **Estilização** | Tailwind CSS | **Obrigatório.** Use classes utilitárias do Tailwind para todo o design e layout. O design deve ser sempre responsivo. |
| **Ícones** | `lucide-react` | **Obrigatório.** Use exclusivamente ícones do pacote `lucide-react`. |
| **Formulários** | `react-hook-form` | Use para gerenciamento de estado e validação de formulários complexos. |
| **Notificações** | `sonner` | Use para exibir toasts e notificações não intrusivas ao usuário. |
| **Backend/API** | Supabase Edge Functions (Hono) | O cliente deve interagir com as funções Supabase para qualquer lógica de servidor (ex: checkout). |
| **Modais/Drawers** | `vaul` (para drawers), Radix UI Dialog | Use `Dialog` (shadcn/ui/dialog) para modais centrais e `vaul` (shadcn/ui/drawer) para drawers móveis. |
| **Roteamento** | N/A (Figma Make Screens) | Mantenha a estrutura atual onde as páginas de status de pagamento são arquivos de tela separados. Para navegação interna na landing page, use links âncora (`#`). |

## 📐 Diretrizes de Código

*   **Componentes:** Crie um arquivo separado para cada novo componente ou hook. Mantenha os componentes pequenos e focados.
*   **Tipagem:** Use TypeScript rigorosamente.
*   **Simplicidade:** Priorize soluções simples e elegantes. Evite over-engineering.
*   **Internacionalização:** O idioma principal é o Português (Brasil).