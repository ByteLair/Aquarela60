import Image from "next/image";
import { SITE, NAC, STATS, OFICINAS, ALEM_DA_AULA, DEPOIMENTOS, IMAGES } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${IMAGES.hero}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-marrom/85 via-marrom/60 to-marrom/30" />
        </div>

        {/* Watercolor blobs */}
        <div className="watercolor-blob w-96 h-96 bg-laranja -top-20 -left-20" />
        <div className="watercolor-blob w-80 h-80 bg-amarelo bottom-10 right-10" />
        <div className="watercolor-blob w-64 h-64 bg-verde top-1/2 left-1/3" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-amarelo font-medium text-lg mb-4 animate-fade-in-up opacity-0">
              Programa de Extensão Universitária — Desde 2012
            </p>
            <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-display)] text-white leading-tight mb-6 animate-fade-in-up opacity-0 animate-delay-100">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laranja to-amarelo">Aquarela</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laranja via-amarelo to-verde">
                60+
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-creme/90 mb-4 font-[family-name:var(--font-display)] italic animate-fade-in-up opacity-0 animate-delay-200">
              &ldquo;{SITE.tagline}&rdquo;
            </p>
            <p className="text-lg text-creme/75 mb-10 max-w-lg animate-fade-in-up opacity-0 animate-delay-300">
              Arte, educação e cultura para um novo ciclo de vida com significado
              e conexões. Venha fazer parte!
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up opacity-0 animate-delay-400">
              <a
                href={NAC.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-verde hover:bg-verde-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Fale Conosco
              </a>
              <a
                href="/oficinas"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-bold transition-all border border-white/20"
              >
                Conheça as Oficinas →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ STATS BAR ═══════════ */}
      <section className="bg-marrom py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-transparent bg-clip-text bg-gradient-to-r from-laranja to-amarelo">
                  {stat.value}
                </p>
                <p className="text-creme/70 mt-1 text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SOBRE ═══════════ */}
      <section id="sobre" className="py-24 relative overflow-hidden">
        <div className="watercolor-blob w-[500px] h-[500px] bg-verde -right-40 top-0" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-laranja font-bold text-sm uppercase tracking-widest mb-3">
                Quem Somos
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-6">
                Um programa feito{" "}
                <span className="text-laranja">com carinho</span> para você
              </h2>
              <p className="text-lg text-marrom-light mb-6 leading-relaxed">
                Desde abril de 2012, o Programa Aquarela 60+ é uma iniciativa do
                Núcleo de Arte e Cultura (NAC) da Universidade Metodista de São
                Paulo. Nosso propósito é promover{" "}
                <strong>Transformação Social</strong>,{" "}
                <strong>Inclusão</strong> e{" "}
                <strong>Envelhecimento Ativo</strong> dentro do espaço
                universitário.
              </p>
              <p className="text-lg text-marrom-light mb-8 leading-relaxed">
                Utilizamos a arte, a educação e a cultura como ferramentas para
                construir um novo ciclo de vida — cheio de significado, novas
                amizades e descobertas.
              </p>

              {/* Pillar cards */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { emoji: "🎨", title: "Arte", color: "bg-laranja/10 border-laranja/30" },
                  { emoji: "📖", title: "Educação", color: "bg-amarelo/10 border-amarelo/30" },
                  { emoji: "🌍", title: "Cultura", color: "bg-verde/10 border-verde/30" },
                ].map((pillar) => (
                  <div
                    key={pillar.title}
                    className={`${pillar.color} border rounded-2xl p-4 text-center`}
                  >
                    <span className="text-3xl">{pillar.emoji}</span>
                    <p className="font-bold mt-2">{pillar.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image side */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={IMAGES.about}
                  alt="Alunos do Aquarela 60+ em atividade"
                  width={800}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-marrom/5">
                <p className="text-3xl font-bold font-[family-name:var(--font-display)] text-laranja">
                  Desde 2012
                </p>
                <p className="text-marrom-light text-sm">
                  Transformando vidas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ OFICINAS ═══════════ */}
      <section id="oficinas" className="py-24 bg-gradient-to-br from-laranja/5 via-creme to-amarelo/5 relative">
        <div className="watercolor-blob w-96 h-96 bg-laranja left-0 top-1/2" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-verde font-bold text-sm uppercase tracking-widest mb-3">
              O que oferecemos
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
              Nossas <span className="text-laranja">Oficinas</span>
            </h2>
            <p className="text-lg text-marrom-light mt-4 max-w-2xl mx-auto">
              São mais de 15 oficinas em 4 categorias. Todas gratuitas, todas feitas
              para você.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(OFICINAS).map(([category, data]) => {
              const colorMap: Record<string, string> = {
                laranja: "border-laranja/30 hover:border-laranja",
                amarelo: "border-amarelo/30 hover:border-amarelo",
                verde: "border-verde/30 hover:border-verde",
              };
              const bgMap: Record<string, string> = {
                laranja: "from-laranja/5",
                amarelo: "from-amarelo/5",
                verde: "from-verde/5",
              };
              return (
                <div
                  key={category}
                  className={`card-hover bg-gradient-to-br ${bgMap[data.color]} to-white rounded-3xl p-8 border-2 ${colorMap[data.color]} transition-colors`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl">{data.emoji}</span>
                    <div>
                      <h3 className="text-2xl font-bold font-[family-name:var(--font-display)]">
                        {category}
                      </h3>
                      <p className="text-marrom-light mt-1">{data.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {data.items.map((item) => (
                      <span
                        key={item}
                        className="bg-white/80 border border-marrom/10 text-marrom px-4 py-2 rounded-full text-base font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a
              href="/oficinas"
              className="inline-flex items-center gap-2 bg-laranja hover:bg-laranja-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl"
            >
              Ver grade completa →
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════ ALÉM DA AULA ═══════════ */}
      <section id="alem" className="py-24 relative overflow-hidden">
        <div className="watercolor-blob w-96 h-96 bg-amarelo right-0 bottom-0" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amarelo-dark font-bold text-sm uppercase tracking-widest mb-3">
              Muito mais que sala de aula
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
              Além da <span className="text-verde">Aula</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ALEM_DA_AULA.map((item) => (
              <div
                key={item.title}
                className="card-hover bg-white rounded-3xl p-8 border border-marrom/5 text-center"
              >
                <span className="text-5xl block mb-4">{item.emoji}</span>
                <h3 className="text-xl font-bold font-[family-name:var(--font-display)] mb-3">
                  {item.title}
                </h3>
                <p className="text-marrom-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ DEPOIMENTOS ═══════════ */}
      <section id="depoimentos" className="py-24 bg-marrom relative overflow-hidden">
        <div className="watercolor-blob w-[600px] h-[600px] bg-laranja left-1/2 top-0 opacity-10" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-amarelo font-bold text-sm uppercase tracking-widest mb-3">
              Quem vive, sabe
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laranja to-amarelo">Histórias que</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laranja to-amarelo">
                inspiram
              </span>
            </h2>
            <p className="text-creme/60 mt-3 text-sm italic">
              * Depoimentos de exemplo — aguardando material do NAC
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {DEPOIMENTOS.map((dep) => (
              <div
                key={dep.name}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative"
              >
                {/* Quote mark */}
                <span className="text-6xl text-laranja/30 font-[family-name:var(--font-display)] absolute top-4 left-6">
                  &ldquo;
                </span>
                <p className="text-creme/90 text-lg leading-relaxed mt-8 mb-6">
                  {dep.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-laranja to-amarelo flex items-center justify-center text-white font-bold">
                    {dep.name[0]}
                  </div>
                  <div>
                    <p className="text-white font-bold">{dep.name}</p>
                    <p className="text-creme/50 text-sm">
                      {dep.age} anos • {dep.oficina}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CONTATO ═══════════ */}
      <section id="contato" className="py-24 relative overflow-hidden">
        <div className="watercolor-blob w-96 h-96 bg-verde -left-20 top-0" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-laranja font-bold text-sm uppercase tracking-widest mb-3">
              Venha nos conhecer
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
              Entre em <span className="text-verde">Contato</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info cards */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-white rounded-2xl p-6 border border-marrom/5 flex items-center gap-5 card-hover">
                <div className="w-16 h-16 rounded-full bg-laranja/10 flex items-center justify-center text-3xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <p className="text-sm text-marrom-light font-medium">
                    Telefone
                  </p>
                  <p className="text-2xl font-bold font-[family-name:var(--font-display)]">
                    {NAC.phone}
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={NAC.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-verde/5 rounded-2xl p-6 border-2 border-verde/20 flex items-center gap-5 card-hover block hover:border-verde"
              >
                <div className="w-16 h-16 rounded-full bg-verde/10 flex items-center justify-center text-3xl flex-shrink-0">
                  💬
                </div>
                <div>
                  <p className="text-sm text-marrom-light font-medium">
                    WhatsApp
                  </p>
                  <p className="text-2xl font-bold font-[family-name:var(--font-display)] text-verde">
                    {NAC.whatsappDisplay}
                  </p>
                  <p className="text-sm text-marrom-light">
                    Clique para conversar
                  </p>
                </div>
              </a>

              {/* Email */}
              <div className="bg-white rounded-2xl p-6 border border-marrom/5 flex items-center gap-5 card-hover">
                <div className="w-16 h-16 rounded-full bg-amarelo/10 flex items-center justify-center text-3xl flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <p className="text-sm text-marrom-light font-medium">
                    E-mail
                  </p>
                  <a
                    href={`mailto:${NAC.email}`}
                    className="text-xl font-bold font-[family-name:var(--font-display)] hover:text-laranja transition-colors"
                  >
                    {NAC.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-6 border border-marrom/5 flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-verde/10 flex items-center justify-center text-3xl flex-shrink-0">
                  🕐
                </div>
                <div>
                  <p className="text-sm text-marrom-light font-medium">
                    Atendimento
                  </p>
                  <p className="text-xl font-bold font-[family-name:var(--font-display)]">
                    {NAC.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Map / Address */}
            <div className="space-y-6">
              {/* Map embed */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-marrom/10 h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5!2d-46.5533!3d-23.6647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4300d0c0d1e7%3A0x6e45d9e79b8f8f0!2sUniversidade%20Metodista%20de%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização UMESP"
                />
              </div>

              {/* Address card */}
              <div className="bg-gradient-to-br from-laranja/5 to-amarelo/5 rounded-2xl p-8 border border-laranja/10">
                <h3 className="text-xl font-bold font-[family-name:var(--font-display)] mb-3">
                  📍 Como chegar
                </h3>
                <p className="text-lg text-marrom-light leading-relaxed">
                  {NAC.address}
                  <br />
                  <strong>{NAC.city}</strong>
                </p>
                <p className="text-sm text-marrom-light/70 mt-3">
                  {NAC.institution}
                </p>
              </div>

              {/* Instagram */}
              <a
                href={NAC.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-200/30 flex items-center gap-5 card-hover block"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl flex-shrink-0">
                  📸
                </div>
                <div>
                  <p className="text-sm text-marrom-light font-medium">
                    Instagram
                  </p>
                  <p className="text-xl font-bold font-[family-name:var(--font-display)]">
                    {NAC.instagram}
                  </p>
                  <p className="text-sm text-marrom-light">
                    Acompanhe nosso dia a dia
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
