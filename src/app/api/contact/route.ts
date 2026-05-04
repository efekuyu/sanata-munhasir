import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  return new Resend(apiKey);
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = body.name || 'İsimsiz';
    const email = body.email || 'E-mail belirtilmedi';
    const phone = body.phone || 'Telefon belirtilmedi';
    const interest = body.interest || 'Belirtilmedi';
    const message = body.message || 'Mesaj yok';
    const formType = body.formType || 'Website Formu';

    await getResend().emails.send({
      from: 'Atölye Sanata Münhasır <info@sanatamunhasir.com>',
      to: 'info@sanatamunhasir.com',
      replyTo: email,
      subject: `Yeni Form Mesajı: ${formType}`,
      html: `
        <h2>Yeni Form Mesajı</h2>
        <p><strong>Form:</strong> ${formType}</p>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>İlgi Alanı:</strong> ${interest}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
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