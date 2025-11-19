import { CheckCircle, ArrowRight, Mail, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect } from "react";

export function PaymentSuccessSection() {
  useEffect(() => {
    // Log success for debugging
    console.log("✅ Seção de Pagamento Confirmado renderizada");
    document.title = "Pagamento Confirmado - VIBTUBE ACADEMY";
  }, []);

  return (
    <section className="py-12 md:py-20 px-4 lg:px-8 flex items-center justify-center min-h-[80vh]">
      <div className="container mx-auto max-w-2xl">
        {/* Card Principal com Estilo Premium */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] border-2 border-green-500/50 rounded-3xl p-8 md:p-12 shadow-2xl shadow-green-500/20 text-center space-y-8">
          
          {/* Header e Ícone */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-green-500/20 border-2 border-green-500/50 flex items-center justify-center animate-pulse">
                <CheckCircle className="w-12 h-12 md:w-14 md:h-14 text-green-400" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
                🎉 Pagamento Confirmado!
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300">
              Sua jornada de sucesso no YouTube começa agora.
            </p>
          </div>

          {/* Mensagem de Acesso */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-5 md:p-6 space-y-3 text-left">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div className="space-y-1">
                <p className="text-lg font-semibold text-neutral-300">
                  Acesso Imediato Liberado
                </p>
                <p className="text-sm text-neutral-400">
                  Enviamos um email para você com o link de acesso à Área do Aluno e suas credenciais. Verifique sua caixa de entrada (e spam).
                </p>
                <p className="text-xs text-green-400 mt-2">
                  ID da Transação: MP-{new Date().getTime().toString().slice(-8)}
                </p>
              </div>
            </div>
          </div>

          {/* Próximos Passos */}
          <div className="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-5 md:p-6 text-left space-y-4">
            <h3 className="text-xl font-semibold text-purple-400">
              📋 O que fazer agora?
            </h3>
            <ul className="space-y-3 text-base text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1 font-bold flex-shrink-0">1.</span>
                <span>Clique no botão abaixo para ir direto para a Área do Aluno.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1 font-bold flex-shrink-0">2.</span>
                <span>Use o link no email para entrar no Grupo VIP de Alunos no WhatsApp.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1 font-bold flex-shrink-0">3.</span>
                <span>Comece pelo módulo "Primeiros Passos" para configurar seu sucesso.</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              onClick={() => window.location.href = 'https://vibtube.academy/area-do-aluno'}
              size="lg" 
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full py-6 shadow-2xl shadow-green-500/50 text-lg font-semibold group"
            >
              Acessar Área do Aluno
              <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button 
              onClick={() => window.location.pathname = '/'}
              size="lg" 
              variant="ghost"
              className="w-full text-neutral-400 hover:text-purple-400 rounded-full py-6 bg-transparent"
            >
              Voltar para a Landing Page
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Support */}
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4">
            <div className="flex items-center justify-center gap-2 text-sm text-neutral-400">
              <MessageCircle className="w-4 h-4 text-orange-400" />
              <p>
                Dúvidas? Fale com o suporte: <a href="https://wa.me/5516981425310" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-orange-400 transition-colors">WhatsApp</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}