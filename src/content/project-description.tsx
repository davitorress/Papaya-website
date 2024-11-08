export default function ProjectDescription() {
  return (
    <section className="py-16 mx-auto max-w-6xl px-6 lg:px-0">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center justify-items-center mx-auto">
        <div>
          <h4 className="brygada text-3xl text-slate-700 mb-5">
            Conheça o <b>Osiris</b>: Um App Inovador para a Identificação de PANC e uma Alimentação
            Sustentável
          </h4>

          <div className="flex flex-col gap-3 text-gray-500">
            <p>
              O Osiris é um aplicativo criado para facilitar a identificação das PANC (Plantas
              Alimentícias Não-Convencionais) e oferecer orientações para o seu uso na alimentação.
              Por meio da Inteligência Artificial, o Osiris analisa fotos enviadas pelos usuários,
              ajudando a identificar e classificar essas plantas ricas em nutrientes e muitas vezes
              desconhecidas. Além disso, o app traz uma variedade de receitas que incluem PANC como
              ingrediente, incentivando uma alimentação mais saudável e diversificada.
            </p>
            <p>
              Esse projeto nasceu com o propósito de ter impacto social e ambiental, promovendo a
              preservação da biodiversidade e incentivando práticas agrícolas sustentáveis. Mais do
              que um aplicativo de identificação de plantas, o Osiris é uma plataforma que
              conscientiza a população sobre a importância das PANC e seus benefícios para a saúde,
              ao mesmo tempo que fortalece a conexão entre as pessoas e o meio ambiente.
            </p>
            <p>
              Através de uma interface simples e acessível, o Osiris transforma a percepção sobre as
              PANC, promovendo uma dieta mais diversificada e sustentável. Esse projeto inovador
              representa um passo importante para quem deseja adotar uma alimentação mais saudável,
              apoiar práticas ambientais responsáveis e valorizar a biodiversidade.
            </p>
          </div>
        </div>

        <img src="/assets/mockups-crop.png" alt="Papaya | Osiris Mockups" className="w-full" />
      </div>
    </section>
  )
}
