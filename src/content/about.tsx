export default function About() {
  return (
    <section id="about">
      <img
        src="/assets/banner.png"
        alt="Papaya | Banner"
        className="min-h-[80dvh] object-cover w-full"
      />

      <section className="-mt-24 py-12 px-6 md:px-16 mx-auto max-w-6xl relative z-10 bg-slate-100">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 mb-11">
          <span className="text-5xl text-slate-700 pb-3 md:pb-0 border-b-2 md:border-e-2 md:border-b-0 border-slate-300 w-1/3 text-center mx-3">
            PPY
          </span>
          <h1 className="text-5xl text-gray-600 w-2/3 text-center">
            Olá, nós somos <span className="text-primary">Papaya</span>!
          </h1>
        </div>

        <div className="text-xl text-slate-700 flex flex-col gap-4 md:w-9/12 lg:pl-10">
          <p>
            Nós somos um grupo de desenvolvedores apaixonados por tecnologia e inovação, sempre
            buscando novos conhecimentos e descobertas no meio de desenvolvimento de softwares e
            sistemas.
          </p>
          <p>
            Acreditamos que a mudança sempre acompanha o avanço da ciência, e nós estamos
            comprometidos com a mudança sociocultural através das novas tecnologias.
          </p>
        </div>
      </section>
    </section>
  )
}
