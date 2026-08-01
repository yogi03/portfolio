import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // For demo purposes, simulate a successful send if no API key is configured
      // This ensures the success Toast shows up on the frontend
      return NextResponse.json({ success: true, mock: true });
    }

    const resend = new Resend(apiKey);
    const { name, email, message, service } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const subject = service 
      ? `New Inquiry for ${service} from ${name}` 
      : `New Portfolio Message from ${name}`;
      
    const text = service
      ? `Service Inquiry: ${service}\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      : `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "yogendrachaurasiya30@gmail.com",
      subject,
      text,
      replyTo: email,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}