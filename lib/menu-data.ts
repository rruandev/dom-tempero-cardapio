export type DishTag = "Mais vendido" | "Novo" | "Promoção" | "Chef recomenda";

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: DishTag[];
}

export interface Category {
  id: string;
  label: string;
}

export const RESTAURANT = {
  name: "Dom Tempero",
  slogan: "O almoço de respeito de Sobradinho",
  whatsapp: "5561991893159",
  phone: "(61) 99189-3159",
  address: "Quadra 8 Conj. A lote 17 — Sobradinho, Brasília - DF, 73005-081",
  instagram: "https://instagram.com/domtemperodf",
  instagramHandle: "@domtemperodf",
  mapsUrl:
    "https://maps.google.com/?q=Quadra+8+Conj.+A+lote+17+Sobradinho+Bras%C3%ADlia+DF+73005-081",
  hours: [{ days: "Segunda a Sábado", time: "10:50 às 16h" }],
};

export interface WeeklyDay {
  /** 1 = segunda ... 6 = sábado (Date.getDay) */
  weekday: number;
  day: string;
  carnes: string[];
  acompanhamentos: string[];
  guarnicoes: string[];
  destaque?: string;
}

export const WEEKLY_MENU: WeeklyDay[] = [
  {
    weekday: 1,
    day: "Segunda",
    carnes: ["Frango assado", "Carne moída com batata"],
    acompanhamentos: ["Arroz branco", "Feijão carioca", "Macarrão alho e óleo"],
    guarnicoes: ["Farofa", "Salada verde"],
  },
  {
    weekday: 2,
    day: "Terça",
    carnes: ["Bife acebolado", "Linguiça acebolada"],
    acompanhamentos: ["Arroz branco", "Feijão carioca", "Macarrão ao sugo"],
    guarnicoes: ["Purê de batata", "Vinagrete"],
  },
  {
    weekday: 3,
    day: "Quarta",
    carnes: ["Frango à milanesa", "Carne de panela"],
    acompanhamentos: ["Arroz branco", "Arroz à grega", "Feijão carioca"],
    guarnicoes: ["Mandioca cozida", "Salada de repolho"],
  },
  {
    weekday: 4,
    day: "Quinta",
    carnes: ["Costelinha de porco", "Frango grelhado"],
    acompanhamentos: ["Arroz branco", "Feijão tropeiro", "Macarrão na manteiga"],
    guarnicoes: ["Couve refogada", "Banana frita"],
  },
  {
    weekday: 5,
    day: "Sexta",
    carnes: ["Peixe frito (filé de tilápia)", "Strogonoff de frango"],
    acompanhamentos: ["Arroz branco", "Feijão carioca", "Batata palha"],
    guarnicoes: ["Pirão ou salada mista"],
  },
  {
    weekday: 6,
    day: "Sábado",
    carnes: ["Feijoada completa", "Frango assado"],
    acompanhamentos: ["Arroz branco", "Couve", "Laranja", "Torresmo", "Farofa"],
    guarnicoes: [],
    destaque: "O dia forte da casa",
  },
];

export const CATEGORIES: Category[] = [
  { id: "marmitas", label: "Marmitas" },
  { id: "alacarte", label: "À la Carte" },
];

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;

export const DISHES: Dish[] = [
  // ── Marmitas ─────────────────────────────────────────────────────
  {
    id: "marmita-m",
    name: "Marmita Média",
    description:
      "Arroz, feijão, a carne do dia, guarnições e salada. Consulte o cardápio da semana.",
    price: 25,
    image: img("photo-1594041680534-e8c8cdebd659"),
    category: "marmitas",
    tags: ["Mais vendido"],
  },
  {
    id: "marmita-g",
    name: "Marmita Grande",
    description:
      "Arroz, feijão, a carne do dia, guarnições e salada. Para quem tem fome de respeito.",
    price: 30,
    image: img("photo-1610970881699-44a5587cabec"),
    category: "marmitas",
    tags: [],
  },

  // ── À la Carte ───────────────────────────────────────────────────
  {
    id: "alacarte-parmegiana",
    name: "Parmegiana",
    description:
      "Filé empanado coberto com molho de tomate e queijo gratinado, arroz e fritas.",
    price: 35.9,
    image: img("photo-1600891964092-4316c288032e"),
    category: "alacarte",
    tags: ["Chef recomenda"],
  },
];

export const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
