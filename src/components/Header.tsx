"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/oficinas", label: "Oficinas" },
  { href: "/noticias", label: "Notícias" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-creme/95 backdrop-blur-md border-b border-marrom/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-laranja via-amarelo to-verde flex items-center justify-center text-white font-bold text-lg font-[family-name:var(--font-display)]">
            60+
          </div>
          <div>
            <span className="text-xl font-bold font-[family-name:var(--font-display)] text-marrom group-hover:text-laranja transition-colors">
              {SITE.name}
            </span>
            <p className="text-xs text-marrom-light hidden sm:block">
              {SITE.tagline}
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-marrom-light hover:text-laranja transition-colors font-medium text-lg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-marrom"
          aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={isOpen}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden bg-creme border-t border-marrom/10 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-lg text-marrom-light hover:text-laranja transition-colors font-medium border-b border-marrom/5 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
