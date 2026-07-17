"use client";

import { useMemo, useState } from "react";
import { SearchX } from "lucide-react";
import {
  CATEGORIES,
  DISHES,
  DietaryFilter,
} from "@/lib/menu-data";
import DishCard from "./DishCard";
import SearchAndFilters from "./SearchAndFilters";

const normalize = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export default function MenuSections() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<DietaryFilter[]>([]);

  const toggleFilter = (f: DietaryFilter) =>
    setFilters((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );

  const visibleDishes = useMemo(() => {
    const q = normalize(search.trim());
    return DISHES.filter((dish) => {
      if (q && !normalize(dish.name).includes(q)) return false;
      if (filters.length > 0) {
        const matchesPromo =
          filters.includes("promocoes") &&
          (dish.category === "promocoes" || dish.tags.includes("Promoção"));
        const matchesDietary = filters.some(
          (f) => f !== "promocoes" && dish.dietary.includes(f)
        );
        if (!matchesPromo && !matchesDietary) return false;
      }
      return true;
    });
  }, [search, filters]);

  const nothingFound = visibleDishes.length === 0;

  return (
    <div id="cardapio" className="scroll-mt-24 pt-16">
      <div className="mb-4 text-center">
        <h2 className="font-display text-3xl text-forest sm:text-4xl">
          Nosso <span className="text-gold-dark">Cardápio</span>
        </h2>
        <div className="gold-divider mx-auto mt-4 w-40">
          <span className="text-gold text-sm">✦</span>
        </div>
      </div>

      <div className="sticky top-[58px] z-40 bg-cream/95 py-4 backdrop-blur-sm">
        <SearchAndFilters
          search={search}
          onSearch={setSearch}
          activeFilters={filters}
          onToggleFilter={toggleFilter}
        />
      </div>

      {nothingFound ? (
        <div className="mx-auto flex max-w-md flex-col items-center gap-3 py-20 text-center text-forest/45">
          <SearchX size={44} strokeWidth={1.2} />
          <p className="font-light">
            Nenhum prato encontrado. Tente outro nome ou remova os filtros.
          </p>
        </div>
      ) : (
        CATEGORIES.map((cat) => {
          const dishes = visibleDishes.filter((d) => d.category === cat.id);
          if (dishes.length === 0) return null;
          return (
            <section
              key={cat.id}
              id={cat.id}
              className="mx-auto max-w-6xl scroll-mt-36 px-4 pt-14"
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
        })
      )}
    </div>
  );
}
