import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASSWORD,
  EMAIL_FROM,
  ADMIN_EMAIL,
  SALES_EMAIL
} = process.env;

const hasSmtpConfig = SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASSWORD;

const transporter = hasSmtpConfig
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD
      }
    })
  : null;

const sendEmail = async ({ to, subject, text, html }) => {
  if (!transporter) {
    console.log('[MailService] SMTP config not found. Skipping email:');
    console.log({ to, subject, text });
    return { success: false, skipped: true };
  }

  const mailOptions = {
    from: EMAIL_FROM || SMTP_USER,
    to,
    subject,
    text,
    html
  };

  const info = await transporter.sendMail(mailOptions);
  return { success: true, info };
};

const sendNotificationToAdmin = async (subject, message) => {
  if (!ADMIN_EMAIL) {
    console.log('[MailService] ADMIN_EMAIL not configured. Skipping admin notification.');
    return { success: false, skipped: true };
  }

  return sendEmail({
    to: ADMIN_EMAIL,
    subject,
    text: message,
    html: `<p>${message.replace(/\n/g, '<br>')}</p>`
  });
};

const sendLeadNotification = async (lead) => {
  const to = SALES_EMAIL || ADMIN_EMAIL;
  if (!to) {
    console.log('[MailService] SALES_EMAIL / ADMIN_EMAIL not configured. Skipping lead notification.');
    return { success: false, skipped: true };
  }

  const subject = `New lead captured: ${lead.name}`;
  const message = `A new lead has been captured.\n\nName: ${lead.name}\nEmail: ${lead.email}\nCompany: ${lead.company || 'N/A'}\nService needed: ${lead.serviceNeeded || 'N/A'}\nBudget range: ${lead.budgetRange || 'N/A'}\nTimeline: ${lead.timeline || 'N/A'}\nScore: ${lead.score}`;

  return sendEmail({
    to,
    subject,
    text: message,
    html: `<p>${message.replace(/\n/g, '<br>')}</p>`
  });
};

export { sendEmail, sendNotificationToAdmin, sendLeadNotification };