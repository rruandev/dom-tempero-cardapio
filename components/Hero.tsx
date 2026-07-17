"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToMenu = () => {
    document
      .getElementById("cardapio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="texture-forest relative flex min-h-[92vh] flex-col items-center justify-center px-6 pt-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <Image
          src="/logo.svg"
          alt="Logo Dom Tempero"
          width={170}
          height={170}
          priority
          className="drop-shadow-[0_0_40px_rgba(201,164,91,0.25)]"
        />

        <h1 className="font-display mt-8 text-5xl tracking-wide text-cream sm:text-6xl">
          Dom <span className="text-gold">Tempero</span>
        </h1>

        <div className="gold-divider mt-5 w-56">
          <span className="text-gold">✦</span>
        </div>

        <p className="mt-5 max-w-md text-base font-light italic tracking-wide text-cream/85 sm:text-lg">
          O almoço de respeito de Sobradinho
        </p>

        <motion.button
          onClick={scrollToMenu}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 rounded-full bg-gold px-10 py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-forest shadow-lg shadow-gold/20 transition-colors hover:bg-gold-light"
        >
          Ver Cardápio
        </motion.button>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 text-gold/60"
      >
        <ChevronDown size={26} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
