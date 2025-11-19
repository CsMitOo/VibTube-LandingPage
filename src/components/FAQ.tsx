import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

const faqs = [
  {
    question: "O acesso é anual?",
    answer: "Sim! Com o pagamento único de R$ 129,90, você tem acesso completo a toda a plataforma por 12 meses consecutivos. Após esse período, você pode renovar sua assinatura para continuar aproveitando todos os benefícios."
  },
  {
    question: "O que está incluso na assinatura?",
    answer: "Você terá acesso a todas as ferramentas premium, cursos completos, biblioteca de scripts e prompts, templates exclusivos, grupo VIP no WhatsApp, 1 hora de mentoria mensal comigo, análise de canais com feedback personalizado e todas as atualizações que lançarmos durante seu período de assinatura."
  },
  {
    question: "Como funciona a mentoria mensal?",
    answer: "Todo mês, você tem direito a 1 hora de conversa direta comigo por videochamada. Nesse tempo, podemos discutir estratégias para o seu canal, tirar dúvidas, revisar conteúdos e traçar planos de crescimento personalizados para você."
  },
  {
    question: "Preciso saber editar vídeos?",
    answer: "Não é necessário! Nossos cursos começam do absoluto zero e te ensinam tudo, incluindo edição básica. Além disso, oferecemos templates e ferramentas que facilitam muito o processo criativo, mesmo para iniciantes."
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sua assinatura é anual e não há renovação automática. Você paga uma única vez e tem 12 meses garantidos. Oferecemos garantia de 7 dias: se não gostar, devolvemos seu dinheiro sem perguntas."
  },
  {
    question: "As ferramentas funcionam em português?",
    answer: "Sim! Todas as ferramentas, cursos e materiais da VIBTUBE ACADEMY são 100% em português, desenvolvidas especialmente para criadores brasileiros."
  }
];

export function FAQ() {
  return (
    <section className="py-12 md:py-20 px-4 lg:px-8 bg-[#111111]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Perguntas{" "}
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-base md:text-xl text-neutral-400">
            Tire suas dúvidas antes de começar
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-[#1a1a1a] border border-white/5 rounded-2xl px-4 md:px-6 hover:border-purple-500/30 transition-colors"
            >
              <AccordionTrigger className="text-left hover:text-purple-400 text-sm md:text-base py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-400 leading-relaxed text-sm md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 md:mt-12 text-center px-4">
          <p className="text-sm md:text-base text-neutral-400 mb-4">Ainda tem dúvidas?</p>
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 md:px-8 py-5 md:py-6 text-base md:text-lg w-full sm:w-auto"
            onClick={() => window.open('https://wa.me/5516981425310', '_blank')}
          >
            Falar com o suporte
          </Button>
        </div>
      </div>
    </section>
  );
}