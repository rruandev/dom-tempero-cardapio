"use client";

import { CATEGORIES, DISHES } from "@/lib/menu-data";
import DishCard from "./DishCard";

export default function MenuSections() {
  return (
    <div id="cardapio" className="scroll-mt-24 pt-16">
      <div className="mb-4 text-center">
        <h2 className="font-display text-3xl text-forest sm:text-4xl">
          Faça seu <span className="text-gold-dark">Pedido</span>
        </h2>
        <div className="gold-divider mx-auto mt-4 w-40">
          <span className="text-sm text-gold">✦</span>
        </div>
      </div>

      {CATEGORIES.map((cat) => {
        const dishes = DISHES.filter((d) => d.category === cat.id);
        if (dishes.length === 0) return null;
        return (
          <section
            key={cat.id}
            id={cat.id}
            className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-14"
          >
            <div className="mb-7 flex items-center gap-4">
              <h2 className="font-display text-2xl text-forest sm:text-[28px]">
                {cat.label}
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {dishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
