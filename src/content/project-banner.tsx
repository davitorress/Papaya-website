export default function ProjectBanner() {
  return (
    <section id="project" className="pt-16">
      <div className="relative flex justify-center">
        <div className="absolute z-10 max-w-6xl size-full flex justify-between items-center gap-6 lg:gap-40 px-6 lg:px-0">
          <h1 className="ubuntu text-4xl lg:text-5xl text-white">
            Caracterização de PANC orientado por Aprendizagem Profunda
          </h1>

          <img
            src="/osiris/osiris_logo_named_white.png"
            alt="Papaya | Logo"
            className="size-60 lg:size-80"
          />
        </div>

        <img
          src="/assets/taioba.png"
          alt="Papaya | Osiris Banner (Taioba)"
          className="object-cover w-full h-[60dvh]"
        />
      </div>
    </section>
  )
}
