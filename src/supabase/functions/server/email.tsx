import { Resend } from "npm:resend";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

if (!RESEND_API_KEY) {
  console.warn("RESEND_API_KEY is not configured. Email sending is disabled.");
}

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

interface EmailData {
  to: string;
  name: string;
  orderId: string;
}

export async function sendConfirmationEmail({ to, name, orderId }: EmailData): Promise<void> {
  if (!resend) {
    console.error(`Email not sent to ${to}: RESEND_API_KEY missing.`);
    return;
  }

  const subject = `🎉 Seu Acesso à VIBTUBE ACADEMY Foi Liberado!`;
  const htmlContent = `
    <html>
      <body style="font-family: sans-serif; background-color: #0a0a0a; color: #f5f5f5; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #1a1a1a; padding: 30px; border-radius: 12px; border: 1px solid #8b5cf630;">
          <h1 style="color: #a78bfa; font-size: 24px; text-align: center;">Bem-vindo(a), ${name}!</h1>
          <p style="color: #a3a3a3; font-size: 16px; line-height: 1.5;">
            Parabéns! Seu pagamento para a VIBTUBE ACADEMY foi confirmado com sucesso.
          </p>
          
          <div style="background-color: #2a2a2a; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #f5f5f5; font-weight: bold; margin-bottom: 10px;">Detalhes do Acesso:</p>
            <p style="color: #a3a3a3; font-size: 14px;"><strong>ID do Pedido:</strong> ${orderId}</p>
            <p style="color: #a3a3a3; font-size: 14px;"><strong>Email de Acesso:</strong> ${to}</p>
          </div>

          <p style="color: #f5f5f5; font-size: 18px; text-align: center; margin-top: 30px;">
            Clique no botão abaixo para acessar a Área do Aluno:
          </p>
          
          <div style="text-align: center; margin: 20px 0;">
            <a href="https://vibtube.academy/area-do-aluno" 
               style="background-color: #22c55e; color: white; padding: 12px 24px; border-radius: 50px; text-decoration: none; font-weight: bold; display: inline-block;">
              Acessar VIBTUBE ACADEMY
            </a>
          </div>

          <p style="color: #a3a3a3; font-size: 14px; text-align: center; margin-top: 30px;">
            Se tiver qualquer dúvida, responda a este email ou entre em contato com nosso suporte.
          </p>
        </div>
      </body>
    </html>
  `;

  try {
    await resend.emails.send({
      from: 'VIBTUBE ACADEMY <onboarding@resend.dev>', // Substitua por um domínio/email verificado
      to: [to],
      subject: subject,
      html: htmlContent,
    });
    console.log(`Confirmation email sent successfully to ${to}`);
  } catch (error) {
    console.error(`Failed to send email to ${to}:`, error);
    throw new Error("Failed to send confirmation email.");
  }
}