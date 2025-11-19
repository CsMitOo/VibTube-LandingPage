import { Check, Calendar, RefreshCw, GraduationCap, Sparkles, FileText, Download, MessageSquare, Clock, Headphones, Search } from "lucide-react";

const benefits = [
  {
    icon: Calendar,
    title: "Acesso completo por 1 ano",
    description: "12 meses de acesso ilimitado"
  },
  {
    icon: RefreshCw,
    title: "Ferramentas atualizadas",
    description: "Sempre com as últimas novidades"
  },
  {
    icon: GraduationCap,
    title: "Cursos ilimitados",
    description: "Aprenda no seu ritmo"
  },
  {
    icon: Sparkles,
    title: "Prompts profissionais",
    description: "Biblioteca completa de prompts"
  },
  {
    icon: FileText,
    title: "Scripts prontos",
    description: "Roteiros testados e validados"
  },
  {
    icon: Download,
    title: "Downloads",
    description: "Templates e recursos extras"
  },
  {
    icon: MessageSquare,
    title: "Grupo VIP no WhatsApp",
    description: "Comunidade exclusiva de alunos"
  },
  {
    icon: Clock,
    title: "1 hora por mês de conversa comigo",
    description: "Mentoria personalizada individual"
  },
  {
    icon: Search,
    title: "Análise de Canais",
    description: "Feedback do Canal"
  }
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-12 md:py-20 px-4 lg:px-8 bg-[#111111]">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Tudo que você ganha{" "}
            <span className="bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
              ao entrar
            </span>
          </h2>
          <p className="text-base md:text-xl text-neutral-400">
            Uma assinatura, infinitas possibilidades
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              
              return (
                <div
                  key={index}
                  className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-5 md:p-6 hover:border-green-500/30 transition-all hover:shadow-lg hover:shadow-green-500/10 group"
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/50">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg mb-2">{benefit.title}</h3>
                      <p className="text-sm text-neutral-400">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary Box */}
          <div className="mt-8 md:mt-12 bg-gradient-to-br from-green-500/10 to-purple-500/10 border border-green-500/30 rounded-2xl p-6 md:p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
              <Check className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
              <span className="text-xl md:text-2xl text-green-400">Tudo isso incluso</span>
            </div>
            <p className="text-sm md:text-base text-neutral-300">
              Ao se tornar membro da VIBTUBE ACADEMY, você tem acesso imediato a todos esses benefícios 
              e muito mais. Sua jornada de sucesso no YouTube começa aqui.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}