export default function ProjectBanner() {
  return (
    <section id="project" className="pt-16">
      <div className="relative flex justify-center">
        <div className="absolute z-10 max-w-6xl size-full flex flex-col-reverse md:flex-row justify-between items-center gap-6 lg:gap-40 p-6 lg:p-0">
          <h1 className="ubuntu text-4xl lg:text-5xl text-white text-center md:text-left">
            Caracterização de PANC orientado por Aprendizagem Profunda
          </h1>

          <img
            src="/osiris/osiris_logo_named_white.png"
            alt="Papaya | Logo"
            className="size-52 lg:size-80"
          />
        </div>

        <img
          src="/assets/taioba.png"
          alt="Papaya | Osiris Banner (Taioba)"
          className="object-cover w-full h-[80dvh]"
        />
      </div>
    </section>
  )
}
