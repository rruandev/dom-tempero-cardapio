"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/menu-data";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    increment,
    decrement,
    removeItem,
    totalPrice,
    customerName,
    setCustomerName,
    tableOrPickup,
    setTableOrPickup,
    notes,
    setNotes,
    whatsappUrl,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-forest-deep/60 backdrop-blur-sm"
          />
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.32, ease: "easeOut" }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-gold/25 bg-forest px-5 py-4">
              <h2 className="font-display flex items-center gap-2.5 text-lg text-cream">
                <ShoppingBag size={19} className="text-gold" />
                Seu Pedido
              </h2>
              <button
                onClick={closeCart}
                className="rounded-full p-1.5 text-cream/70 transition-colors hover:bg-cream/10 hover:text-cream"
                aria-label="Fechar carrinho"
              >
                <X size={20} />
              </button>
            </div>

            <div className="cart-scroll flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-forest/40">
                  <ShoppingBag size={44} strokeWidth={1} />
                  <p className="text-sm font-light">
                    Seu carrinho está vazio.
                  </p>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map(({ dish, quantity }) => (
                    <motion.li
                      key={dish.id}
                      layout
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-forest/5"
                    >
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-forest/10">
                        <Image
                          src={dish.image}
                          alt={dish.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <p className="font-display text-sm leading-tight text-forest">
                            {dish.name}
                          </p>
                          <button
                            onClick={() => removeItem(dish.id)}
                            className="text-forest/35 transition-colors hover:text-red-700"
                            aria-label={`Remover ${dish.name}`}
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-2">
                          <div className="flex items-center gap-2.5 rounded-full border border-forest/15 px-2 py-0.5">
                            <button
                              onClick={() => decrement(dish.id)}
                              className="text-forest/60 hover:text-forest"
                              aria-label="Diminuir quantidade"
                            >
                              <Minus size={13} />
                            </button>
                            <span className="min-w-4 text-center text-sm font-medium text-forest">
                              {quantity}
                            </span>
                            <button
                              onClick={() => increment(dish.id)}
                              className="text-forest/60 hover:text-forest"
                              aria-label="Aumentar quantidade"
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                          <span className="text-sm font-semibold text-gold-dark">
                            {formatPrice(dish.price * quantity)}
                          </span>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="space-y-3 border-t border-forest/10 bg-white px-5 py-4">
                <div className="grid grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Seu nome"
                    className="rounded-lg border border-forest/15 px-3 py-2 text-sm font-light outline-none transition-colors focus:border-gold"
                  />
                  <input
                    type="text"
                    value={tableOrPickup}
                    onChange={(e) => setTableOrPickup(e.target.value)}
                    placeholder="Mesa ou retirada"
                    className="rounded-lg border border-forest/15 px-3 py-2 text-sm font-light outline-none transition-colors focus:border-gold"
                  />
                </div>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Observações do pedido (opcional)"
                  rows={2}
                  className="w-full resize-none rounded-lg border border-forest/15 px-3 py-2 text-sm font-light outline-none transition-colors focus:border-gold"
                />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-light text-forest/70">
                    Total
                  </span>
                  <span className="font-display text-2xl font-semibold text-forest">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full bg-gold py-3.5 text-center text-sm font-semibold uppercase tracking-[0.14em] text-forest shadow-lg shadow-gold/25 transition-colors hover:bg-gold-light"
                >
                  Finalizar Pedido pelo WhatsApp
                </a>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
