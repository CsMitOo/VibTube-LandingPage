import { PaymentFailure } from "./components/PaymentFailure";
import { PaymentLayout } from "./components/PaymentLayout";

export default function PagamentoFalhou() {
  return (
    <PaymentLayout>
      <PaymentFailure />
    </PaymentLayout>
  );
}