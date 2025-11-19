import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FreeContent } from "./components/FreeContent";
import { About } from "./components/About";
import { Benefits } from "./components/Benefits";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { CheckoutModal } from "./components/CheckoutModal";
import { useEffect, useState } from "react";

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    console.log("Abrindo modal de checkout...");
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    console.log("Fechando modal de checkout...");
    setIsCheckoutOpen(false);
  };

  useEffect(() => {
    // Set page title
    document.title = "VIBTUBE ACADEMY - Portal Completo para Criadores de Conteúdo no YouTube";
    
    // Create favicon
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#a855f7;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#f97316;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="20" fill="url(#grad)"/>
        <path d="M35 30 L35 70 L70 50 Z" fill="white"/>
      </svg>
    `;
    
    const favicon = document.querySelector("link[rel*='icon']") || document.createElement('link');
    favicon.setAttribute('rel', 'icon');
    favicon.setAttribute('type', 'image/svg+xml');
    favicon.setAttribute('href', `data:image/svg+xml,${encodeURIComponent(svg)}`);
    document.head.appendChild(favicon);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Header onOpenCheckout={handleOpenCheckout} />
        <main>
          <Hero onOpenCheckout={handleOpenCheckout} />
          <FreeContent />
          <About />
          <Benefits />
          <Pricing onOpenCheckout={handleOpenCheckout} />
          <FAQ />
        </main>
        <Footer />
      </div>
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />
    </>
  );
}