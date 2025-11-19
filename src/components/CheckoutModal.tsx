import { X, RefreshCw } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { projectId, publicAnonKey } from "../utils/supabase/info";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // Alterado para TRUE para usar o fluxo de demonstração por padrão, contornando o erro de URL do Mercado Pago no ambiente de preview.
  const [demoMode, setDemoMode] = useState(true); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  console.log("CheckoutModal render - isOpen:", isOpen);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Modo demonstração (apenas se ativado manualmente)
      if (demoMode) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Simular diferentes resultados baseado no email
        if (formData.email.includes("pendente")) {
          window.location.href = "/pagamento-pendente";
        } else if (formData.email.includes("falha")) {
          window.location.href = "/pagamento-falhou";
        } else {
          window.location.href = "/pagamento-confirmado";
        }
        return;
      }

      // --- Fluxo Real do Mercado Pago ---
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-efd1629b/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            planType: "annual",
            amount: 129.90,
            // ENVIANDO O ORIGIN DO FRONTEND
            origin: window.location.origin, 
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        // Se for erro 404, significa que o servidor não está disponível
        if (response.status === 404) {
          throw new Error("Servidor não disponível (404). Verifique o deploy da Edge Function.");
        }
        
        // Se o erro vier do backend (Edge Function)
        if (data.error) {
            // Erro específico do Mercado Pago sobre back_urls
            if (data.error.includes("back_url.success must be defined")) {
                throw new Error("Erro de configuração de URL: O Mercado Pago rejeitou a URL de retorno. Verifique se o token está correto e se a URL de preview é pública.");
            }
            // Erro de token
            if (data.error.includes("MERCADO_PAGO_ACCESS_TOKEN not configured")) {
                throw new Error("Erro de configuração: MERCADO_PAGO_ACCESS_TOKEN não está configurado no Supabase Secrets.");
            }
            throw new Error(data.error);
        }
        
        throw new Error(`Erro desconhecido: Status ${response.status}`);
      }

      // Redirecionar para URL de pagamento do Mercado Pago
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        setError("Erro ao gerar link de pagamento");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      const errorMessage = err instanceof Error ? err.message : "Erro ao processar checkout";
      
      // Se for erro de conexão, sugerir modo demo
      if (errorMessage.includes("Failed to fetch") || errorMessage.includes("NetworkError")) {
        setError("⚠️ Falha na conexão com o servidor. Ative o Modo Demo para testar ou verifique o deploy da Edge Function.");
      } else {
        setError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-[#1a1a1a] border border-purple-500/20 rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-purple-500/20">
          <div>
            <h2 className="text-2xl bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              Assinar Premium
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Preencha seus dados para continuar
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Demo Mode Info */}
          {demoMode ? (
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
              <p className="text-xs text-purple-400 text-center">
                🎭 Modo Demonstração Ativo
                <br />
                <span className="text-gray-500">
                  Use email com "pendente" ou "falha" para simular diferentes resultados
                </span>
              </p>
            </div>
          ) : (
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
              <p className="text-xs text-orange-400 text-center">
                💳 Modo Teste/Real Ativo
                <br />
                <span className="text-gray-500">
                  Você será redirecionado para o Mercado Pago. Use os cartões de teste.
                </span>
              </p>
            </div>
          )}

          {/* Nome */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300">
              Nome Completo
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome completo"
              className="bg-[#2a2a2a] border-purple-500/20 text-white placeholder:text-gray-500"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              className="bg-[#2a2a2a] border-purple-500/20 text-white placeholder:text-gray-500"
            />
          </div>

          {/* Telefone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-300">
              Telefone (WhatsApp)
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              className="bg-[#2a2a2a] border-purple-500/20 text-white placeholder:text-gray-500"
            />
          </div>

          {/* Resumo do Plano */}
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Plano Anual</span>
              <span className="text-white">R$ 129,90</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Por mês</span>
              <span className="text-green-400">R$ 10,83</span>
            </div>
            <div className="pt-2 border-t border-purple-500/20">
              <div className="flex items-center justify-between">
                <span className="text-white">Total</span>
                <span className="text-2xl bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                  R$ 129,90
                </span>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white h-12 text-lg"
          >
            {loading ? "Processando..." : "Continuar para Pagamento"}
          </Button>

          {/* Demo Mode Toggle */}
          <Button
            type="button"
            variant="ghost"
            onClick={() => setDemoMode(!demoMode)}
            className="w-full text-xs text-gray-500 hover:text-purple-400 transition-colors h-auto py-1"
          >
            <RefreshCw className="w-3 h-3 mr-2" />
            {demoMode ? "✓ Modo Demo Ativo (Clique para desativar)" : "Ativar Modo Demo (Para testes rápidos)"}
          </Button>

          {/* Info */}
          <p className="text-xs text-gray-500 text-center">
            Pagamento seguro via Mercado Pago
            <br />
            Aceita PIX, Cartão de Crédito e Boleto
          </p>
        </form>
      </div>
    </div>
  );
}