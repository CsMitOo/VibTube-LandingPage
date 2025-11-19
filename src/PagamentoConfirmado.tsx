import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PaymentSuccessSection } from "./components/PaymentSuccessSection";
import { useEffect } from "react";

export default function PagamentoConfirmado() {
  // Mock function for Header, as we don't need to open the checkout modal here
  const handleNoop = () => {};

  useEffect(() => {
    document.title = "Pagamento Confirmado - VIBTUBE ACADEMY";
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Pass a no-op function since we don't want to open checkout from the success page header */}
      <Header onOpenCheckout={handleNoop} />
      <main>
        <PaymentSuccessSection />
      </main>
      <Footer />
    </div>
  );
}