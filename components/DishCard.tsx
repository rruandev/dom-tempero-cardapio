"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, UtensilsCrossed } from "lucide-react";
import { Dish, DishTag, formatPrice } from "@/lib/menu-data";
import { useCart } from "@/lib/cart-context";

const TAG_STYLES: Record<DishTag, string> = {
  "Mais vendido": "bg-gold text-forest",
  Novo: "bg-cream text-forest",
  Promoção: "bg-red-800/90 text-cream",
  "Chef recomenda": "bg-forest text-gold border border-gold/50",
};

export default function DishCard({ dish }: { dish: Dish }) {
  const { addItem, openCart } = useCart();
  const [imgError, setImgError] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(dish);
    setAdded(true);
    setTimeout(() => setAdded(false), 900);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md shadow-forest/5 ring-1 ring-forest/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-forest/10"
    >
      <div className="relative h-52 w-full overflow-hidden bg-forest/5">
        {imgError ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-forest/90 text-gold">
            <UtensilsCrossed size={36} strokeWidth={1.2} />
            <span className="font-display text-sm tracking-wider">
              Dom Tempero
            </span>
          </div>
        ) : (
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        )}
        {dish.tags.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {dish.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider shadow-sm ${TAG_STYLES[tag]}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg leading-snug text-forest">
          {dish.name}
        </h3>
        <p className="mt-1.5 flex-1 text-[13px] font-light leading-relaxed text-forest/65">
          {dish.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="font-display text-xl font-semibold text-gold-dark">
            {formatPrice(dish.price)}
          </span>
          <motion.button
            onClick={handleAdd}
            whileTap={{ scale: 0.94 }}
            className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider shadow-sm transition-colors ${
              added
                ? "bg-forest text-gold"
                : "bg-gold text-forest hover:bg-gold-light"
            }`}
          >
            <Plus size={15} strokeWidth={2.2} />
            {added ? "Adicionado" : "Adicionar"}
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
