"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Beef, Soup, Salad, Star } from "lucide-react";
import { WEEKLY_MENU } from "@/lib/menu-data";

function todayIndex() {
  // Domingo (0) e horários fora da semana caem em Segunda
  const wd = new Date().getDay();
  const idx = WEEKLY_MENU.findIndex((d) => d.weekday === wd);
  return idx === -1 ? 0 : idx;
}

export default function WeeklyMenu() {
  const [selected, setSelected] = useState(todayIndex);
  const day = WEEKLY_MENU[selected];
  const isToday = day.weekday === new Date().getDay();

  const groups = [
    { icon: Beef, title: "Carnes do dia", items: day.carnes },
    { icon: Soup, title: "Acompanhamentos", items: day.acompanhamentos },
    { icon: Salad, title: "Guarnições", items: day.guarnicoes },
  ].filter((g) => g.items.length > 0);

  return (
    <section id="semana" className="texture-forest scroll-mt-16 px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-display text-3xl text-cream sm:text-4xl">
            Cardápio da <span className="text-gold">Semana</span>
          </h2>
          <div className="gold-divider mx-auto mt-4 w-40">
            <span className="text-sm text-gold">✦</span>
          </div>
          <p className="mt-4 text-sm font-light text-cream/60">
            Todo dia uma combinação diferente, sempre com o tempero da casa.
          </p>
        </div>

        <div className="no-scrollbar mt-8 flex justify-start gap-2 overflow-x-auto pb-1 sm:justify-center">
          {WEEKLY_MENU.map((d, i) => (
            <button
              key={d.day}
              onClick={() => setSelected(i)}
              className={`relative shrink-0 rounded-full px-5 py-2 text-sm font-light tracking-wide transition-all ${
                i === selected
                  ? "bg-gold font-medium text-forest shadow-md shadow-gold/25"
                  : "border border-gold/30 text-cream/75 hover:border-gold/70 hover:text-gold"
              }`}
            >
              {d.day}
              {d.weekday === new Date().getDay() && i !== selected && (
                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-gold" />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={day.day}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="mt-8 rounded-2xl border border-gold/25 bg-forest-deep/40 p-6 shadow-xl shadow-forest-deep/40 sm:p-8"
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-2xl text-gold">{day.day}</h3>
              <div className="flex items-center gap-2">
                {day.destaque && (
                  <span className="flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-forest">
                    <Star size={12} strokeWidth={2.5} /> {day.destaque}
                  </span>
                )}
                {isToday && (
                  <span className="rounded-full border border-gold/50 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-gold">
                    Hoje
                  </span>
                )}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {groups.map(({ icon: Icon, title, items }) => (
                <div key={title}>
                  <h4 className="mb-3 flex items-center gap-2 text-[13px] font-medium uppercase tracking-wider text-gold/90">
                    <Icon size={15} strokeWidth={1.8} /> {title}
                  </h4>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm font-light text-cream/85"
                      >
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
