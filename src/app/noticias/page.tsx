import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notícias",
  description: "Acompanhe as novidades e eventos do Programa Aquarela 60+.",
};

// Placeholder blog posts — in production these would come from MDX files
const POSTS = [
  {
    slug: "inscricoes-2s-2025",
    title: "Inscrições abertas para o 2º semestre de 2025",
    excerpt:
      "Novas oficinas de Italiano, Francês e Violão entram na grade. Confira como se inscrever gratuitamente.",
    date: "2025-07-15",
    category: "Inscrições",
    emoji: "📝",
  },
  {
    slug: "festival-primavera-2024",
    title: "Festival da Primavera 2024 — Um show de emoções",
    excerpt:
      "Alunos das oficinas de Coral, Teatro e Dança apresentaram o resultado de um semestre de dedicação e arte.",
    date: "2024-11-20",
    category: "Eventos",
    emoji: "🌸",
  },
  {
    slug: "novo-site-aquarela",
    title: "Aquarela 60+ ganha site próprio",
    excerpt:
      "Desenvolvido por aluno da graduação em parceria com o NAC, o novo site aproxima o programa da comunidade.",
    date: "2025-03-10",
    category: "Novidades",
    emoji: "🌐",
  },
  {
    slug: "oficina-libras-destaque",
    title: "Oficina de Libras é destaque na universidade",
    excerpt:
      "A inclusão ganha força com a oficina de Língua Brasileira de Sinais, que conecta gerações e culturas.",
    date: "2025-05-08",
    category: "Destaque",
    emoji: "🤟",
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NoticiasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="watercolor-blob w-96 h-96 bg-amarelo -right-20 top-0" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-laranja font-bold text-sm uppercase tracking-widest mb-3">
              Blog
            </p>
            <h1 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-display)] mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-laranja to-amarelo">
                Notícias
              </span>{" "}
              e Novidades
            </h1>
            <p className="text-xl text-marrom-light leading-relaxed">
              Fique por dentro dos eventos, inscrições e histórias do Aquarela 60+.
            </p>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {POSTS.map((post, idx) => (
              <Link
                key={post.slug}
                href={`/noticias/${post.slug}`}
                className={`card-hover bg-white rounded-3xl overflow-hidden border border-marrom/5 group ${
                  idx === 0 ? "md:col-span-2" : ""
                }`}
              >
                {/* Color bar */}
                <div className="h-2 bg-gradient-to-r from-laranja via-amarelo to-verde" />

                <div className={`p-8 ${idx === 0 ? "md:flex md:gap-8 md:items-center" : ""}`}>
                  <div className={`${idx === 0 ? "md:w-24" : ""} text-center mb-4 md:mb-0`}>
                    <span className={`${idx === 0 ? "text-7xl" : "text-5xl"} block`}>
                      {post.emoji}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-laranja/10 text-laranja px-3 py-1 rounded-full text-sm font-bold">
                        {post.category}
                      </span>
                      <span className="text-marrom-light/60 text-sm">
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] group-hover:text-laranja transition-colors mb-3">
                      {post.title}
                    </h2>
                    <p className="text-marrom-light text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="inline-block mt-4 text-laranja font-bold group-hover:translate-x-2 transition-transform">
                      Ler mais →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Placeholder notice */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-amarelo/5 to-verde/5 rounded-3xl p-12 border border-marrom/5 max-w-2xl mx-auto">
              <span className="text-5xl block mb-4">📰</span>
              <p className="text-lg text-marrom-light">
                Em breve, as notícias serão alimentadas por posts em MDX
                diretamente no repositório — sem necessidade de CMS.
              </p>
              <p className="text-sm text-marrom-light/60 mt-3 italic">
                Posts acima são de exemplo para demonstração
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
