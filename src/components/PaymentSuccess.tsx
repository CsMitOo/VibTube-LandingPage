import { CheckCircle, ArrowRight, Mail, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect } from "react";

export function PaymentSuccess() {
  useEffect(() => {
    // Log success for debugging
    console.log("✅ Página de Pagamento Confirmado renderizada");
    
    // Update page title
    document.title = "Pagamento Confirmado - VIBTUBE ACADEMY";
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] border-2 border-green-500/50 rounded-3xl p-8 md:p-12 shadow-2xl shadow-green-500/20 text-center space-y-6">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-green-500/20 border-2 border-green-500/50 flex items-center justify-center animate-pulse">
              <CheckCircle className="w-12 h-12 md:w-14 md:h-14 text-green-400" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
                🎉 Pagamento Confirmado!
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400">
              Bem-vindo à VIBTUBE ACADEMY Premium
            </p>
          </div>

          {/* Message */}
          <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 space-y-3 text-left">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div className="space-y-1">
                <p className="text-neutral-300">
                  Seu pagamento foi processado com sucesso!
                </p>
                <p className="text-sm text-neutral-400">
                  Enviamos um email com suas credenciais de acesso e instruções para começar.
                </p>
                <p className="text-xs text-green-400 mt-2">
                  ✅ Pedido #MP-{new Date().getTime().toString().slice(-8)}
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6 text-left space-y-3">
            <h3 className="text-lg font-semibold text-purple-400">
              📋 Próximos Passos:
            </h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1 font-bold">1.</span>
                <span>Verifique seu email (inclusive spam) com suas credenciais</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1 font-bold">2.</span>
                <span>Acesse a área do aluno com o link que enviamos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1 font-bold">3.</span>
                <span>Entre no grupo VIP do WhatsApp (link no email)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-1 font-bold">4.</span>
                <span>Comece a explorar todos os recursos premium agora!</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              onClick={() => window.location.href = 'https://vibtube.academy/area-do-aluno'}
              size="lg" 
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full py-6 shadow-2xl shadow-green-500/50 text-lg group"
            >
              Acessar Área do Aluno
              <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
                Precisa de ajuda? Entre em contato pelo WhatsApp ou email
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}