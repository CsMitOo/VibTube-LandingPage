import { PaymentSuccessSection } from "./components/PaymentSuccessSection";
import { PaymentLayout } from "./components/PaymentLayout";
import { useEffect } from "react";

export default function PagamentoConfirmado() {
  useEffect(() => {
    document.title = "Pagamento Confirmado - VIBTUBE ACADEMY";
  }, []);

  return (
    <PaymentLayout>
      <PaymentSuccessSection />
    </PaymentLayout>
  );
}