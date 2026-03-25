"use client";

import { useState } from "react";
import { NAC } from "@/lib/data";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const parts = [];
    if (name) parts.push(`Olá! Meu nome é ${name}.`);
    if (phone) parts.push(`Meu telefone: ${phone}.`);
    if (message) parts.push(message);
    if (parts.length === 0) parts.push("Olá! Gostaria de saber mais sobre o Programa Aquarela 60+.");

    const text = encodeURIComponent(parts.join("\n"));
    window.open(`https://wa.me/${NAC.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="bg-gradient-to-br from-verde/5 to-amarelo/5 rounded-3xl p-8 border border-verde/10">
      <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] mb-4">
        ✍️ Formulário de Contato
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-marrom-light mb-1">
            Seu nome
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Maria da Silva"
            className="w-full px-4 py-3 rounded-xl border border-marrom/10 bg-white text-lg focus:outline-none focus:border-verde focus:ring-2 focus:ring-verde/20"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-marrom-light mb-1">
            Telefone ou WhatsApp
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(11) 99999-9999"
            className="w-full px-4 py-3 rounded-xl border border-marrom/10 bg-white text-lg focus:outline-none focus:border-verde focus:ring-2 focus:ring-verde/20"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-marrom-light mb-1">
            Sua mensagem
          </label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Gostaria de saber mais sobre as oficinas..."
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-marrom/10 bg-white text-lg focus:outline-none focus:border-verde focus:ring-2 focus:ring-verde/20 resize-none"
          />
        </div>
        <button
          type="submit"
          className="bg-verde hover:bg-verde-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl w-full min-h-[52px]"
        >
          Enviar pelo WhatsApp
        </button>
        <p className="text-sm text-marrom-light/60 text-center italic">
          Ao clicar, você será redirecionado para o WhatsApp do NAC
        </p>
      </form>
    </div>
  );
}
