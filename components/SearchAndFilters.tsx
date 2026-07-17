"use client";

import { Search, X } from "lucide-react";
import { DIETARY_FILTERS, DietaryFilter } from "@/lib/menu-data";

interface Props {
  search: string;
  onSearch: (v: string) => void;
  activeFilters: DietaryFilter[];
  onToggleFilter: (f: DietaryFilter) => void;
}

export default function SearchAndFilters({
  search,
  onSearch,
  activeFilters,
  onToggleFilter,
}: Props) {
  return (
    <div className="mx-auto max-w-3xl px-4">
      <div className="relative">
        <Search
          size={18}
          strokeWidth={1.8}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-forest/40"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Buscar prato pelo nome..."
          className="w-full rounded-full border border-forest/15 bg-white py-3 pl-11 pr-11 text-sm font-light text-forest shadow-sm outline-none transition-all placeholder:text-forest/35 focus:border-gold focus:ring-2 focus:ring-gold/25"
        />
        {search && (
          <button
            onClick={() => onSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-forest/40 hover:text-forest"
            aria-label="Limpar busca"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {DIETARY_FILTERS.map((f) => {
          const active = activeFilters.includes(f.id);
          return (
            <button
              key={f.id}
              onClick={() => onToggleFilter(f.id)}
              className={`rounded-full border px-4 py-1.5 text-xs font-light tracking-wide transition-all ${
                active
                  ? "border-gold bg-forest text-gold shadow-sm"
                  : "border-forest/15 bg-white text-forest/70 hover:border-gold/60 hover:text-forest"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
