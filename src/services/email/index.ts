import type { FormData } from '@/type/email'

export async function sendEmail(data: FormData) {
  try {
    const response = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(data),
    });

    return response
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error)
    return { status: "error" }
  }
}
