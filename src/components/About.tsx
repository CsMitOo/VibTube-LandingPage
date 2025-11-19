import { Wand2, GraduationCap, FileCode, Sparkles, Layout, Download, Users, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "Ferramentas automáticas",
    description: "Gere conteúdo de forma inteligente",
    color: "purple"
  },
  {
    icon: GraduationCap,
    title: "Cursos completos",
    description: "Do básico ao avançado",
    color: "orange"
  },
  {
    icon: FileCode,
    title: "Scripts prontos",
    description: "Roteiros testados e aprovados",
    color: "purple"
  },
  {
    icon: Sparkles,
    title: "Prompts profissionais",
    description: "Para IA e criação de conteúdo",
    color: "orange"
  },
  {
    icon: Layout,
    title: "Templates",
    description: "Miniaturas, descrições e mais",
    color: "purple"
  },
  {
    icon: Download,
    title: "Downloads",
    description: "Recursos e materiais extras",
    color: "orange"
  },
  {
    icon: Users,
    title: "Comunidade VIP",
    description: "Networking com outros criadores",
    color: "purple"
  },
  {
    icon: MessageCircle,
    title: "Mentoria mensal",
    description: "Acompanhamento personalizado",
    color: "orange"
  }
];

export function About() {
  return (
    <section id="sobre" className="py-12 md:py-20 px-4 lg:px-8 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            O Portal Completo para{" "}
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              Criadores de Conteúdo
            </span>
          </h2>
          <p className="text-base md:text-xl text-neutral-400 max-w-3xl mx-auto">
            A VIBTUBE ACADEMY é a plataforma definitiva que reúne tudo o que você precisa para criar, 
            crescer e monetizar seu canal no YouTube. Ferramentas, cursos, mentoria e uma comunidade 
            vibrante de criadores em um só lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = feature.color === "purple" 
              ? "from-purple-500 to-purple-600"
              : "from-orange-500 to-orange-600";
            
            return (
              <div
                key={index}
                className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-5 md:p-6 hover:border-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/10 group"
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${colorClasses} flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-base md:text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}