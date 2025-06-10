import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Set up transporter (use your email service credentials)
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or another provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO, // your receiving email
      subject: `Portfolio Contact Form: ${name}`,
      text: message,
      html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
    });
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error sending email', error: err.toString() });
  }
}
