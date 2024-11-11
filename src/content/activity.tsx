import { ChartNoAxesCombinedIcon, CpuIcon } from "lucide-react"

export default function Activity() {
  return (
    <section id="activity" className="py-16 mx-auto max-w-6xl px-6 lg:px-0">
      <div className="text-center mb-8">
        <h3 className="brygada text-4xl text-slate-700 mb-2">O que fazemos</h3>
      </div>

      <section className="flex flex-col gap-16">
        <div className="grid md:grid-cols-2 gap-8 items-center justify-items-center max-w-6xl mx-auto">
          <div>
            <ChartNoAxesCombinedIcon size={32} className="text-primary mb-4" />
            <h4 className="brygada text-3xl text-slate-700 mb-2">Solucionando problemas</h4>
            <p className="text-sm text-gray-500">
              O principal objetivo do desenvolvimento de software é solucionar problemas do
              cotidiano dos seres humanos, utilizando tecnologias para facilitar atividades e
              processos.
            </p>
          </div>

          <img
            src="/assets/about-talking.png"
            alt="Papaya | Resolving Problems"
            className="size-52 md:size-64"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center justify-items-center max-w-6xl mx-auto">
          <img
            src="/assets/about-computer.jpg"
            alt="Papaya | Developing Solutions"
            className="size-52 md:size-64 hidden md:block"
          />

          <div>
            <CpuIcon size={32} className="text-primary mb-4" />
            <h4 className="brygada text-3xl text-slate-700 mb-2">Desenvolvendo soluções</h4>
            <p className="text-sm text-gray-500">
              Desenvolvemos sistemas e softwares em multiplataformas, tendo em vista em qual delas
              terá a melhor adesão do sistema pelo usuário.
            </p>
          </div>

          <img
            src="/assets/about-computer.jpg"
            alt="Papaya | Developing Solutions"
            className="size-52 md:size-64 md:hidden"
          />
        </div>
      </section>
    </section>
  )
}
