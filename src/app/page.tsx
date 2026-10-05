const servicos = [
  {
    emoji: "🛁",
    titulo: "Banho & Tosa",
    descricao:
      "Seu pet sai cheiroso, bonito e feliz com nossa equipe especializada em banho e tosa.",
  },
  {
    emoji: "💉",
    titulo: "Consulta Veterinária",
    descricao:
      "Atendimento veterinário completo, com check-ups, vacinas e cuidados preventivos.",
  },
  {
    emoji: "🛍️",
    titulo: "Loja de Produtos",
    descricao:
      "Rações, brinquedos, acessórios e tudo o que seu pet precisa em um só lugar.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col font-sans">
      <header className="sticky top-0 z-10 border-b border-black/[.06] bg-white/80 backdrop-blur dark:border-white/[.08] dark:bg-black/80">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">
            🐾 PetShop Amigo
          </span>
          <nav className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            <a
              href="#servicos"
              className="transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
            >
              Serviços
            </a>
            <a
              href="#contato"
              className="transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="bg-gradient-to-b from-emerald-600 to-emerald-700 px-6 py-24 text-center text-white">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Cuidado e carinho para o seu melhor amigo
            </h1>
            <p className="max-w-xl text-lg text-emerald-50">
              Banho, tosa, consultas veterinárias e tudo que seu pet precisa,
              com quem realmente ama animais.
            </p>
            <a
              href="#contato"
              className="mt-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-emerald-700 transition-colors hover:bg-emerald-50"
            >
              Agende um horário
            </a>
          </div>
        </section>

        <section
          id="servicos"
          className="mx-auto w-full max-w-5xl px-6 py-20"
        >
          <h2 className="text-center text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
            Nossos Serviços
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {servicos.map((servico) => (
              <div
                key={servico.titulo}
                className="flex flex-col items-center gap-3 rounded-2xl border border-black/[.06] p-8 text-center dark:border-white/[.08]"
              >
                <span className="text-4xl">{servico.emoji}</span>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  {servico.titulo}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {servico.descricao}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contato"
          className="bg-zinc-50 px-6 py-20 dark:bg-zinc-900/40"
        >
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center">
            <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
              Venha nos visitar
            </h2>
            <div className="flex flex-col gap-2 text-zinc-600 dark:text-zinc-400">
              <p>📍 Rua dos Animais, 123 — Centro</p>
              <p>📞 (11) 99999-9999</p>
              <p>🕐 Seg a Sáb, das 9h às 18h</p>
            </div>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/[.06] px-6 py-6 text-center text-sm text-zinc-500 dark:border-white/[.08] dark:text-zinc-400">
        © {new Date().getFullYear()} PetShop Amigo. Todos os direitos reservados.
      </footer>
    </div>
  );
}
