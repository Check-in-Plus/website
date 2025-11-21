import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json(
        { error: "E-mail é obrigatório." },
        { status: 400 }
      )
    }


    await resend.emails.send({
      from: `Check-in Plus <${process.env.RESEND_FROM}>`,
      to: process.env.RESEND_FROM!,
      replyTo: email,
      subject: `Novo inscrito na newsletter`,
      text: `Novo e-mail cadastrado: ${email}`,
    })


    await resend.emails.send({
      from: `Check-in Plus <${process.env.RESEND_FROM}>`,
      to: email,
      subject: "Bem-vindo à nossa Newsletter!",
      text: `Obrigado por se inscrever na Check-in Plus! Em breve você receberá novidades.`,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Erro ao enviar e-mails:', error)
    return NextResponse.json(
      { error: "Erro interno ao enviar e-mails." },
      { status: 500 }
    )
  }
}
