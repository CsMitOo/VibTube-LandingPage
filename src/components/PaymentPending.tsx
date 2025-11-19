import { Clock, ArrowRight, AlertCircle, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect } from "react";

export function PaymentPending() {
  useEffect(() => {
    // Log pending for debugging
    console.log("⏳ Página de Pagamento Pendente renderizada");
    
    // Update page title
    document.title = "Pagamento Pendente - VIBTUBE ACADEMY";
  }, []);

  return (
    <div className="max-w-2xl w-full">
      <div className="bg-[#1a1a1a] border border-white/5 rounded-3xl p-8 md:p-12 shadow-lg shadow-orange-500/10 text-center space-y-6">
        {/* Pending Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-orange-500/20 border-2 border-orange-500/50 flex items-center justify-center animate-pulse">
            <Clock className="w-12 h-12 md:w-14 md:h-14 text-orange-400" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
              ⏳ Pagamento Pendente
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400">
            Aguardando confirmação do pagamento
          </p>
        </div>

        {/* Message */}
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6 space-y-3 text-left">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
            <div className="space-y-1">
              <p className="text-neutral-300">
                Seu pagamento está sendo processado
              </p>
              <p className="text-sm text-neutral-400">
                Isso pode levar alguns minutos. Você receberá um email assim que for confirmado.
              </p>
              <p className="text-xs text-orange-400 mt-2">
                ⏳ Pedido #MP-{new Date().getTime().toString().slice(-8)}
              </p>
            </div>
          </div>
        </div>

        {/* Payment Methods Info */}
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6 text-left space-y-3">
          <h3 className="text-lg font-semibold text-purple-400">
            ⏱️ Tempo de Confirmação:
          </h3>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 font-bold">•</span>
              <span><strong>PIX:</strong> Aprovação instantânea (até 2 minutos)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 font-bold">•</span>
              <span><strong>Cartão de Crédito:</strong> Até 5 minutos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 font-bold">•</span>
              <span><strong>Boleto:</strong> Até 2 dias úteis após o pagamento</span>
            </li>
          </ul>
        </div>

        {/* Action Button */}
        <Button 
          onClick={() => window.location.hash = ''}
          size="lg" 
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full py-6 shadow-2xl shadow-orange-500/50 text-lg"
        >
          Voltar para Home
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        {/* Support */}
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4">
          <div className="flex items-center justify-center gap-2 text-sm text-neutral-400">
            <MessageCircle className="w-4 h-4 text-orange-400" />
            <p>
              Precisa de ajuda? Entre em contato pelo WhatsApp ou email
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}