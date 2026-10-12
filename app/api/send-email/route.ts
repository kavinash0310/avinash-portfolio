import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailRequest {
  name: string;
  email: string;
  message: string;
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[character];
  });

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'The contact form is temporarily unavailable. Please use the email link instead.' },
        { status: 503 }
      );
    }

    const body = (await request.json()) as Partial<EmailRequest>;
    if (
      typeof body.name !== 'string' ||
      typeof body.email !== 'string' ||
      typeof body.message !== 'string'
    ) {
      return NextResponse.json({ error: 'Please provide a name, email, and message.' }, { status: 400 });
    }

    const name = body.name.replace(/[\r\n]/g, ' ').trim();
    const email = body.email.trim();
    const message = body.message.trim();

    if (!name || name.length > 100 || !email || email.length > 254 || !message || message.length > 5000) {
      return NextResponse.json({ error: 'Please check the form fields and try again.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const result = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'k.avinash0310@gmail.com',
      replyTo: email,
      subject: 'New portfolio message from ' + name,
      html:
        '<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">' +
        '<h2 style="color:#333">New portfolio message</h2>' +
        '<div style="background:#f5f5f5;padding:20px;border-radius:8px">' +
        '<p><strong>Name:</strong> ' + safeName + '</p>' +
        '<p><strong>Email:</strong> ' + safeEmail + '</p>' +
        '<p><strong>Message:</strong></p>' +
        '<p style="white-space:pre-wrap">' + safeMessage + '</p>' +
        '</div></div>',
    });

    if (result.error) {
      console.error('Portfolio contact email could not be sent.');
      return NextResponse.json(
        { error: 'The message could not be sent right now. Please use the email link instead.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
  } catch {
    console.error('Portfolio contact request could not be processed.');
    return NextResponse.json(
      { error: 'The message could not be sent right now. Please use the email link instead.' },
      { status: 500 }
    );
  }
}
