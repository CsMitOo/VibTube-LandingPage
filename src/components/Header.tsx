import { Play, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface HeaderProps {
  onOpenCheckout: () => void;
}

export function Header({ onOpenCheckout }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Play className="w-5 h-5 lg:w-6 lg:h-6 text-white fill-white" />
            </div>
            <span className="text-sm lg:text-base bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              VIBTUBE ACADEMY
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#gratis" className="text-sm text-neutral-300 hover:text-purple-400 transition-colors">
              Conteúdo Grátis
            </a>
            <a href="#sobre" className="text-sm text-neutral-300 hover:text-purple-400 transition-colors">
              Sobre
            </a>
            <a href="#beneficios" className="text-sm text-neutral-300 hover:text-purple-400 transition-colors">
              Benefícios
            </a>
            <a href="#preco" className="text-sm text-neutral-300 hover:text-purple-400 transition-colors">
              Preço
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              className="bg-orange-600 hover:bg-orange-700 hover:scale-105 hover:shadow-lg text-white rounded-full px-6 py-2 text-sm transition-all"
            >
              Área do Aluno
            </Button>
            <Button 
              onClick={onOpenCheckout}
              className="bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-500 hover:to-orange-500 text-white rounded-full text-sm"
            >
              Criar Conta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/5">
            <nav className="flex flex-col gap-4">
              <a 
                href="#gratis" 
                className="text-neutral-300 hover:text-purple-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Conteúdo Grátis
              </a>
              <a 
                href="#sobre" 
                className="text-neutral-300 hover:text-purple-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#beneficios" 
                className="text-neutral-300 hover:text-purple-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefícios
              </a>
              <a 
                href="#preco" 
                className="text-neutral-300 hover:text-purple-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Preço
              </a>
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/5">
                <Button 
                  className="bg-orange-600 hover:bg-orange-700 text-white rounded-full w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Área do Aluno
                </Button>
                <Button 
                  onClick={() => {
                    onOpenCheckout();
                    setMobileMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-500 hover:to-orange-500 text-white rounded-full w-full"
                >
                  Criar Conta
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}