export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, number, service, message } = req.body;

  const html = `
    <h2>New Inquiry from Website</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${number}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Website Contact <${process.env.RESEND_FROM}>`,
        to: [process.env.RESEND_TO],
        subject: 'New Contact Form Submission',
        html,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || 'Resend API failed');
    }

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('Resend API error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
