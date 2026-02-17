import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Campos requeridos faltantes" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    // In production: send email via Nodemailer / Resend / SendGrid
    // For now, we log and simulate success
    console.log("📧 Nuevo mensaje de contacto:", {
      name,
      email,
      phone: phone || "No proporcionado",
      service: service || "No especificado",
      message,
      timestamp: new Date().toISOString(),
    });

    // Example with Nodemailer (configure SMTP_HOST, SMTP_USER, SMTP_PASS in .env.local):
    /*
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Web Cinthya López" <${process.env.SMTP_USER}>`,
      to: "cinthyaa.lopeeez@gmail.com",
      subject: `Nueva consulta de ${name} - ${service || "Consulta general"}`,
      html: `
        <h2>Nueva consulta desde tu sitio web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
        <p><strong>Servicio:</strong> ${service || "No especificado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Enviado desde cinthyalopezfonoaudiologa.cl</small></p>
      `,
    });
    */

    return NextResponse.json(
      {
        success: true,
        message: "Mensaje recibido correctamente",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en API de contacto:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
