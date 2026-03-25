import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notícia",
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/noticias"
          className="text-laranja hover:text-laranja-dark transition-colors font-medium mb-8 inline-block"
        >
          ← Voltar para Notícias
        </Link>

        <div className="bg-gradient-to-br from-laranja/5 to-amarelo/5 rounded-3xl p-12 border border-marrom/5 text-center">
          <span className="text-6xl block mb-6">📄</span>
          <h1 className="text-3xl font-bold font-[family-name:var(--font-display)] mb-4">
            Post: {slug}
          </h1>
          <p className="text-lg text-marrom-light mb-6">
            Esta página será gerada automaticamente a partir dos arquivos MDX
            quando o blog estiver configurado.
          </p>
          <p className="text-sm text-marrom-light/60 italic">
            Em produção, o conteúdo virá de{" "}
            <code className="bg-marrom/5 px-2 py-1 rounded">
              /src/content/{slug}.mdx
            </code>
          </p>
        </div>
      </div>
    </section>
  );
}
