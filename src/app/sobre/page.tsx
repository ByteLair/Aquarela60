import type { Metadata } from "next";
import Image from "next/image";
import { NAC, SITE, IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre o Programa",
  description:
    "Conheça a história do Programa Aquarela 60+ — desde 2012 promovendo arte, educação e cultura para pessoas 60+.",
};

const TIMELINE = [
  { year: "2012", event: "Fundação do Programa Aquarela 60+ pelo NAC/UMESP", emoji: "🎉" },
  { year: "2013", event: "Primeiras oficinas de coral e artesanato", emoji: "🎵" },
  { year: "2015", event: "Expansão para oficinas de idiomas e teatro", emoji: "🎭" },
  { year: "2018", event: "Primeiro Festival da Primavera", emoji: "🌸" },
  { year: "2020", event: "Adaptação para atividades online durante a pandemia", emoji: "💻" },
  { year: "2022", event: "10 anos de história — retorno 100% presencial", emoji: "🎊" },
  { year: "2025", event: "Mais de 15 oficinas e 500+ alunos impactados", emoji: "🚀" },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="watercolor-blob w-96 h-96 bg-verde -right-20 top-0" />
        <div className="watercolor-blob w-80 h-80 bg-laranja -left-20 bottom-0" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-laranja font-bold text-sm uppercase tracking-widest mb-3">
              Nossa História
            </p>
            <h1 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-display)] mb-6">
              Sobre o{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laranja via-amarelo to-verde">
                Aquarela 60+
              </span>
            </h1>
            <p className="text-xl text-marrom-light leading-relaxed">
              Somos uma iniciativa do Núcleo de Arte e Cultura (NAC) da
              Universidade Metodista de São Paulo, dedicada a promover
              Transformação Social, Inclusão e Envelhecimento Ativo desde 2012.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-marrom">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Missão",
                text: "Promover o envelhecimento ativo e a inclusão social de pessoas 60+ através de atividades artísticas, educacionais e culturais no ambiente universitário.",
                emoji: "🎯",
                color: "from-laranja to-laranja-dark",
              },
              {
                title: "Visão",
                text: "Ser referência nacional em programas de extensão para a terceira idade, inspirando outras universidades a acolherem a longevidade.",
                emoji: "🌟",
                color: "from-amarelo to-amarelo-dark",
              },
              {
                title: "Valores",
                text: "Solidariedade, respeito, acolhimento, diversidade e a crença de que a educação e a arte transformam vidas em qualquer idade.",
                emoji: "💛",
                color: "from-verde to-verde-dark",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center"
              >
                <span className="text-5xl block mb-4">{item.emoji}</span>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-4">
                  <span className="text-gradient-laranja">{item.title}</span>
                </h3>
                <p className="text-creme/80 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative overflow-hidden">
        <div className="watercolor-blob w-96 h-96 bg-amarelo left-1/4 top-1/3" />

        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-verde font-bold text-sm uppercase tracking-widest mb-3">
              Nossa Trajetória
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
              Linha do <span className="text-laranja">Tempo</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-laranja via-amarelo to-verde" />

            <div className="space-y-12">
              {TIMELINE.map((item, idx) => (
                <div
                  key={item.year}
                  className={`relative flex items-center gap-8 ${
                    idx % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-laranja border-4 border-creme z-10" />

                  {/* Content */}
                  <div
                    className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                      idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 border border-marrom/5 shadow-sm card-hover">
                      <div className={`flex items-center gap-3 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="text-3xl">{item.emoji}</span>
                        <span className="text-2xl font-bold font-[family-name:var(--font-display)] text-laranja">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-marrom-light mt-2 text-lg">
                        {item.event}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NAC Info */}
      <section className="py-20 bg-gradient-to-br from-laranja/5 to-amarelo/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-verde font-bold text-sm uppercase tracking-widest mb-3">
                Nosso núcleo
              </p>
              <h2 className="text-4xl font-bold font-[family-name:var(--font-display)] mb-6">
                {NAC.name}
              </h2>
              <p className="text-lg text-marrom-light leading-relaxed mb-6">
                O NAC é o órgão da Universidade Metodista responsável por
                fomentar e gerir projetos de arte e cultura que conectem a
                universidade à comunidade. O Programa Aquarela 60+ é a sua
                principal iniciativa de extensão voltada à longevidade.
              </p>
              <div className="bg-white rounded-2xl p-6 border border-marrom/5">
                <p className="font-bold mb-2">
                  📍 {NAC.address}
                </p>
                <p className="text-marrom-light">{NAC.city}</p>
                <p className="text-marrom-light">{NAC.institution}</p>
                <div className="section-divider my-4" />
                <p>📞 {NAC.phone}</p>
                <p>💬 WhatsApp: {NAC.whatsappDisplay}</p>
                <p>✉️ {NAC.email}</p>
                <p className="text-sm text-marrom-light mt-2">🕐 {NAC.hours}</p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={IMAGES.about}
                alt="Atividades do NAC"
                width={800}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-amarelo-dark font-bold text-sm uppercase tracking-widest mb-3">
            Nossa Equipe
          </p>
          <h2 className="text-4xl font-bold font-[family-name:var(--font-display)] mb-6">
            Quem faz o Aquarela 60+ acontecer
          </h2>
          <div className="bg-gradient-to-br from-laranja/5 to-verde/5 rounded-3xl p-12 border border-marrom/5 max-w-2xl mx-auto">
            <span className="text-6xl block mb-4">👥</span>
            <p className="text-lg text-marrom-light">
              Em breve, aqui você conhecerá os coordenadores, professores e
              voluntários que fazem o programa acontecer todos os dias.
            </p>
            <p className="text-sm text-marrom-light/60 mt-4 italic">
              Aguardando material do NAC
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
