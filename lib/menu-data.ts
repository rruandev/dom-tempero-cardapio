export type DishTag = "Mais vendido" | "Novo" | "Promoção" | "Chef recomenda";

export type DietaryFilter =
  | "bovina"
  | "frango"
  | "peixe"
  | "suino"
  | "vegetariano"
  | "fitness"
  | "promocoes";

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: DishTag[];
  dietary: DietaryFilter[];
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
  { id: "pratos-feitos", label: "Pratos Feitos" },
  { id: "marmitas", label: "Marmitas" },
];

export const DIETARY_FILTERS: { id: DietaryFilter; label: string }[] = [
  { id: "bovina", label: "Carne bovina" },
  { id: "frango", label: "Frango" },
  { id: "peixe", label: "Peixe" },
  { id: "suino", label: "Suíno" },
  { id: "fitness", label: "Fitness" },
];

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;

export const DISHES: Dish[] = [
  // ── Pratos Feitos ────────────────────────────────────────────────
  {
    id: "pf-bife",
    name: "PF Bife Acebolado",
    description:
      "Bife acebolado, arroz soltinho, feijão da casa, farofa e salada fresca.",
    price: 22.9,
    image: img("photo-1600891964092-4316c288032e"),
    category: "pratos-feitos",
    tags: ["Mais vendido"],
    dietary: ["bovina"],
  },
  {
    id: "pf-frango",
    name: "PF Frango Grelhado",
    description:
      "Filé de frango grelhado, arroz, feijão, purê de batata e salada.",
    price: 20.9,
    image: img("photo-1598103442097-8b74394b95c6"),
    category: "pratos-feitos",
    tags: [],
    dietary: ["frango", "fitness"],
  },
  {
    id: "pf-picanha",
    name: "PF Picanha",
    description:
      "Tiras de picanha na chapa, arroz, feijão, farofa crocante e vinagrete.",
    price: 32.9,
    image: img("photo-1558030006-450675393462"),
    category: "pratos-feitos",
    tags: ["Chef recomenda"],
    dietary: ["bovina"],
  },
  {
    id: "pf-calabresa",
    name: "PF Calabresa Acebolada",
    description:
      "Calabresa acebolada na chapa, arroz, feijão, farofa e salada.",
    price: 21.9,
    image: img("photo-1625943553852-781c6dd46faa"),
    category: "pratos-feitos",
    tags: [],
    dietary: ["suino"],
  },
  {
    id: "pf-peixe",
    name: "PF Peixe Frito",
    description:
      "Filé de tilápia frito e crocante, arroz, feijão, pirão e limão.",
    price: 25.9,
    image: img("photo-1580554530778-ca36943938b2"),
    category: "pratos-feitos",
    tags: [],
    dietary: ["peixe"],
  },
  {
    id: "pf-do-dia",
    name: "PF do Dia",
    description:
      "O prato do dia com o tempero da casa. Consulte a opção de hoje no balcão.",
    price: 18.9,
    image: img("photo-1504674900247-0877df9cc836"),
    category: "pratos-feitos",
    tags: ["Promoção"],
    dietary: ["bovina", "frango"],
  },

  // ── Marmitas ─────────────────────────────────────────────────────
  {
    id: "marmita-p",
    name: "Marmita P",
    description:
      "Arroz, feijão, carne do dia, farofa e salada. Ideal para matar a fome.",
    price: 16.9,
    image: img("photo-1610970881699-44a5587cabec"),
    category: "marmitas",
    tags: [],
    dietary: ["bovina", "frango"],
  },
  {
    id: "marmita-m",
    name: "Marmita M",
    description:
      "Arroz, feijão, carne do dia, farofa e salada. O tamanho preferido da galera.",
    price: 19.9,
    image: img("photo-1594041680534-e8c8cdebd659"),
    category: "marmitas",
    tags: ["Mais vendido"],
    dietary: ["bovina", "frango"],
  },
  {
    id: "marmita-g",
    name: "Marmita G",
    description:
      "Arroz, feijão, carne do dia, farofa e salada. Para quem tem fome de respeito.",
    price: 22.9,
    image: img("photo-1544025162-d76694265947"),
    category: "marmitas",
    tags: [],
    dietary: ["bovina", "frango"],
  },
  {
    id: "marmita-fitness",
    name: "Marmita Fitness",
    description:
      "Frango grelhado, arroz integral, legumes no vapor e mix de folhas verdes.",
    price: 24.9,
    image: img("photo-1546069901-ba9599a7e63c"),
    category: "marmitas",
    tags: ["Novo"],
    dietary: ["frango", "fitness"],
  },
];

export const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
