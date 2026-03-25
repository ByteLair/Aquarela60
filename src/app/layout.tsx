import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aquarela 60+ | Programa de Extensão Universitária",
    template: "%s | Aquarela 60+",
  },
  description:
    "Programa Aquarela 60+ da UMESP — arte, educação e cultura para um envelhecimento ativo. Oficinas de coral, teatro, dança, idiomas e muito mais para pessoas 60+.",
  keywords: [
    "programa 60+",
    "terceira idade",
    "envelhecimento ativo",
    "oficinas para idosos",
    "UMESP",
    "São Bernardo do Campo",
    "extensão universitária",
  ],
  openGraph: {
    title: "Aquarela 60+ | Programa de Extensão Universitária",
    description:
      "Arte, educação e cultura para um novo ciclo de vida. Solidariedade entre as gerações.",
    url: "https://aquarela60.com",
    siteName: "Aquarela 60+",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
