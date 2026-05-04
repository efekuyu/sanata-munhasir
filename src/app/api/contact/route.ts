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

    await getResend().emails.send({
      from: 'Atölye Sanata Münhasır <info@sanatamunhasir.com>',
      to: ['info@sanatamunhasir.com'],
      ...(isValidEmail(email) ? { replyTo: email } : {}),
      subject: `Yeni Form Mesajı: ${formType} - ${name}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; background:#f7f4ee; padding:32px;">
          <div style="max-width:620px; margin:0 auto; background:#ffffff; border:1px solid #eadfca; border-radius:10px; overflow:hidden;">
            
            <div style="padding:24px 28px; background:#111111; color:#ffffff;">
              <div style="font-family: Georgia, 'Times New Roman', serif; font-size:22px; letter-spacing:0.3px;">
                Atölye Sanata Münhasır
              </div>
              <div style="margin-top:8px; color:#d8c39a; font-size:13px; letter-spacing:1px;">
                Yeni Form Mesajı
              </div>
            </div>

            <div style="padding:28px;">
              <h2 style="margin:0 0 20px; font-family: Georgia, 'Times New Roman', serif; font-size:21px; font-weight:400; color:#111;">
                ${formType}
              </h2>

              <table cellpadding="0" cellspacing="0" style="width:100%; border-collapse:collapse; font-size:14px; color:#333;">
                <tr>
                  <td style="padding:10px 0; color:#8a7a5c; width:130px;">İsim</td>
                  <td style="padding:10px 0; color:#111;"><strong>${name}</strong></td>
                </tr>
                <tr>
                  <td style="padding:10px 0; color:#8a7a5c;">E-mail</td>
                  <td style="padding:10px 0; color:#111;">${email || 'Belirtilmedi'}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0; color:#8a7a5c;">Telefon</td>
                  <td style="padding:10px 0; color:#111;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0; color:#8a7a5c;">İlgi Alanı</td>
                  <td style="padding:10px 0; color:#111;">${interest}</td>
                </tr>
              </table>

              <div style="height:1px; background:#eadfca; margin:22px 0;"></div>

              <div style="margin-bottom:8px; color:#8a7a5c; font-size:14px;">
                Mesaj
              </div>

              <div style="background:#fbfaf7; border:1px solid #eee5d6; border-radius:8px; padding:18px; color:#222; font-size:14px; line-height:1.8;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>

            <div style="padding:16px 28px; background:#fbfaf7; border-top:1px solid #eadfca; color:#9a8a6a; font-size:12px;">
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