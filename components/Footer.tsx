"use client";

import Image from "next/image";
import {
  Clock,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { RESTAURANT } from "@/lib/menu-data";

export default function Footer() {
  return (
    <footer className="texture-forest mt-20 text-cream/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Dom Tempero" width={52} height={52} />
            <span className="font-display text-xl text-cream">
              Dom <span className="text-gold">Tempero</span>
            </span>
          </div>
          <p className="text-sm font-light italic text-cream/60">
            {RESTAURANT.slogan}
          </p>
          <p className="text-xs font-light text-cream/50">
            {RESTAURANT.services}
          </p>
          <p className="text-xs font-light text-cream/50">
            {RESTAURANT.payment}
          </p>
        </div>

        <div>
          <h3 className="font-display mb-4 flex items-center gap-2 text-gold">
            <Clock size={16} /> Horário
          </h3>
          <ul className="space-y-2 text-sm font-light">
            {RESTAURANT.hours.map((h) => (
              <li key={h.days}>
                <span className="text-cream/60">{h.days}:</span> {h.time}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display mb-4 flex items-center gap-2 text-gold">
            <MapPin size={16} /> Endereço
          </h3>
          <p className="text-sm font-light leading-relaxed">
            {RESTAURANT.address}
          </p>
          <a
            href={RESTAURANT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm text-gold underline-offset-4 hover:underline"
          >
            Ver no Google Maps
          </a>
        </div>

        <div>
          <h3 className="font-display mb-4 flex items-center gap-2 text-gold">
            <Phone size={16} /> Contato
          </h3>
          <ul className="space-y-2.5 text-sm font-light">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-gold/70" />
              {RESTAURANT.phone}
            </li>
            <li>
              <a
                href={`https://wa.me/${RESTAURANT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-gold"
              >
                <MessageCircle size={14} className="text-gold/70" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={RESTAURANT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Instagram size={14} className="text-gold/70" />
                {RESTAURANT.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-1.5 border-t border-gold/15 py-5 text-center text-xs font-light tracking-wide text-cream/45">
        <p>
          © {new Date().getFullYear()} Dom Tempero — Todos os direitos
          reservados.
        </p>
        <p className="text-[11px] text-cream/35">{RESTAURANT.disclaimer}</p>
      </div>
    </footer>
  );
}
