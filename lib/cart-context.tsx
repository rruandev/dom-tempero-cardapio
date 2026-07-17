"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Dish, RESTAURANT, formatPrice } from "./menu-data";

export interface CartItem {
  dish: Dish;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (dish: Dish) => void;
  removeItem: (dishId: string) => void;
  increment: (dishId: string) => void;
  decrement: (dishId: string) => void;
  totalItems: number;
  totalPrice: number;
  customerName: string;
  setCustomerName: (v: string) => void;
  tableOrPickup: string;
  setTableOrPickup: (v: string) => void;
  notes: string;
  setNotes: (v: string) => void;
  whatsappUrl: string;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [tableOrPickup, setTableOrPickup] = useState("");
  const [notes, setNotes] = useState("");

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((dish: Dish) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.dish.id === dish.id);
      if (existing) {
        return prev.map((i) =>
          i.dish.id === dish.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { dish, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((dishId: string) => {
    setItems((prev) => prev.filter((i) => i.dish.id !== dishId));
  }, []);

  const increment = useCallback((dishId: string) => {
    setItems((prev) =>
      prev.map((i) =>
        i.dish.id === dishId ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  }, []);

  const decrement = useCallback((dishId: string) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.dish.id === dishId ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const totalItems = useMemo(
    () => items.reduce((acc, i) => acc + i.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () => items.reduce((acc, i) => acc + i.quantity * i.dish.price, 0),
    [items]
  );

  const whatsappUrl = useMemo(() => {
    const lines: string[] = [
      `*Novo pedido — ${RESTAURANT.name}*`,
      "",
      ...items.map(
        (i) =>
          `▪ ${i.quantity}x ${i.dish.name} — ${formatPrice(
            i.quantity * i.dish.price
          )}`
      ),
      "",
      `*Total: ${formatPrice(totalPrice)}*`,
    ];
    if (customerName.trim()) lines.push("", `Nome: ${customerName.trim()}`);
    if (tableOrPickup.trim())
      lines.push(`Mesa/Retirada: ${tableOrPickup.trim()}`);
    if (notes.trim()) lines.push(`Observações: ${notes.trim()}`);
    return `https://wa.me/${RESTAURANT.whatsapp}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
  }, [items, totalPrice, customerName, tableOrPickup, notes]);

  const value: CartContextValue = {
    items,
    isOpen,
    openCart,
    closeCart,
    addItem,
    removeItem,
    increment,
    decrement,
    totalItems,
    totalPrice,
    customerName,
    setCustomerName,
    tableOrPickup,
    setTableOrPickup,
    notes,
    setNotes,
    whatsappUrl,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro de CartProvider");
  return ctx;
}
