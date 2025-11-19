import { Button } from "./ui/button";
import { Check, Sparkles, Zap, Lock, Lightbulb } from "lucide-react";

const includedFeatures = [
  "Acesso completo por 12 meses",
  "Todas as ferramentas premium",
  "Biblioteca completa de cursos",
  "Scripts e prompts profissionais",
  "Grupo VIP no WhatsApp",
  "1 hora de mentoria mensal",
  "Atualizações constantes",
  "Feedback do Canal"
];

interface PricingProps {
  onOpenCheckout: () => void;
}

export function Pricing({ onOpenCheckout }: PricingProps) {
  return (
    <section id="preco" className="py-12 md:py-20 px-4 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-green-600/20 via-purple-600/20 to-orange-600/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4 px-4">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4 text-sm">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
            <span className="text-green-400">Oferta especial</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Assinatura Anual –{" "}
            <span className="bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
              R$ 129,90
            </span>
          </h2>
          <p className="text-base md:text-xl text-neutral-400 max-w-2xl mx-auto">
            Acesso total por 12 meses a todos os recursos premium. 
            Menos de R$ 11 por mês para transformar seu canal.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] border-2 border-green-500/50 rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl shadow-green-500/20 relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent" />
            
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              {/* Left Side - Price */}
              <div className="text-center lg:text-left space-y-6">
                <div>
                  <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-2 flex-wrap">
                    <span className="text-xl md:text-2xl text-neutral-400 line-through">R$ 297,00</span>
                    <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/50 rounded-full text-orange-400 text-xs md:text-sm">
                      -56%
                    </span>
                  </div>
                  <div className="flex items-baseline justify-center lg:justify-start gap-1 flex-wrap">
                    <span className="text-sm md:text-base text-neutral-400">apenas</span>
                    <span className="text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
                      R$ 129
                    </span>
                    <span className="text-2xl md:text-3xl text-neutral-400">,90</span>
                  </div>
                  <p className="text-sm md:text-base text-neutral-400 mt-2">
                    Pagamento único • Acesso por 12 meses
                  </p>
                </div>

                <Button 
                  onClick={onOpenCheckout}
                  size="lg" 
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full py-5 md:py-6 shadow-2xl shadow-green-500/50 group text-base md:text-lg"
                >
                  <Zap className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Entrar Agora
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-neutral-500">
                  <Lock className="w-4 h-4 text-green-400" />
                  Acesso imediato após o pagamento
                </div>

                <div className="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-3 md:p-4">
                  <div className="flex items-start gap-2 text-sm text-purple-300">
                    <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>Garantia:</strong> Se não gostar nos primeiros 7 dias, devolvemos seu dinheiro.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Features */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl mb-4 md:mb-6">O que está incluso:</h3>
                <div className="space-y-3">
                  {includedFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                      </div>
                      <span className="text-sm md:text-base text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8 md:mt-12 text-neutral-400 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
              Pagamento seguro
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
              Acesso imediato
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
              Garantia de 7 dias
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}