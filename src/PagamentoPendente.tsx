import { PaymentPending } from "./components/PaymentPending";
import { PaymentLayout } from "./components/PaymentLayout";

export default function PagamentoPendente() {
  return (
    <PaymentLayout>
      <PaymentPending />
    </PaymentLayout>
  );
}