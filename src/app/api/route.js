// app/api/send-email/route.js

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json(
    { error: "Method not allowed" },
    {
      status: 405,
    }
  );
}

export async function POST(req) {
  // Parse the incoming request body
  const { name, email, message } = await req.json();

  // Configure the mail transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.NEXT_MAIL_USER,
      pass: process.env.NEXT_APP_PASSWORD,
    },
  });

  try {
    // Send email to yourself
    await transporter.sendMail({
      from: {
        name: "ImageOCR Contact",
        address: process.env.NEXT_MAIL_USER,
      },
      to: process.env.NEXT_MAIL_USER, // Your email
      subject: "Contact Form Query",
      text: `Sender Email: ${email}, Name: ${name}, Message: ${message}`,
    });

    // Send a thank-you email to the sender
    await transporter.sendMail({
      from: {
        name: "ImageOCR",
        address: process.env.NEXT_MAIL_USER,
      },
      to: email, // the sender's email
      subject: "Thank You for Reaching Out!",
      text: `Dear ${name}, Thank you for contacting us! We’ve received your message and will get back to you as soon as possible.`,
    });

    return new Response(
      JSON.stringify({ message: "Emails sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send email." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
