import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PaymentSuccessSection } from "./components/PaymentSuccessSection";
import { useEffect } from "react";

export default function PagamentoConfirmado() {
  // Função mock para o Header, pois não queremos abrir o modal de checkout aqui
  const handleNoop = () => {};

  useEffect(() => {
    document.title = "Pagamento Confirmado - VIBTUBE ACADEMY";
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header onOpenCheckout={handleNoop} />
      <main>
        <PaymentSuccessSection />
      </main>
      <Footer />
    </div>
  );
}