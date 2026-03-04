import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { fullName, company, email, role, message } = req.body ?? {};

  if (!fullName || !company || !email || !role || !message) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = 'contact@norscope.com';

  if (!apiKey) {
    res.status(500).json({ error: 'Email service not configured' });
    return;
  }

  const subject = `Contact request from ${fullName}`;
  const text = [
    `Full Name: ${fullName}`,
    `Company: ${company}`,
    `Email: ${email}`,
    `Role: ${role}`,
    '',
    'Message:',
    message,
  ].join('\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Norscope Website <no-reply@norscope.com>',
        to,
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error('Resend error:', response.status, body);
      res.status(502).json({ error: 'Failed to send email' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ error: 'Unexpected error sending email' });
  }
}

