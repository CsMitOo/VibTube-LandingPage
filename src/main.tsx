import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import PagamentoConfirmado from "./PagamentoConfirmado.tsx";
import PagamentoPendente from "./PagamentoPendente.tsx";
import PagamentoFalhou from "./PagamentoFalhou.tsx";

function Router() {
  const path = window.location.pathname;

  if (path.includes("/pagamento-confirmado")) {
    return <PagamentoConfirmado />;
  }
  if (path.includes("/pagamento-pendente")) {
    return <PagamentoPendente />;
  }
  if (path.includes("/pagamento-falhou")) {
    return <PagamentoFalhou />;
  }
  
  // Rota padrão: Landing Page
  return <App />;
}

createRoot(document.getElementById("root")!).render(<Router />);