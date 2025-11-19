import { XCircle, ArrowRight, HelpCircle, MessageCircle, RefreshCw } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect } from "react";

export function PaymentFailure() {
  useEffect(() => {
    // Log failure for debugging
    console.log("❌ Página de Pagamento Falhou renderizada");
    
    // Update page title
    document.title = "Pagamento Falhou - VIBTUBE ACADEMY";
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] border-2 border-red-500/50 rounded-3xl p-8 md:p-12 shadow-2xl shadow-red-500/20 text-center space-y-6">
          {/* Failure Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-red-500/20 border-2 border-red-500/50 flex items-center justify-center">
              <XCircle className="w-12 h-12 md:w-14 md:h-14 text-red-400" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                ❌ Pagamento Não Realizado
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400">
              Ops! Algo deu errado com seu pagamento
            </p>
          </div>

          {/* Message */}
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 space-y-3 text-left">
            <div className="flex items-start gap-3">
              <HelpCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
              <div className="space-y-1">
                <p className="text-neutral-300">
                  Não foi possível processar seu pagamento
                </p>
                <p className="text-sm text-neutral-400">
                  Isso pode acontecer por diversos motivos. Não se preocupe, <strong>nenhum valor foi cobrado</strong>.
                </p>
                <p className="text-xs text-red-400 mt-2">
                  ❌ Tentativa #MP-{new Date().getTime().toString().slice(-8)}
                </p>
              </div>
            </div>
          </div>

          {/* Possible Causes */}
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6 text-left space-y-3">
            <h3 className="text-lg font-semibold text-purple-400">
              🔍 Possíveis Causas:
            </h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">•</span>
                <span>Dados do cartão incorretos ou inválidos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">•</span>
                <span>Limite insuficiente no cartão de crédito</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">•</span>
                <span>Pagamento cancelado durante o processo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">•</span>
                <span>Problemas temporários na conexão</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              onClick={() => window.location.hash = '#preco'}
              size="lg" 
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full py-6 shadow-2xl shadow-green-500/50 text-lg group"
            >
              <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
              Tentar Novamente
            </Button>

            <Button 
              onClick={() => window.location.hash = ''}
              size="lg" 
              variant="outline"
              className="w-full border-purple-500/30 hover:border-purple-500/50 text-white rounded-full py-6 bg-transparent"
            >
              Voltar para Home
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Support */}
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4">
            <div className="flex items-center justify-center gap-2 text-sm text-neutral-400">
              <MessageCircle className="w-4 h-4 text-orange-400" />
              <p>
                Continua com problemas? Entre em contato pelo WhatsApp ou email
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}