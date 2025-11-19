import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

interface TermsOfServiceProps {
  children: React.ReactNode;
}

export function TermsOfService({ children }: TermsOfServiceProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] bg-[#1a1a1a] border-purple-500/30">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
            Termos de Uso - VIBTUBE ACADEMY
          </DialogTitle>
          <DialogDescription className="text-neutral-400">
            Leia atentamente os termos e condições de uso da plataforma.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-neutral-300">
            <section>
              <p className="text-sm text-neutral-400 mb-4">
                <strong>Última atualização:</strong> 19 de novembro de 2025
              </p>
              <p className="text-sm text-neutral-400">
                Bem-vindo ao VIBTUBE ACADEMY. Ao acessar e utilizar nossa plataforma, você concorda com os seguintes termos e condições. Leia atentamente antes de prosseguir.
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">1. Definições</h3>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>1.1.</strong> "Plataforma" refere-se ao VIBTUBE ACADEMY, incluindo todos os seus conteúdos, ferramentas, cursos e recursos disponibilizados.
              </p>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>1.2.</strong> "Usuário" refere-se a qualquer pessoa que acesse ou utilize a plataforma, seja com acesso gratuito ou assinatura premium.
              </p>
              <p className="text-sm text-neutral-400">
                <strong>1.3.</strong> "Conteúdo" refere-se a todos os materiais educacionais, cursos, vídeos, scripts, prompts, ferramentas e demais recursos disponibilizados na plataforma.
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">2. Aceitação dos Termos</h3>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>2.1.</strong> Ao criar uma conta ou acessar qualquer parte da plataforma, você declara ter lido, compreendido e concordado com estes Termos de Uso.
              </p>
              <p className="text-sm text-neutral-400">
                <strong>2.2.</strong> Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação na plataforma.
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">3. Cadastro e Conta</h3>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>3.1.</strong> Para acessar determinados recursos, você deve criar uma conta fornecendo informações precisas e completas.
              </p>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>3.2.</strong> Você é responsável por manter a confidencialidade de suas credenciais de acesso.
              </p>
              <p className="text-sm text-neutral-400">
                <strong>3.3.</strong> É proibido criar múltiplas contas ou compartilhar seu acesso com terceiros.
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">4. Assinatura e Pagamento</h3>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>4.1.</strong> A assinatura anual custa R$ 129,90 e concede acesso completo aos recursos premium por 12 meses a partir da data de pagamento.
              </p>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>4.2.</strong> O pagamento é processado de forma segura através de plataformas terceirizadas confiáveis.
              </p>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>4.3.</strong> Após a confirmação do pagamento, o acesso é liberado imediatamente.
              </p>
              <p className="text-sm text-neutral-400">
                <strong>4.4.</strong> Não há renovação automática. Ao final dos 12 meses, será necessário realizar nova assinatura para continuar com acesso premium.
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">5. Política de Reembolso</h3>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>5.1.</strong> Oferecemos garantia de 7 dias. Caso não esteja satisfeito, você pode solicitar reembolso integral dentro deste prazo.
              </p>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>5.2.</strong> Após o período de 7 dias, não serão aceitos pedidos de reembolso, exceto em casos previstos em lei.
              </p>
              <p className="text-sm text-neutral-400">
                <strong>5.3.</strong> Para solicitar reembolso, entre em contato através dos canais de suporte oficiais.
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">6. Propriedade Intelectual</h3>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>6.1.</strong> Todo o conteúdo disponibilizado na plataforma é protegido por direitos autorais e propriedade intelectual.
              </p>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>6.2.</strong> É proibido copiar, distribuir, reproduzir, vender ou modificar qualquer conteúdo sem autorização expressa.
              </p>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>6.3.</strong> O acesso concedido é pessoal e intransferível, destinado exclusivamente ao uso educacional do assinante.
              </p>
              <p className="text-sm text-neutral-400">
                <strong>6.4.</strong> Violações dos direitos de propriedade intelectual podem resultar em ações legais e cancelamento imediato da conta.
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">7. Uso Aceitável</h3>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>7.1.</strong> Você concorda em utilizar a plataforma apenas para fins legais e educacionais.
              </p>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>7.2.</strong> É proibido:
              </p>
              <ul className="list-disc list-inside text-sm text-neutral-400 ml-4 space-y-1">
                <li>Fazer engenharia reversa ou tentar acessar códigos-fonte da plataforma</li>
                <li>Utilizar bots, scrapers ou ferramentas automatizadas</li>
                <li>Compartilhar credenciais de acesso com terceiros</li>
                <li>Distribuir ou revender conteúdo da plataforma</li>
                <li>Realizar atividades que prejudiquem o funcionamento da plataforma</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">8. Limitação de Responsabilidade</h3>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>8.1.</strong> O VIBTUBE ACADEMY não garante resultados específicos através do uso dos conteúdos disponibilizados.
              </p>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>8.2.</strong> Não nos responsabilizamos por decisões tomadas com base nas informações fornecidas na plataforma.
              </p>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>8.3.</strong> A plataforma é fornecida "como está", sem garantias de qualquer tipo, expressas ou implícitas.
              </p>
              <p className="text-sm text-neutral-400">
                <strong>8.4.</strong> Não nos responsabilizamos por interrupções temporárias, manutenções ou problemas técnicos que possam afetar o acesso.
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">9. Cancelamento e Suspensão</h3>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>9.1.</strong> Reservamo-nos o direito de suspender ou cancelar contas que violem estes termos.
              </p>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>9.2.</strong> Em caso de violação grave, o cancelamento pode ocorrer sem aviso prévio e sem direito a reembolso.
              </p>
              <p className="text-sm text-neutral-400">
                <strong>9.3.</strong> Você pode cancelar sua conta a qualquer momento, mas não haverá reembolso proporcional pelo período não utilizado.
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">10. Privacidade</h3>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>10.1.</strong> O tratamento de dados pessoais segue nossa Política de Privacidade.
              </p>
              <p className="text-sm text-neutral-400">
                <strong>10.2.</strong> Ao utilizar a plataforma, você consente com a coleta e uso de dados conforme descrito em nossa política.
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">11. Modificações na Plataforma</h3>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>11.1.</strong> Podemos modificar, adicionar ou remover recursos da plataforma a qualquer momento.
              </p>
              <p className="text-sm text-neutral-400">
                <strong>11.2.</strong> Faremos esforços razoáveis para notificar sobre mudanças significativas, mas não somos obrigados a fazê-lo.
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">12. Lei Aplicável e Foro</h3>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>12.1.</strong> Estes termos são regidos pelas leis da República Federativa do Brasil.
              </p>
              <p className="text-sm text-neutral-400">
                <strong>12.2.</strong> Fica eleito o foro da comarca de sua residência para dirimir quaisquer controvérsias oriundas deste documento.
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">13. Contato</h3>
              <p className="text-sm text-neutral-400">
                Para dúvidas, sugestões ou suporte relacionado a estes Termos de Uso, entre em contato através dos canais oficiais disponibilizados na plataforma.
              </p>
            </section>

            <section className="pt-4 border-t border-white/10">
              <p className="text-sm text-neutral-500 italic">
                Ao continuar utilizando o VIBTUBE ACADEMY, você confirma que leu e concordou com todos os termos acima descritos.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}