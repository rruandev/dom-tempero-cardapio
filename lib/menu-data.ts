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
  { id: "entradas", label: "Entradas & Petiscos" },
  { id: "individuais", label: "Pratos Individuais" },
  { id: "travessas", label: "Travessas para 2" },
  { id: "especial", label: "Especial de Sábado" },
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

  // ── Entradas & Petiscos ──────────────────────────────────────────
  {
    id: "ent-torresmo",
    name: "Torresmo de Rolo",
    description:
      "Torresmo pururucado, sequinho e crocante, com limão e molho de pimenta.",
    price: 20,
    image: img("photo-1606313564200-e75d5e30476c"),
    category: "entradas",
    tags: ["Mais vendido"],
  },
  {
    id: "ent-passarinho",
    name: "Frango a Passarinho",
    description:
      "Coxa e sobrecoxa fritas e douradas, cobertas com alho frito crocante.",
    price: 27,
    image: img("photo-1626082927389-6cd097cdc6ec"),
    category: "entradas",
    tags: [],
  },
  {
    id: "ent-linguica",
    name: "Linguiça Acebolada na Chapa",
    description:
      "Linguiça na chapa com cebola dourada, acompanhada de mandioca cozida.",
    price: 26,
    image: img("photo-1625943553852-781c6dd46faa"),
    category: "entradas",
    tags: [],
  },
  {
    id: "ent-figado",
    name: "Fígado Acebolado com Jiló",
    description:
      "Clássico de raiz: fígado macio acebolado com jiló salteado na chapa.",
    price: 24,
    image: img("photo-1504674900247-0877df9cc836"),
    category: "entradas",
    tags: [],
  },

  // ── Pratos Individuais ───────────────────────────────────────────
  {
    id: "ind-bisteca",
    name: "Bisteca Suína na Chapa",
    description:
      "Bisteca grelhada na chapa com arroz, feijão, vinagrete e farofa.",
    price: 27,
    image: img("photo-1544025162-d76694265947"),
    category: "individuais",
    tags: [],
  },
  {
    id: "ind-frango-fritas",
    name: "Frango Grelhado com Fritas",
    description:
      "Filé de peito grelhado no capricho com porção de batata frita crocante.",
    price: 28,
    image: img("photo-1598103442097-8b74394b95c6"),
    category: "individuais",
    tags: [],
  },
  {
    id: "ind-carne-panela",
    name: "Carne de Panela com Mandioca",
    description:
      "Carne cozida lentamente até desfiar, com mandioca macia e caldo encorpado.",
    price: 30,
    image: img("photo-1600335895229-6e75511892c8"),
    category: "individuais",
    tags: [],
  },
  {
    id: "ind-chambaril",
    name: "Chambaril ao Molho",
    description:
      "Prato de panela raiz: chambaril cozido no molho, com cara de comida de vó.",
    price: 32,
    image: img("photo-1529692236671-f1f6cf9683ba"),
    category: "individuais",
    tags: [],
  },
  {
    id: "ind-parmegiana",
    name: "Parmegiana de Frango",
    description:
      "Filé de frango empanado coberto com molho de tomate e queijo gratinado, arroz e fritas.",
    price: 36,
    image: img("photo-1600891964092-4316c288032e"),
    category: "individuais",
    tags: ["Chef recomenda"],
  },

  // ── Travessas para 2 ─────────────────────────────────────────────
  {
    id: "trav-costela",
    name: "Costela Gaúcha com Batata",
    description:
      "Costela cozida na pressão até desmanchar, servida com batatas. Serve 2.",
    price: 65,
    image: img("photo-1603360946369-dc9bb6258143"),
    category: "travessas",
    tags: [],
  },
  {
    id: "trav-paleta",
    name: "Paleta Assada Desfiada",
    description:
      "Paleta assada e desfiada, com arroz branco soltinho e farofa. Serve 2.",
    price: 60,
    image: img("photo-1624353365286-3f8d62daad51"),
    category: "travessas",
    tags: [],
  },
  {
    id: "trav-tilapia",
    name: "Tilápia Frita com Pirão e Baião",
    description:
      "Filés de tilápia fritos com pirão caprichado e baião de dois. Prato de sexta. Serve 2.",
    price: 70,
    image: img("photo-1580554530778-ca36943938b2"),
    category: "travessas",
    tags: [],
  },
  {
    id: "trav-picadinho",
    name: "Picadinho à Moda",
    description:
      "Picadinho de acém com ovo frito, banana frita e couve refogada. Serve 2.",
    price: 62,
    image: img("photo-1414235077428-338989a2e8c0"),
    category: "travessas",
    tags: [],
  },
  {
    id: "trav-galinhada",
    name: "Galinhada Caipira na Travessa",
    description:
      "Arroz caipira com galinha saborosa, açafrão e cheiro-verde. Serve 2.",
    price: 55,
    image: img("photo-1579954115545-a95591f28bfc"),
    category: "travessas",
    tags: ["Chef recomenda"],
  },

  // ── Especial de Sábado ───────────────────────────────────────────
  {
    id: "esp-feijoada-ind",
    name: "Feijoada Individual",
    description:
      "Feijoada completa com arroz, couve, laranja, torresmo e farofa. Só aos sábados.",
    price: 32,
    image: img("photo-1546069901-ba9599a7e63c"),
    category: "especial",
    tags: ["Mais vendido"],
  },
  {
    id: "esp-feijoada-trav",
    name: "Feijoada na Travessa",
    description:
      "Feijoada completa para dividir, com todos os acompanhamentos. Serve 2-3. Só aos sábados.",
    price: 65,
    image: img("photo-1567620905732-2d1ec7ab7445"),
    category: "especial",
    tags: [],
  },
];

export const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
