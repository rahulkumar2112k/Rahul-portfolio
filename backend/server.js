const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ================= BREVO SMTP CONFIG =================
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,          // smtp-relay.brevo.com
  port: process.env.SMTP_PORT,          // 587
  secure: false,                        // TLS
  auth: {
    user: process.env.SMTP_USER,        // 9e0a86001@smtp-brevo.com
    pass: process.env.SMTP_PASS,        // SMTP KEY (xkeysib-...)
  },
});

// Verify transporter
transporter.verify((error) => {
  if (error) {
    console.error("❌ Email transporter error:", error);
  } else {
    console.log("✅ Email transporter is ready");
  }
});

// ================= ROUTES =================

// Health check
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Contact route
app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({
      code: 400,
      status: "All fields are required.",
    });
  }

  try {
    // 1️⃣ Email to YOU
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.FROM_EMAIL}>`,
      to: process.env.FROM_EMAIL,
      subject: "📩 New Portfolio Contact Message",
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    // 2️⃣ Auto-reply to USER
    await transporter.sendMail({
      from: `"Rahul Kumar" <${process.env.FROM_EMAIL}>`,
      to: email,
      subject: "Thanks for contacting me 🙌",
      html: `
        <p>Hi ${firstName},</p>

        <p>Thank you for reaching out through my portfolio website.</p>

        <p>I’ve received your message and will get back to you shortly.</p>

        <p><b>Your message:</b></p>
        <blockquote>${message}</blockquote>

        <p>Best regards,<br/>
        <b>Rahul Kumar</b></p>
      `,
    });

    console.log("✅ Email sent + auto-reply sent");

    res.json({
      code: 200,
      status: "Message sent successfully",
    });
  } catch (error) {
    console.error("❌ Email send failed:", error);
    res.status(500).json({
      code: 500,
      status: "Email sending failed",
    });
  }
});

// ================= START SERVER =================
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
