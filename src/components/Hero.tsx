import { Button } from "./ui/button";
import { Play, Sparkles, TrendingUp } from "lucide-react";

interface HeroProps {
  onOpenCheckout: () => void;
}

export function Hero({ onOpenCheckout }: HeroProps) {
  const heroImageUrl = "https://images.unsplash.com/photo-1653753336046-72a1d70bb9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0dWJlJTIwY29udGVudCUyMGNyZWF0b3IlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzNTI0OTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  
  return (
    <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 lg:px-8 overflow-hidden">
      {/* Background Image as Watermark - Mobile */}
      <div 
        className="absolute inset-0 z-0 opacity-20 md:hidden"
        style={{
          backgroundImage: `url(${heroImageUrl})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Background Image as Watermark - Desktop */}
      <div 
        className="absolute inset-0 z-0 opacity-20 hidden md:block"
        style={{
          backgroundImage: `url(${heroImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl" />
      <div className="absolute top-60 right-1/4 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
              <span className="text-purple-300">Conteúdo profissional para criadores</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold">
              Aprenda YouTube do Zero e Tenha Acesso às{" "}
              <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                Ferramentas que Impulsionam Criadores
              </span>
            </h1>

            <p className="text-base md:text-xl text-neutral-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Conteúdos gratuitos, ferramentas profissionais e tudo o que você precisa para começar no YouTube com qualidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={onOpenCheckout}
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 md:px-12 py-6 md:py-7 shadow-lg shadow-green-500/50 text-base md:text-lg w-full sm:w-auto"
              >
                Entrar para a VIBTUBE ACADEMY
              </Button>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            
          </div>
        </div>
      </div>
    </section>
  );
}