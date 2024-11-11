import { MedalIcon, SparklesIcon, StarIcon, TelescopeIcon, TrophyIcon } from "lucide-react"

export default function ProjectJourney() {
  return (
    <section className="py-16 mx-auto max-w-6xl">
      <section className="bg-gray-100">
        <div className="px-6 lg:px-16 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primary">
                <h3 className="brygada text-3xl font-semibold text-slate-700">Nossa trajetória</h3>

                <span className="text-sm font-medium tracking-wider text-slate-600">
                  Premiações e reconhecimentos que recebemos ao longo do caminho
                </span>
              </div>
            </div>

            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary text-slate-600">
                  <div className="flex gap-2">
                    <SparklesIcon />
                    <h5 className="text-xl font-semibold tracking-wide text-slate-700">
                      Início do projeto
                    </h5>
                  </div>
                  <time className="text-xs font-medium tracking-wide uppercase">2023-1</time>
                  <p className="mt-3">
                    Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque.
                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary text-slate-600">
                  <div className="flex gap-2">
                    <StarIcon />
                    <h5 className="text-xl font-semibold tracking-wide text-slate-700">TRL 4</h5>
                  </div>
                  <time className="text-xs font-medium tracking-wide uppercase">2024-1</time>
                  <p className="mt-3">
                    Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque.
                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary text-slate-600">
                  <div className="flex gap-2">
                    <MedalIcon />
                    <h5 className="text-xl font-semibold tracking-wide text-slate-700">
                      FTX - 1º Lugar
                    </h5>
                  </div>
                  <time className="text-xs font-medium tracking-wide uppercase">2024-1</time>
                  <p className="mt-3">
                    Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque.
                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary text-slate-600">
                  <div className="flex gap-2">
                    <TelescopeIcon />
                    <h5 className="text-xl font-semibold tracking-wide text-slate-700">TRL 6</h5>
                  </div>
                  <time className="text-xs font-medium tracking-wide uppercase">2024-2</time>
                  <p className="mt-3">
                    Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque.
                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary text-slate-600">
                  <div className="flex gap-2">
                    <TrophyIcon />
                    <h5 className="text-xl font-semibold tracking-wide text-slate-700">
                      Intel® AI Global Impact Festival 2024 - Country Winner
                    </h5>
                  </div>
                  <time className="text-xs font-medium tracking-wide uppercase">2024-2</time>
                  <p className="mt-3">
                    O Intel® AI Global Impact Festival desafia a apresentação de trabalhos que
                    afetem diretamente as comunidades e as vidas daqueles que convivem com os
                    desenvolvedores, por meio de soluções inovadoras, com foco em promover inclusão
                    e impacto social.
                  </p>
                  <p className="mt-3">
                    No dia 23 de outubro de 2024, os alunos do último período do curso de
                    Desenvolvimento de Software Multiplataforma (DSM) da FATEC Registro – Davi
                    Torres, João Arthur e Matheus Felipe Gomes – estiveram na sede da Intel
                    Corporation no Brasil para receber o prêmio de 1º lugar no Intel AI Global
                    Impact Festival, na categoria de Melhor Projeto de Inteligência Artificial do
                    país, nível universitário. O projeto premiado, intitulado “Characterization Of
                    Non-Conventional Food Plants Through Deep Learning Approaches”, é um aplicativo
                    inovador que utiliza IA para a identificação de Plantas Alimentícias Não
                    Convencionais (PANCs), como Inhame, Ora-Pro-Nobis e Hibiscus Rosa-Sinensis.
                  </p>

                  <figure>
                    <img
                      src="/assets/intel-presentation.jpeg"
                      alt="Papaya | Intel® AI Global Impact Festival 2024"
                      className="w-full mt-5"
                    />
                    <figcaption className="text-center text-xs italic mt-1">
                      Apresentação dos Country Winners - Intel® AI Global Impact Festival 2024 - na
                      sede da Intel® Brasil
                    </figcaption>
                  </figure>

                  <ul className="mt-5 flex flex-col gap-2">
                    <li>
                      <p className="font-bold mb-1">Reportagens</p>
                    </li>
                    <li>
                      <a
                        href="https://www.intel.com/content/www/us/en/corporate/artificial-intelligence/winners2024.html#tab-blade-1-1"
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="underline"
                      >
                        [Intel] Intel® AI Global Impact Festival 2024 Winners
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.intel.com.br/content/www/br/pt/newsroom/news/estudantes-brasileiros-vencem-festival-global-de-ia.html"
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="underline"
                      >
                        [Intel] Estudantes brasileiros vencem festival global de Inteligência
                        Artificial
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.cps.sp.gov.br/estudantes-do-cps-vencem-festival-global-de-inteligencia-artificial/"
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="underline"
                      >
                        [CPS] Estudantes do CPS vencem festival global de inteligência artificial
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://fatecregistro.cps.sp.gov.br/projeto-de-inteligencia-artificial-da-fatec-registro-e-premiado-no-intel-ai-global-impact-festival/"
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="underline"
                      >
                        [FATEC Registro] Projeto de Inteligência Artificial da FATEC Registro é
                        Premiado no Intel AI Global Impact Festival
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://canaltech.com.br/hardware/intel-anuncia-vencedores-brasileiros-do-ai-global-impact-festival-2024/"
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="underline"
                      >
                        [Canaltech] Intel anuncia vencedores brasileiros do AI Global Impact
                        Festival 2024
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.agenciasp.sp.gov.br/centro-paula-souza-estudantes-vencem-festival-global-de-inteligencia-artificial/"
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="underline"
                      >
                        [AgênciaSP] Centro Paula Souza: estudantes vencem festival global de
                        inteligência artificial
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://registrodiario.com.br/noticia/5003/alunos-da-fatec-registro-conquistam-premio-de-us-1-mil-em-concurso-da-intel"
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="underline"
                      >
                        [Registro Diário] Alunos da Fatec Registro conquistam prêmio de US$ 1 mil em
                        concurso da Intel
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tudocelular.com/seguranca/noticias/n227596/estudantes-brasileiros-vencem-intel-ai-festival.html"
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="underline"
                      >
                        [Tudocelular] Estudantes brasileiros são vencedores do Intel AI Global
                        Impact Festival
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.reporterdiario.com.br/noticia/3528012/estudantes-do-cps-vencem-festival-global-de-inteligencia-artificial/"
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="underline"
                      >
                        [Repórter Diário] Estudantes do CPS vencem festival global de inteligência
                        artificial
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://abcdoabc.com.br/estudantes-do-cps-vencem-festival-global-de-inteligencia-artificial/"
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="underline"
                      >
                        [Portal ABC do ADC] Estudantes do CPS vencem festival global de inteligência
                        artificial
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary text-slate-600">
                  <div className="flex gap-2">
                    <LibraryBigIcon />
                    <h5 className="text-xl font-semibold tracking-wide text-slate-700">
                      Submissão
                    </h5>
                  </div>
                  <time className="text-xs font-medium tracking-wide uppercase">2024-2</time>
                  <p className="mt-3">
                    Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque.
                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
