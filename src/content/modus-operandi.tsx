import { GaugeIcon, GlobeIcon, LaptopMinimalIcon, LightbulbIcon } from "lucide-react"

export default function ModusOperandi() {
  return (
    <section className="py-16 mx-auto lg:max-w-6xl px-6 lg:px-0">
      <div className="text-center mb-8">
        <h3 className="brygada text-4xl text-slate-700 mb-2">Como fazemos</h3>
      </div>

      <hr className="my-4 mx-auto h-0.5 bg-slate-300" />

      <section className="grid grid-cols-2 lg:grid-cols-4 items-start">
        <div className="flex flex-col items-center justify-center gap-2 text-center p-6">
          <LightbulbIcon size={36} className="text-primary" />
          <h6 className="brygada text-2xl text-slate-700">Novas ideias</h6>
          <p className="text-sm text-gray-500">
            As novas ideias são de extrema importância para buscarmos a inovação
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 text-center p-6">
          <LaptopMinimalIcon size={36} className="text-primary" />
          <h6 className="brygada text-2xl text-slate-700">Tecnologias atualizadas</h6>
          <p className="text-sm text-gray-500">
            Utilizamos as melhores tecnologias disponíveis para o desenvolvimento
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 text-center p-6">
          <GlobeIcon size={36} className="text-primary" />
          <h6 className="brygada text-2xl text-slate-700">Projetos conectados</h6>
          <p className="text-sm text-gray-500">
            Criamos sistemas multiplataformas conectadas entre si
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 text-center p-6">
          <GaugeIcon size={36} className="text-primary" />
          <h6 className="brygada text-2xl text-slate-700">Otimizamos operações</h6>
          <p className="text-sm text-gray-500">
            Utilizando a tecnologia otimizamos processos do dia a dia com projetos
          </p>
        </div>
      </section>
    </section>
  )
}
