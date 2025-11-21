'use client'

import { useState } from 'react'
import { sendEmail } from '@/services/email'
import type { FormData } from '@/type/email'

export const NewsLetterForm = () => {
  const [email, setEmail] = useState('')
  const [isSending, setIsSending] = useState(false)

  const [message, setMessage] = useState<{
    type: 'success' | 'error'
    show: boolean
  }>({
    type: 'success',
    show: false,
  })

  const clearFormFields = () => {
    setEmail('')
  }

  const handleMessageDisplay = (
    isSuccess: boolean,
    show: boolean,
    duration: number
  ) => {
    setMessage({ type: isSuccess ? 'success' : 'error', show })

    setTimeout(() => {
      setMessage((prev) => ({ ...prev, show: false }))
    }, duration)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data: FormData = {
      email,
      message: 'Envio de mensagem teste'
    }

    setIsSending(true)

    try {
      const response = await sendEmail(data)

      if (response?.status === 200) {
        clearFormFields()
        handleMessageDisplay(true, true, 4000)
      } else {
        handleMessageDisplay(false, true, 4000)
      }
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error)
      handleMessageDisplay(false, true, 4000)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg bg-white/20 placeholder-white/60 text-white 
          outline-none focus:ring-2 focus:ring-emerald-400"
          required
        />

        <button
          type="submit"
          disabled={isSending}
          className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg 
          font-semibold shadow-md transition disabled:opacity-50"
        >
          {isSending ? 'Enviando...' : 'Notificar-me'}
        </button>
      </form>

      {message.show && (
        <p
          className={`mt-3 text-sm ${message.type === 'success' ? 'text-emerald-300' : 'text-red-300'
            }`}
        >
          {message.type === 'success'
            ? 'Email enviado com sucesso!'
            : 'Erro ao enviar, tente novamente.'}
        </p>
      )}
    </div>
  )
}
