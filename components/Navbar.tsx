"use client";

import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES } from "@/lib/menu-data";
import { useCart } from "@/lib/cart-context";

export default function Navbar() {
  const { totalItems, openCart } = useCart();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/20 bg-forest/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-2.5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex shrink-0 items-center gap-2.5"
          aria-label="Voltar ao topo"
        >
          <Image src="/logo.svg" alt="Dom Tempero" width={38} height={38} />
          <span className="font-display hidden text-lg tracking-wide text-cream sm:block">
            Dom <span className="text-gold">Tempero</span>
          </span>
        </button>

        <nav className="no-scrollbar flex flex-1 items-center gap-1 overflow-x-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollTo(cat.id)}
              className="whitespace-nowrap rounded-full px-3 py-1.5 text-[13px] font-light tracking-wide text-cream/80 transition-colors hover:bg-gold/10 hover:text-gold"
            >
              {cat.label}
            </button>
          ))}
        </nav>

        <button
          onClick={openCart}
          className="relative shrink-0 rounded-full border border-gold/40 p-2.5 text-gold transition-colors hover:bg-gold hover:text-forest"
          aria-label="Abrir carrinho"
        >
          <ShoppingBag size={19} strokeWidth={1.7} />
          <AnimatePresence>
            {totalItems > 0 && (
              <motion.span
                key="badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[11px] font-semibold text-forest"
              >
                {totalItems}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </header>
  );
}
