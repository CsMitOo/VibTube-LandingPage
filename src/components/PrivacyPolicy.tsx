import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

interface PrivacyPolicyProps {
  children: React.ReactNode;
}

export function PrivacyPolicy({ children }: PrivacyPolicyProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] bg-[#1a1a1a] border-purple-500/30">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
            Política de Privacidade - VIBTUBE ACADEMY
          </DialogTitle>
          <DialogDescription className="text-neutral-400">
            Saiba como tratamos e protegemos seus dados pessoais.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-neutral-300">
            <section>
              <p className="text-sm text-neutral-400 mb-4">
                <strong>Última atualização:</strong> 19 de novembro de 2025
              </p>
              <p className="text-sm text-neutral-400">
                A VIBTUBE ACADEMY está comprometida com a proteção da privacidade e dos dados pessoais de seus usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">1. Informações que Coletamos</h3>
              <p className="text-sm text-neutral-400 mb-3">
                Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:
              </p>
              
              <div className="ml-4 space-y-3">
                <div>
                  <h4 className="text-neutral-300 mb-2">1.1. Informações Fornecidas por Você</h4>
                  <ul className="list-disc list-inside text-sm text-neutral-400 ml-4 space-y-1">
                    <li>Nome completo</li>
                    <li>Endereço de e-mail</li>
                    <li>Informações de pagamento (processadas por terceiros seguros)</li>
                    <li>Canal do YouTube (se fornecido voluntariamente)</li>
                    <li>Informações de comunicação (mensagens, feedbacks, dúvidas)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-neutral-300 mb-2">1.2. Informações Coletadas Automaticamente</h4>
                  <ul className="list-disc list-inside text-sm text-neutral-400 ml-4 space-y-1">
                    <li>Endereço IP e localização geográfica aproximada</li>
                    <li>Tipo de navegador e dispositivo</li>
                    <li>Páginas visitadas e tempo de navegação</li>
                    <li>Dados de uso da plataforma (cursos acessados, ferramentas utilizadas)</li>
                    <li>Cookies e tecnologias similares</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">2. Como Utilizamos suas Informações</h3>
              <p className="text-sm text-neutral-400 mb-2">
                Utilizamos seus dados pessoais para as seguintes finalidades:
              </p>
              <ul className="list-disc list-inside text-sm text-neutral-400 ml-4 space-y-1">
                <li><strong>Prestação de serviços:</strong> Criar e gerenciar sua conta, fornecer acesso ao conteúdo</li>
                <li><strong>Processamento de pagamentos:</strong> Validar e processar assinaturas</li>
                <li><strong>Comunicação:</strong> Enviar atualizações, novidades, suporte técnico e materiais educacionais</li>
                <li><strong>Personalização:</strong> Oferecer conteúdo e recomendações relevantes</li>
                <li><strong>Melhoria da plataforma:</strong> Analisar uso e performance para otimizações</li>
                <li><strong>Segurança:</strong> Detectar e prevenir fraudes, abusos e violações</li>
                <li><strong>Cumprimento legal:</strong> Atender obrigações legais e regulatórias</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">3. Base Legal para Tratamento de Dados</h3>
              <p className="text-sm text-neutral-400 mb-2">
                Tratamos seus dados com base nas seguintes hipóteses legais da LGPD:
              </p>
              <ul className="list-disc list-inside text-sm text-neutral-400 ml-4 space-y-1">
                <li><strong>Execução de contrato:</strong> Para fornecer os serviços contratados</li>
                <li><strong>Consentimento:</strong> Quando você autoriza expressamente</li>
                <li><strong>Legítimo interesse:</strong> Para melhorias, segurança e personalização</li>
                <li><strong>Obrigação legal:</strong> Para cumprimento de normas e regulamentos</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">4. Compartilhamento de Informações</h3>
              <p className="text-sm text-neutral-400 mb-2">
                Não vendemos seus dados pessoais. Podemos compartilhar informações apenas nas seguintes situações:
              </p>
              <ul className="list-disc list-inside text-sm text-neutral-400 ml-4 space-y-1">
                <li><strong>Provedores de serviços:</strong> Empresas que processam pagamentos, hospedam dados ou fornecem ferramentas (todos com obrigações de confidencialidade)</li>
                <li><strong>Obrigações legais:</strong> Quando exigido por lei, ordem judicial ou autoridade competente</li>
                <li><strong>Proteção de direitos:</strong> Para proteger nossos direitos, segurança e propriedade</li>
                <li><strong>Com seu consentimento:</strong> Em outras situações mediante sua autorização expressa</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">5. Armazenamento e Segurança</h3>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>5.1. Armazenamento:</strong> Seus dados são armazenados em servidores seguros e mantidos pelo período necessário para cumprir as finalidades descritas ou conforme exigido por lei.
              </p>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>5.2. Segurança:</strong> Implementamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda, destruição ou alteração, incluindo:
              </p>
              <ul className="list-disc list-inside text-sm text-neutral-400 ml-4 space-y-1">
                <li>Criptografia de dados sensíveis</li>
                <li>Controles de acesso restrito</li>
                <li>Monitoramento de segurança contínuo</li>
                <li>Backups regulares</li>
              </ul>
              <p className="text-sm text-neutral-400 mt-2">
                <strong>5.3.</strong> Apesar de nossos esforços, nenhum sistema é 100% seguro. Você também é responsável por manter suas credenciais confidenciais.
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">6. Seus Direitos como Titular de Dados</h3>
              <p className="text-sm text-neutral-400 mb-2">
                De acordo com a LGPD, você tem os seguintes direitos:
              </p>
              <ul className="list-disc list-inside text-sm text-neutral-400 ml-4 space-y-1">
                <li><strong>Confirmação e acesso:</strong> Saber se tratamos seus dados e acessá-los</li>
                <li><strong>Correção:</strong> Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li><strong>Anonimização, bloqueio ou eliminação:</strong> Solicitar a remoção de dados desnecessários ou tratados em desconformidade</li>
                <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                <li><strong>Informação sobre compartilhamento:</strong> Saber com quem compartilhamos seus dados</li>
                <li><strong>Revogação do consentimento:</strong> Retirar consentimento a qualquer momento</li>
                <li><strong>Oposição:</strong> Opor-se ao tratamento em determinadas situações</li>
              </ul>
              <p className="text-sm text-neutral-400 mt-3">
                Para exercer seus direitos, entre em contato através dos canais oficiais de suporte.
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">7. Cookies e Tecnologias Similares</h3>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>7.1.</strong> Utilizamos cookies e tecnologias similares para melhorar a experiência do usuário, analisar o uso da plataforma e personalizar conteúdo.
              </p>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>7.2. Tipos de cookies utilizados:</strong>
              </p>
              <ul className="list-disc list-inside text-sm text-neutral-400 ml-4 space-y-1">
                <li><strong>Essenciais:</strong> Necessários para o funcionamento básico da plataforma</li>
                <li><strong>Funcionais:</strong> Melhoram a experiência e lembram preferências</li>
                <li><strong>Analíticos:</strong> Ajudam a entender como os usuários interagem com a plataforma</li>
                <li><strong>Marketing:</strong> Utilizados para campanhas e publicidade relevante</li>
              </ul>
              <p className="text-sm text-neutral-400 mt-2">
                <strong>7.3.</strong> Você pode gerenciar cookies através das configurações do seu navegador, mas isso pode afetar a funcionalidade da plataforma.
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">8. Retenção de Dados</h3>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>8.1.</strong> Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, incluindo:
              </p>
              <ul className="list-disc list-inside text-sm text-neutral-400 ml-4 space-y-1">
                <li>Durante a vigência da sua assinatura</li>
                <li>Pelo período necessário para cumprir obrigações legais, fiscais e regulatórios</li>
                <li>Para resolver disputas e fazer cumprir nossos acordos</li>
              </ul>
              <p className="text-sm text-neutral-400 mt-2">
                <strong>8.2.</strong> Após o encerramento da sua conta, podemos reter dados anonimizados para fins estatísticos.
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">9. Transferência Internacional de Dados</h3>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>9.1.</strong> Alguns de nossos fornecedores de serviços podem estar localizados fora do Brasil.
              </p>
              <p className="text-sm text-neutral-400">
                <strong>9.2.</strong> Garantimos que essas transferências ocorram com medidas adequadas de segurança e em conformidade com a LGPD.
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">10. Menores de Idade</h3>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>10.1.</strong> Nossa plataforma é destinada a maiores de 18 anos.
              </p>
              <p className="text-sm text-neutral-400">
                <strong>10.2.</strong> Não coletamos intencionalmente dados de menores sem o consentimento dos pais ou responsáveis. Se identificarmos tal situação, removeremos os dados imediatamente.
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">11. Alterações nesta Política</h3>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>11.1.</strong> Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou requisitos legais.
              </p>
              <p className="text-sm text-neutral-400 mb-2">
                <strong>11.2.</strong> Notificaremos sobre alterações significativas através de e-mail ou aviso na plataforma.
              </p>
              <p className="text-sm text-neutral-400">
                <strong>11.3.</strong> A versão atualizada entrará em vigor na data indicada como "última atualização".
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">12. Encarregado de Proteção de Dados (DPO)</h3>
              <p className="text-sm text-neutral-400">
                Para questões relacionadas à proteção de dados pessoais, você pode entrar em contato com nosso Encarregado de Proteção de Dados através dos canais oficiais disponibilizados na plataforma.
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">13. Contato</h3>
              <p className="text-sm text-neutral-400">
                Para dúvidas, solicitações ou exercício de direitos relacionados a esta Política de Privacidade, entre em contato através dos canais oficiais de suporte da VIBTUBE ACADEMY.
              </p>
            </section>

            <section>
              <h3 className="text-xl mb-3 text-purple-300">14. Autoridade Nacional de Proteção de Dados (ANPD)</h3>
              <p className="text-sm text-neutral-400">
                Você tem o direito de apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD) caso entenda que o tratamento de seus dados pessoais viola a LGPD.
              </p>
            </section>

            <section className="pt-4 border-t border-white/10">
              <p className="text-sm text-neutral-500 italic">
                Ao utilizar a VIBTUBE ACADEMY, você reconhece que leu e compreendeu esta Política de Privacidade e concorda com o tratamento de seus dados pessoais conforme descrito.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}