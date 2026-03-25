import type { Metadata } from "next";
import { NAC } from "@/lib/data";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o Programa Aquarela 60+ por telefone, WhatsApp ou e-mail.",
};

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="watercolor-blob w-96 h-96 bg-verde -right-20 top-0" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-verde font-bold text-sm uppercase tracking-widest mb-3">
              Fale Conosco
            </p>
            <h1 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-display)] mb-6">
              Entre em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-verde to-verde-dark">
                Contato
              </span>
            </h1>
            <p className="text-xl text-marrom-light leading-relaxed">
              Quer saber mais sobre o programa, se inscrever ou tirar dúvidas?
              Estamos aqui para ajudar!
            </p>
          </div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact cards */}
            <div className="lg:col-span-2 space-y-6">
              {/* WhatsApp - highlighted */}
              <a
                href={NAC.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-verde text-white rounded-3xl p-8 card-hover shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <div>
                    <p className="text-white/70 text-sm font-medium">
                      WhatsApp — Forma mais rápida!
                    </p>
                    <p className="text-2xl font-bold font-[family-name:var(--font-display)]">
                      {NAC.whatsappDisplay}
                    </p>
                  </div>
                </div>
                <p className="text-white/80">
                  Clique para iniciar uma conversa. Respondemos em horário comercial.
                </p>
              </a>

              {/* Phone */}
              <div className="bg-white rounded-2xl p-6 border border-marrom/5 flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-laranja/10 flex items-center justify-center text-2xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <p className="text-sm text-marrom-light">Telefone</p>
                  <p className="text-xl font-bold font-[family-name:var(--font-display)]">
                    {NAC.phone}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-6 border border-marrom/5 flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-amarelo/10 flex items-center justify-center text-2xl flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <p className="text-sm text-marrom-light">E-mail</p>
                  <a
                    href={`mailto:${NAC.email}`}
                    className="text-lg font-bold font-[family-name:var(--font-display)] hover:text-laranja transition-colors"
                  >
                    {NAC.email}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <a
                href={NAC.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl p-6 border border-marrom/5 card-hover"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl text-white flex-shrink-0">
                    📸
                  </div>
                  <div>
                    <p className="text-sm text-marrom-light">Instagram</p>
                    <p className="text-lg font-bold font-[family-name:var(--font-display)]">
                      {NAC.instagram}
                    </p>
                  </div>
                </div>
              </a>

              {/* Hours */}
              <div className="bg-gradient-to-br from-laranja/5 to-amarelo/5 rounded-2xl p-6 border border-laranja/10">
                <p className="text-sm text-marrom-light font-medium mb-1">
                  🕐 Horário de Atendimento
                </p>
                <p className="text-xl font-bold font-[family-name:var(--font-display)]">
                  {NAC.hours}
                </p>
              </div>
            </div>

            {/* Map and address */}
            <div className="lg:col-span-3 space-y-6">
              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-marrom/10 h-[400px]">
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

              {/* Address */}
              <div className="bg-white rounded-2xl p-8 border border-marrom/5">
                <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-4">
                  📍 Como Chegar
                </h3>
                <div className="text-lg text-marrom-light leading-relaxed space-y-2">
                  <p>
                    <strong>{NAC.institution}</strong>
                  </p>
                  <p>{NAC.address}</p>
                  <p>{NAC.city}</p>
                </div>
                <div className="section-divider my-6" />
                <p className="text-marrom-light">
                  O campus fica próximo a igreja do Rudge Ramos e conta com
                  estacionamento. Ao chegar, dirija-se ao Prédio Sigma, sala 203.
                </p>
              </div>

              {/* Contact form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
