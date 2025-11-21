export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-800 text-white px-6">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 text-center max-w-xl">

        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md">
          Estamos Construindo Algo Incrível
        </h1>

        <p className="mt-4 text-lg md:text-xl text-blue-100">
          Nosso novo sistema está quase pronto!
          Em breve você poderá acessar uma experiência moderna,
          rápida e totalmente integrada.
        </p>

        <div className="mt-10">
          <div className="animate-pulse inline-flex items-center gap-2 bg-white/10 border border-white/20 px-6 py-3 rounded-2xl backdrop-blur-md">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-bounce"></div>
            <span className="text-white">Em desenvolvimento…</span>
          </div>
        </div>

        {/* Optional – notify area */}
        <div className="mt-12 p-6 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md shadow-lg">
          <p className="text-blue-100 mb-3 font-medium">
            Quer ser avisado quando for lançado?
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 placeholder-white/60 text-white outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold shadow-md transition"
            >
              Notificar-me
            </button>
          </form>
        </div>
      </div>

      <footer className="absolute bottom-6 text-blue-100 text-sm opacity-80">
        © {new Date().getFullYear()} CheckinPlus — Todos os direitos reservados.
      </footer>
    </div>
  )
}
