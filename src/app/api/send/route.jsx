// import { render } from '@react-email/render';
import { NextRequest, NextResponse } from 'next/server';
import { KLDEmailTemplate } from '../../../components/emails/emailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  try {
    // const { name, email, text } = JSON.parse(req.body);
    const { name, email, text } = await req.json();

    const data = await resend.emails.send({
      from: 'KLD Solutions <onboarding@resend.dev>',
      to: ['emils.bisenieks93@gmail.com'],
      subject: `🎉 Jaun pieteikums no KLD Solution no ${name} (${email})`,
      react: KLDEmailTemplate({ name, email, text }),
    });

    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
