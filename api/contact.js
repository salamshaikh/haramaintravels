export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { name, email, number, address, passport, service } = req.body;

  const htmlContent = `
    <h2>New Booking Received</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${number}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Passport:</strong> ${passport}</p>
    <p><strong>Service:</strong> ${service}</p>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Umrah Booking <${process.env.RESEND_FROM}>`,
        to: process.env.RESEND_FROM,
        subject: 'New Booking Submission',
        html: htmlContent,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || 'Resend API failed');
    }

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
