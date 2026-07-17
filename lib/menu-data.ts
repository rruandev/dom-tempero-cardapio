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
  note?: string;
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
  hours: [
    { days: "Segunda a Sábado", time: "11h às 15h" },
    { days: "Domingo", time: "Fechado" },
  ],
  services: "Self-service, marmitex e delivery",
  payment: "Aceitamos Pix e cartão",
  disclaimer:
    "Cardápio sujeito a alterações conforme disponibilidade. Preços válidos a partir de julho/2026.",
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
    carnes: ["Bisteca suína acebolada", "Linguiça toscana acebolada"],
    acompanhamentos: ["Arroz branco", "Feijão carioca", "Macarrão ao sugo"],
    guarnicoes: ["Purê de batata", "Vinagrete"],
  },
  {
    weekday: 3,
    day: "Quarta",
    carnes: ["Carne de panela", "Frango à milanesa"],
    acompanhamentos: ["Arroz branco", "Arroz à grega", "Feijão carioca"],
    guarnicoes: ["Mandioca cozida", "Salada de repolho"],
  },
  {
    weekday: 4,
    day: "Quinta",
    carnes: ["Costelinha suína", "Frango grelhado"],
    acompanhamentos: ["Arroz branco", "Feijão tropeiro", "Macarrão na manteiga"],
    guarnicoes: ["Couve refogada", "Banana frita"],
  },
  {
    weekday: 5,
    day: "Sexta",
    carnes: [
      "Strogonoff de frango",
      "Paleta assada desfiada",
      "Tilápia frita — Sexta do peixe",
    ],
    acompanhamentos: ["Arroz branco", "Feijão carioca", "Batata palha"],
    guarnicoes: ["Pirão ou salada mista"],
  },
  {
    weekday: 6,
    day: "Sábado",
    carnes: ["Feijoada completa", "Galinhada caipira"],
    acompanhamentos: ["Arroz branco", "Couve", "Laranja", "Torresmo", "Farofa"],
    guarnicoes: [],
    destaque: "O dia forte da casa",
  },
];

export const WEEKLY_NOTE =
  "Todos os dias: arroz soltinho, feijão temperado, macarrão, farofa, guarnições variadas e salada fresca no buffet.";

export const CATEGORIES: Category[] = [
  {
    id: "marmitas",
    label: "Marmitex & Pratos",
    note: "Carnes premium do dia (maminha, tilápia e cortes especiais): acréscimo de R$ 5,00 na marmitex ou prato feito.",
  },
  { id: "entradas", label: "Petiscos" },
  { id: "individuais", label: "Pratos Individuais" },
  { id: "travessas", label: "Travessas para 2" },
  { id: "especial", label: "Especiais de Sábado" },
];

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;

export const DISHES: Dish[] = [
  // ── Marmitex & Pratos ────────────────────────────────────────────
  {
    id: "marmitex-p",
    name: "Marmitex P",
    description: "Arroz, feijão, 1 carne do dia e salada.",
    price: 18,
    image: img("photo-1594041680534-e8c8cdebd659"),
    category: "marmitas",
    tags: [],
  },
  {
    id: "marmitex-m",
    name: "Marmitex M",
    description: "Arroz, feijão, 1 carne do dia, guarnição e salada.",
    price: 22,
    image: img("photo-1604908176997-125f25cc6f3d"),
    category: "marmitas",
    tags: ["Mais vendido"],
  },
  {
    id: "marmitex-g",
    name: "Marmitex G",
    description:
      "Arroz, feijão, 1 carne do dia, guarnição, farofa e salada.",
    price: 26,
    image: img("photo-1558030006-450675393462"),
    category: "marmitas",
    tags: [],
  },
  {
    id: "prato-feito",
    name: "Prato Feito",
    description:
      "Arroz, feijão, carne do dia, ovo, guarnição e salada — no capricho.",
    price: 24,
    image: img("photo-1615141982883-c7ad0e69fd62"),
    category: "marmitas",
    tags: [],
  },
  {
    id: "self-service",
    name: "Self-service por Quilo",
    description:
      "Monte seu prato do seu jeito no nosso buffet. Valor por quilo.",
    price: 54.9,
    image: img("photo-1512621776951-a57141f2eefd"),
    category: "marmitas",
    tags: [],
  },

  // ── Entradas & Petiscos ──────────────────────────────────────────
  {
    id: "ent-torresmo",
    name: "Torresmo Pururucado",
    description:
      "Torresmo sequinho e crocante, com limão e molho de pimenta.",
    price: 20,
    image: img("photo-1608039755401-742074f0548d"),
    category: "entradas",
    tags: ["Mais vendido"],
  },
  {
    id: "ent-passarinho",
    name: "Frango a Passarinho",
    description:
      "Coxa e sobrecoxa fritas e douradas, cobertas com alho frito crocante.",
    price: 28,
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
    image: img("photo-1596797038530-2c107229654b"),
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
    name: "Costela na Pressão com Batata",
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
    image: img("photo-1599487488170-d11ec9c172f0"),
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
    image: img("photo-1512058564366-18510be2db19"),
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
    image: img("photo-1585937421612-70a008356fbe"),
    category: "especial",
    tags: ["Mais vendido"],
  },
  {
    id: "esp-feijoada-trav",
    name: "Feijoada na Travessa",
    description:
      "Feijoada completa para dividir, com todos os acompanhamentos. Serve 2-3. Só aos sábados.",
    price: 65,
    image: img("photo-1574484284002-952d92456975"),
    category: "especial",
    tags: [],
  },
  {
    id: "esp-maminha",
    name: "Maminha Assada na Travessa",
    description:
      "Maminha assada lentamente, macia e suculenta. Serve 2-3. Só aos sábados.",
    price: 110,
    image: img("photo-1555939594-58d7cb561ad1"),
    category: "especial",
    tags: ["Chef recomenda"],
  },
];

export const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
