import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  return new Resend(apiKey);
};

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = body.name || 'İsimsiz';
    const email = body.email || '';
    const phone = body.phone || 'Telefon belirtilmedi';
    const interest = body.interest || 'Belirtilmedi';
    const message = body.message || 'Mesaj yok';
    const formType = body.formType || 'Website Formu';

    const now = new Intl.DateTimeFormat('tr-TR', {
      dateStyle: 'long',
      timeStyle: 'short',
      timeZone: 'Europe/Istanbul',
    }).format(new Date());

    const cleanPhone = phone.replace(/\D/g, '');
    const whatsappUrl = cleanPhone ? `https://wa.me/${cleanPhone}` : '';
    const phoneUrl = cleanPhone ? `tel:+${cleanPhone}` : '';
    const emailUrl = isValidEmail(email) ? `mailto:${email}` : '';

    await getResend().emails.send({
      from: 'Atölye Sanata Münhasır <info@sanatamunhasir.com>',
      to: ['info@sanatamunhasir.com'],
      ...(isValidEmail(email) ? { replyTo: email } : {}),
      subject: `${formType} - ${name}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; background:#f7f4ee; padding:36px;">
          <div style="max-width:620px; margin:0 auto; background:#ffffff; border:1px solid #eadfca; border-radius:12px; overflow:hidden;">

            <div style="padding:28px 30px; background:#111111; color:#ffffff;">
              <div style="font-family: Georgia, 'Times New Roman', serif; font-size:22px; line-height:1.3;">
                Atölye Sanata Münhasır
              </div>
              <div style="margin-top:9px; color:#d8c39a; font-size:12px; letter-spacing:1.5px; text-transform:uppercase;">
                ${formType}
              </div>
            </div>

            <div style="padding:30px;">
              <div style="margin-bottom:26px;">
                <div style="color:#9a8a6a; font-size:12px; letter-spacing:1.3px; text-transform:uppercase; margin-bottom:12px;">
                  Mesaj
                </div>
                <div style="font-size:15px; line-height:1.8; color:#222;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>

              <div style="height:1px; background:#eadfca; margin:26px 0;"></div>

              <table cellpadding="0" cellspacing="0" style="width:100%; border-collapse:collapse; font-size:14px; color:#222;">
                <tr>
                  <td style="padding:9px 0; color:#9a8a6a; width:180px;">İsim</td>
                  <td style="padding:9px 0;"><strong>${name}</strong></td>
                </tr>
                <tr>
                  <td style="padding:9px 0; color:#9a8a6a;">E-mail</td>
                  <td style="padding:9px 0;">${email || 'Belirtilmedi'}</td>
                </tr>
                <tr>
                  <td style="padding:9px 0; color:#9a8a6a;">Telefon</td>
                  <td style="padding:9px 0;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding:9px 0; color:#9a8a6a;">İlgi Alanı</td>
                  <td style="padding:9px 0;">${interest}</td>
                </tr>
                <tr>
                  <td style="padding:9px 0; color:#9a8a6a;">Gönderim Tarihi</td>
                  <td style="padding:9px 0;">${now}</td>
                </tr>
              </table>

              <div style="height:1px; background:#eadfca; margin:26px 0;"></div>

              <div style="color:#9a8a6a; font-size:12px; letter-spacing:1.3px; text-transform:uppercase; margin-bottom:14px;">
                Hızlı İletişim
              </div>

              <div>
                ${
                  emailUrl
                    ? `<a href="${emailUrl}" style="display:inline-block; margin:0 8px 10px 0; padding:11px 15px; background:#111111; color:#ffffff; text-decoration:none; border-radius:6px; font-size:13px;">E-posta ile Yanıtla</a>`
                    : ''
                }

                ${
                  phoneUrl
                    ? `<a href="${phoneUrl}" style="display:inline-block; margin:0 8px 10px 0; padding:11px 15px; background:#fbfaf7; color:#111111; text-decoration:none; border:1px solid #eadfca; border-radius:6px; font-size:13px;">Telefonla Ara</a>`
                    : ''
                }

                ${
                  whatsappUrl
                    ? `<a href="${whatsappUrl}" style="display:inline-block; margin:0 8px 10px 0; padding:11px 15px; background:#fbfaf7; color:#111111; text-decoration:none; border:1px solid #eadfca; border-radius:6px; font-size:13px;">WhatsApp’tan Yaz</a>`
                    : ''
                }
              </div>
            </div>

            <div style="padding:16px 30px; background:#fbfaf7; border-top:1px solid #eadfca; color:#9a8a6a; font-size:12px;">
              Bu mesaj web sitesi formu üzerinden gönderildi · www.sanatamunhasir.com
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Form email error:', error);
    return NextResponse.json(
      { success: false, error: 'Email gönderilemedi' },
      { status: 500 }
    );
  }
}