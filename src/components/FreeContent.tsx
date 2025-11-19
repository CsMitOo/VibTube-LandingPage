import { Play } from "lucide-react";

export function FreeContent() {
  return (
    <section id="gratis" className="py-12 md:py-20 px-4 lg:px-8 bg-[#111111]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl px-4">
            Veja uma amostra de nosso conteúdo para você{" "}
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              começar agora
            </span>
          </h2>
          <p className="text-base md:text-xl text-neutral-400 px-4">
            Um Pouquinho do que nossa plataforma pode lhe oferecer...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Vídeo 1: Ferramenta Bora Postar */}
          <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-4 md:p-6 hover:border-purple-500/30 transition-all hover:shadow-lg hover:shadow-purple-500/10">
            <div className="aspect-video bg-neutral-900 rounded-xl mb-4 flex items-center justify-center border border-white/5 overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/PnqQDQDMt8k?start=13"
                title="Ferramenta Bora Postar"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                <Play className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl mb-2">Conheça a Ferramenta "Bora Postar?"</h3>
                <p className="text-sm md:text-base text-neutral-400">
                  Veja como funciona nossa ferramenta exclusiva que te ajuda a organizar e planejar suas postagens
                </p>
              </div>
            </div>
          </div>

          {/* Vídeo 2: Prévia Conteúdos Pagos */}
          <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-4 md:p-6 hover:border-orange-500/30 transition-all hover:shadow-lg hover:shadow-orange-500/10">
            <div className="aspect-video bg-neutral-900 rounded-xl mb-4 flex items-center justify-center border border-white/5 overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/PnqQDQDMt8k?start=13"
                title="Prévia Conteúdos Pagos"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                <Play className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl mb-2">Prévia dos Conteúdos Premium</h3>
                <p className="text-sm md:text-base text-neutral-400">
                  Descubra tudo que você vai aprender com nossos cursos, ferramentas e materiais exclusivos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}