import Link from "next/link";
import { SITE, NAC } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-marrom text-creme/90">
      {/* Divider */}
      <div className="h-1.5 bg-gradient-to-r from-laranja via-amarelo to-verde" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-laranja via-amarelo to-verde flex items-center justify-center text-white font-bold text-sm">
                60+
              </div>
              <span className="text-xl font-bold font-[family-name:var(--font-display)]">
                {SITE.name}
              </span>
            </div>
            <p className="text-creme/70 leading-relaxed">
              {SITE.description}
            </p>
            <p className="text-creme/50 mt-4 text-sm">
              Uma iniciativa do {NAC.name} — {NAC.institution}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold font-[family-name:var(--font-display)] mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laranja to-amarelo">Navegação</span>
            </h3>
            <div className="space-y-3">
              {[
                { href: "/", label: "Início" },
                { href: "/sobre", label: "Sobre o Programa" },
                { href: "/oficinas", label: "Oficinas" },
                { href: "/noticias", label: "Notícias" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-creme/70 hover:text-amarelo transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold font-[family-name:var(--font-display)] mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laranja to-amarelo">Contato</span>
            </h3>
            <div className="space-y-3 text-creme/70">
              <p>
                📍 {NAC.address}
                <br />
                {NAC.city}
              </p>
              <p>📞 {NAC.phone}</p>
              <p>
                💬{" "}
                <a
                  href={NAC.whatsappLink}
                  className="hover:text-verde transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: {NAC.whatsappDisplay}
                </a>
              </p>
              <p>
                ✉️{" "}
                <a
                  href={`mailto:${NAC.email}`}
                  className="hover:text-verde transition-colors"
                >
                  {NAC.email}
                </a>
              </p>
              <p>
                📸{" "}
                <a
                  href={NAC.instagramUrl}
                  className="hover:text-verde transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {NAC.instagram}
                </a>
              </p>
              <p className="text-sm text-creme/50">🕐 {NAC.hours}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-creme/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-creme/40">
          <p>
            © {currentYear} {SITE.name}. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://bytelair.pro"
              className="text-verde hover:text-verde-light transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              ByteLair
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
