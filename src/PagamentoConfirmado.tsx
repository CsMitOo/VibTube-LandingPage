import { PaymentSuccessSection } from "./components/PaymentSuccessSection";
import { useEffect } from "react";

export default function PagamentoConfirmado() {
  useEffect(() => {
    document.title = "Pagamento Confirmado - VIBTUBE ACADEMY";
  }, []);

  // Renderiza apenas a seção de sucesso em tela cheia, sem Header/Footer
  return <PaymentSuccessSection />;
}