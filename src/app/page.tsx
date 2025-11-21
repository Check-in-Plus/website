import Image from 'next/image'
import { NewsLetterForm } from './components/news-letter-form'

export default function ComingSoonPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-6">

      {/* Background */}
      <Image
        src="/background.jpg"
        width={3600}
        height={200}
        alt="Imagem tecnologia"
        className="fixed inset-0 w-full h-full object-cover z-0"
        priority
      />

      {/* Glass Card */}
      <div
        className="
          relative z-10 text-center 
          w-full max-w-lg sm:max-w-2xl
          p-6 sm:p-8
          rounded-2xl
          bg-white/10 backdrop-blur-xl
          border border-white/20
          shadow-2xl
          mt-10 mb-16
        "
      >
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-md">
          Estamos Construindo Algo Incrível
        </h1>

        <p className="mt-4 text-md sm:text-xl text-blue-100">
          Nosso novo sistema está quase pronto! Em breve você poderá acessar
          uma experiência moderna, rápida e totalmente integrada.
        </p>

        <div className="mt-10">
          <div
            className="
              animate-pulse inline-flex items-center gap-2 
              bg-white/10 border border-white/20 
              px-5 py-3 sm:px-6 sm:py-3 
              rounded-2xl backdrop-blur-md
            "
          >
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 animate-bounce"></div>
            <span className="text-white text-sm sm:text-base">
              Em desenvolvimento…
            </span>
          </div>
        </div>


        <div
          className="
            mt-10 sm:mt-12 
            p-4 sm:p-6 
            bg-white/10 border border-white/20 
            rounded-2xl backdrop-blur-md shadow-lg
          "
        >
          <p className="text-blue-100 mb-3 font-medium text-sm sm:text-base">
            Quer ser avisado quando for lançado?
          </p>

          <NewsLetterForm />
        </div>
      </div>

      <footer className="absolute bottom-4 text-blue-100 text-xs sm:text-sm opacity-80 z-10">
        © {new Date().getFullYear()} CheckinPlus — Todos os direitos reservados.
      </footer>
    </div>
  );
}
