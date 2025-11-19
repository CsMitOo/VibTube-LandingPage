import { Play, Instagram, Youtube, Twitter, Facebook } from "lucide-react";
import { TermsOfService } from "./TermsOfService";
import { PrivacyPolicy } from "./PrivacyPolicy";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-8 md:py-12 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 md:w-6 md:h-6 text-white fill-white" />
              </div>
              <span className="text-sm md:text-base bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                VIBTUBE ACADEMY
              </span>
            </div>
            <p className="text-xs md:text-sm text-neutral-400">
              O portal completo para criadores de conteúdo que querem crescer no YouTube.
            </p>
          </div>

          {/* Links */}
          <div className="text-center sm:text-left">
            <h4 className="mb-3 md:mb-4 text-sm md:text-base text-neutral-300">Plataforma</h4>
            <ul className="space-y-2 text-xs md:text-sm text-neutral-400">
              <li>
                <a href="#sobre" className="hover:text-purple-400 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-purple-400 transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#preco" className="hover:text-purple-400 transition-colors">
                  Preço
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center sm:text-left">
            <h4 className="mb-3 md:mb-4 text-sm md:text-base text-neutral-300">Legal</h4>
            <ul className="space-y-2 text-xs md:text-sm text-neutral-400">
              <li>
                <TermsOfService>
                  <button className="hover:text-purple-400 transition-colors text-left">
                    Termos de Uso
                  </button>
                </TermsOfService>
              </li>
              <li>
                <PrivacyPolicy>
                  <button className="hover:text-purple-400 transition-colors text-left">
                    Política de Privacidade
                  </button>
                </PrivacyPolicy>
              </li>
              <li>
                <a 
                  href="https://wa.me/5516981425310?text=Olá,%20preciso%20de%20suporte%20da%20VIBTUBE%20ACADEMY" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                >
                  Suporte
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-center sm:text-left">
            <h4 className="mb-3 md:mb-4 text-sm md:text-base text-neutral-300">Redes Sociais</h4>
            <div className="flex gap-3 justify-center sm:justify-start">
              <a 
                href="#" 
                className="w-9 h-9 md:w-10 md:h-10 bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 rounded-lg flex items-center justify-center transition-all group"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5 text-neutral-400 group-hover:text-purple-400" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 md:w-10 md:h-10 bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 rounded-lg flex items-center justify-center transition-all group"
              >
                <Youtube className="w-4 h-4 md:w-5 md:h-5 text-neutral-400 group-hover:text-purple-400" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 md:w-10 md:h-10 bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 rounded-lg flex items-center justify-center transition-all group"
              >
                <Twitter className="w-4 h-4 md:w-5 md:h-5 text-neutral-400 group-hover:text-purple-400" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 md:w-10 md:h-10 bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 rounded-lg flex items-center justify-center transition-all group"
              >
                <Facebook className="w-4 h-4 md:w-5 md:h-5 text-neutral-400 group-hover:text-purple-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 md:pt-8 border-t border-white/5 text-center text-xs md:text-sm text-neutral-500">
          <p>© 2025 VIBTUBE ACADEMY. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}