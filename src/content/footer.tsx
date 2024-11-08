export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-4">
      <section className="mx-auto max-w-6xl px-6 lg:px-0">
        <hr className="my-4 mx-auto h-0.5 bg-slate-300" />

        <div className="grid grid-cols-3 items-center py-4">
          <p className="text-sm text-gray-500 justify-self-start">© {currentYear} Papaya</p>

          <img
            src="/papaya/logo-2.svg"
            alt="Papaya | Logo"
            className="size-14 justify-self-center"
          />

          <ul className="flex gap-6 text-sm text-gray-500 justify-self-end">
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#activity">Atividades</a>
            </li>
            <li>
              <a href="#project">Projeto</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  )
}
