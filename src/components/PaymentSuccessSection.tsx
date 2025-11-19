import { CheckCircle, ArrowRight, Mail, ExternalLink, MessageCircle, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect } from "react";

export function PaymentSuccessSection() {
  useEffect(() => {
    // Log success for debugging
    console.log("✅ Seção de Pagamento Confirmado renderizada");
    document.title = "Pagamento Confirmado - VIBTUBE ACADEMY";
  }, []);

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4">
      <div className="container mx-auto max-w-xl">
        {/* Card Principal com Estilo Profissional */}
        <div className="bg-[#1a1a1a] border border-green-500/30 rounded-3xl p-6 md:p-10 shadow-2xl shadow-green-500/20 text-center space-y-8 relative overflow-hidden">
          
          {/* Top Glow Effect (Substituindo o ícone flutuante) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-green-500/10 rounded-full blur-3xl z-0" />

          <div className="relative z-10 space-y-6">
            {/* Header e Ícone */}
            <div className="space-y-2">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
                  🎉 Pagamento Confirmado!
                </span>
              </h1>
              <p className="text-base md:text-lg text-neutral-400">
                Sua jornada de sucesso no YouTube começa agora.
              </p>
            </div>

            {/* 1. Mensagem de Acesso (Verde) */}
            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-5 text-left space-y-3">
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

            {/* 2. Próximos Passos (Roxo) */}
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-5 text-left space-y-4">
              <h3 className="text-lg font-semibold text-purple-400 flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5" />
                O que fazer agora?
              </h3>
              <ol className="space-y-3 text-base text-neutral-300 list-decimal list-inside pl-4">
                <li>
                  Clique no botão abaixo para ir direto para a Área do Aluno.
                </li>
                <li>
                  Use o link no email para entrar no Grupo VIP de Alunos no WhatsApp.
                </li>
                <li>
                  Comece pelo módulo "Primeiros Passos" para configurar seu sucesso.
                </li>
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <Button 
                onClick={() => window.location.href = 'https://vibtube.academy/area-do-aluno'}
                size="lg" 
                className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full py-6 shadow-lg shadow-green-500/50 text-lg font-semibold group transition-all"
              >
                Acessar Área do Aluno
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button 
                onClick={() => window.location.pathname = '/'}
                size="lg" 
                variant="link"
                className="w-full text-neutral-400 hover:text-purple-400 rounded-full py-2 bg-transparent"
              >
                Voltar para a Landing Page
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Support */}
            <div className="bg-orange-600/10 border border-orange-600/20 rounded-2xl p-4">
              <div className="flex items-center justify-center gap-2 text-sm text-neutral-400">
                <MessageCircle className="w-4 h-4 text-orange-400" />
                <p>
                  Dúvidas? Fale com o suporte: <a href="https://wa.me/5516981425310" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-orange-400 transition-colors">WhatsApp</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}