import type { Metadata } from "next";
import { OFICINAS, NAC } from "@/lib/data";

export const metadata: Metadata = {
  title: "Oficinas",
  description:
    "Conheça todas as oficinas gratuitas do Programa Aquarela 60+ — coral, teatro, dança, idiomas, artesanato, ginástica e muito mais.",
};

const SCHEDULE = [
  { oficina: "Coral", dia: "Segunda", horario: "14h–16h", local: "Prédio Sigma, sala 203" },
  { oficina: "Teatro", dia: "Terça", horario: "14h–16h", local: "Prédio Sigma, sala 203" },
  { oficina: "Dança", dia: "Quarta", horario: "14h–16h", local: "Prédio Sigma, sala 203" },
  { oficina: "Crochê e Tricô", dia: "Segunda", horario: "14h–16h", local: "Prédio Sigma, sala 203" },
  { oficina: "Artesanato", dia: "Quarta", horario: "14h–16h", local: "Prédio Sigma, sala 203" },
  { oficina: "Oficina de Ideias", dia: "Sexta", horario: "14h–16h", local: "Prédio Sigma, sala 203" },
  { oficina: "Inglês", dia: "Terça", horario: "14h–16h", local: "Prédio Sigma, sala 203" },
  { oficina: "Italiano", dia: "Quinta", horario: "14h–16h", local: "Prédio Sigma, sala 203" },
  { oficina: "Francês", dia: "Quinta", horario: "14h–16h", local: "Prédio Sigma, sala 203" },
  { oficina: "Libras", dia: "Sexta", horario: "14h–16h", local: "Prédio Sigma, sala 203" },
  { oficina: "Violão", dia: "Quarta", horario: "14h–16h", local: "Prédio Sigma, sala 203" },
  { oficina: "Clube do Livro", dia: "Sexta", horario: "14h–16h", local: "Prédio Sigma, sala 203" },
  { oficina: "Ginástica", dia: "Segunda e Quarta", horario: "9h–10h", local: "Ginásio" },
  { oficina: "Hidroginástica", dia: "Terça e Quinta", horario: "9h–10h", local: "Piscina (Academia-Escola)" },
];

export default function OficinasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="watercolor-blob w-96 h-96 bg-laranja -right-20 top-0" />
        <div className="watercolor-blob w-80 h-80 bg-verde -left-20 bottom-0" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-verde font-bold text-sm uppercase tracking-widest mb-3">
              2º Semestre 2025
            </p>
            <h1 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-display)] mb-6">
              Nossas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laranja to-amarelo">
                Oficinas
              </span>
            </h1>
            <p className="text-xl text-marrom-light leading-relaxed">
              Mais de 15 oficinas gratuitas organizadas em 4 categorias.
              Escolha a sua e venha fazer parte!
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {Object.entries(OFICINAS).map(([category, data]) => {
            const colorAccent: Record<string, { border: string; bg: string; text: string }> = {
              laranja: { border: "border-laranja", bg: "bg-laranja/5", text: "text-laranja" },
              amarelo: { border: "border-amarelo", bg: "bg-amarelo/5", text: "text-amarelo-dark" },
              verde: { border: "border-verde", bg: "bg-verde/5", text: "text-verde" },
            };
            const c = colorAccent[data.color];

            return (
              <div key={category}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl">{data.emoji}</span>
                  <div>
                    <h2 className={`text-3xl font-bold font-[family-name:var(--font-display)] ${c.text}`}>
                      {category}
                    </h2>
                    <p className="text-marrom-light text-lg mt-1">
                      {data.description}
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.items.map((item) => {
                    const sched = SCHEDULE.find((s) => s.oficina === item || s.oficina.includes(item));
                    return (
                      <div
                        key={item}
                        className={`card-hover ${c.bg} rounded-2xl p-6 border-l-4 ${c.border}`}
                      >
                        <h3 className="text-xl font-bold font-[family-name:var(--font-display)] mb-3">
                          {item}
                        </h3>
                        {sched && (
                          <div className="space-y-1 text-marrom-light">
                            <p className="flex items-center gap-2">
                              <span>📅</span> {sched.dia}
                            </p>
                            <p className="flex items-center gap-2">
                              <span>🕐</span> {sched.horario}
                            </p>
                            <p className="flex items-center gap-2">
                              <span>📍</span> {sched.local}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Full schedule table */}
      <section className="py-20 bg-marrom">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-[family-name:var(--font-display)] mb-3">
              <span className="text-gradient-laranja">Grade Completa</span>
            </h2>
            <p className="text-creme/60 italic text-sm">
              * Horários de exemplo — confirme com o NAC antes de se inscrever
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-white/10">
                  <th className="text-left p-4 text-amarelo font-bold text-lg">Oficina</th>
                  <th className="text-left p-4 text-amarelo font-bold text-lg">Dia</th>
                  <th className="text-left p-4 text-amarelo font-bold text-lg">Horário</th>
                  <th className="text-left p-4 text-amarelo font-bold text-lg hidden md:table-cell">Local</th>
                </tr>
              </thead>
              <tbody>
                {SCHEDULE.map((item, idx) => (
                  <tr
                    key={item.oficina}
                    className={`border-t border-white/5 ${idx % 2 === 0 ? "" : "bg-white/3"}`}
                  >
                    <td className="p-4 text-white font-medium text-lg">{item.oficina}</td>
                    <td className="p-4 text-creme/80">{item.dia}</td>
                    <td className="p-4 text-creme/80">{item.horario}</td>
                    <td className="p-4 text-creme/60 hidden md:table-cell">{item.local}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold font-[family-name:var(--font-display)] mb-6">
            Quer se inscrever?
          </h2>
          <p className="text-lg text-marrom-light mb-8">
            As inscrições são feitas diretamente pelo NAC. Entre em contato pelo
            WhatsApp ou telefone e garanta sua vaga!
          </p>
          <a
            href={NAC.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-verde hover:bg-verde-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            💬 Falar com o NAC pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
