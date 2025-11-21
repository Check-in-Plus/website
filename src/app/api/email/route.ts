import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  if (!process.env.RESEND_FROM) {
    return NextResponse.json(
      { error: "RESEND_FROM is not configured in the environment variables." },
      { status: 500 }
    )
  }
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      )
    }

    const data = await resend.emails.send({
      from: `Edge ETZ <${process.env.RESEND_FROM}>`,
      to: [process.env.RESEND_FROM],
      replyTo: email,
      subject: `Contact from: ${name}`,
      text: message,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json(
      { error: "Internal server error while sending email." },
      { status: 500 }
    )
  }
}
