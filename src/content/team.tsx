import AvatarCard from "../ui/avatar-card"

const TEAM = [
  { url: "/assets/davi.jpg", name: "Davi Torres", position: "Desenvolver Front-end" },
  { url: "/assets/joao.jpeg", name: "João Arthur", position: "Desenvolvedor Back-end" },
  { url: "/assets/matheus.jpeg", name: "Matheus Felipe", position: "Desenvolvedor de IA" },
]

export default function Team() {
  return (
    <section className="py-16 mx-auto max-w-6xl px-6 lg:px-0">
      <div className="text-center mb-8">
        <h3 className="brygada text-4xl text-slate-700 mb-2">Nossa equipe</h3>
        <p className="text-sm text-gray-500">Conheça os membros do nosso time</p>
      </div>

      <section className="flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-evenly">
        {TEAM.map((member, index) => (
          <AvatarCard key={index} {...member} />
        ))}
      </section>
    </section>
  )
}
