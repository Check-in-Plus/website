import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Check-in Plus | Gestão de Presenças em Tempo Real',
  description:
    'Check-in Plus é um sistema moderno para controle de presença em tempo real, rápido, simples e confiável.',
  keywords: [
    'check-in',
    'checkin',
    'gestão de presença',
    'controle de presença',
    'checkinplus',
    'check-in plus'
  ],
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-zinc-700`}
      >
        {children}
      </body>
    </html>
  )
}
