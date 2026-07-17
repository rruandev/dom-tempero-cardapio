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
  whatsapp: "5561999999999", // TODO: substituir pelo número real
  phone: "(61) 99999-9999",
  address: "Quadra Central, Bloco A, Loja 10 — Sobradinho, Brasília - DF",
  instagram: "https://instagram.com/domtempero",
  mapsUrl: "https://maps.google.com/?q=Sobradinho+Bras%C3%ADlia+DF",
  hours: [
    { days: "Segunda a Sexta", time: "11h às 15h" },
    { days: "Sábado e Domingo", time: "11h às 16h" },
  ],
};

export const CATEGORIES: Category[] = [
  { id: "executivos", label: "Pratos Executivos" },
  { id: "marmitas", label: "Marmitas" },
  { id: "churrasco", label: "Churrasco" },
  { id: "grelhados", label: "Grelhados" },
  { id: "porcoes", label: "Porções" },
  { id: "bebidas", label: "Bebidas" },
  { id: "sobremesas", label: "Sobremesas" },
  { id: "promocoes", label: "Promoções" },
];

export const DIETARY_FILTERS: { id: DietaryFilter; label: string }[] = [
  { id: "bovina", label: "Carne bovina" },
  { id: "frango", label: "Frango" },
  { id: "peixe", label: "Peixe" },
  { id: "suino", label: "Suíno" },
  { id: "vegetariano", label: "Vegetariano" },
  { id: "fitness", label: "Fitness" },
  { id: "promocoes", label: "Promoções" },
];

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;

export const DISHES: Dish[] = [
  // ── Pratos Executivos ────────────────────────────────────────────
  {
    id: "exec-picanha",
    name: "Executivo de Picanha",
    description:
      "Picanha grelhada no ponto, arroz soltinho, feijão da casa, farofa crocante e vinagrete.",
    price: 42.9,
    image: img("photo-1558030006-450675393462"),
    category: "executivos",
    tags: ["Mais vendido"],
    dietary: ["bovina"],
  },
  {
    id: "exec-frango",
    name: "Executivo de Frango Grelhado",
    description:
      "Filé de frango suculento, arroz, feijão, purê de batata e salada fresca.",
    price: 29.9,
    image: img("photo-1598103442097-8b74394b95c6"),
    category: "executivos",
    tags: [],
    dietary: ["frango", "fitness"],
  },
  {
    id: "exec-tilapia",
    name: "Executivo de Tilápia",
    description:
      "Filé de tilápia dourado na manteiga, arroz com brócolis, pirão e limão siciliano.",
    price: 36.9,
    image: img("photo-1580554530778-ca36943938b2"),
    category: "executivos",
    tags: ["Chef recomenda"],
    dietary: ["peixe"],
  },
  {
    id: "exec-feijoada",
    name: "Feijoada Dom Tempero",
    description:
      "Feijoada completa com carnes nobres, couve refogada, torresmo, laranja e farofa.",
    price: 39.9,
    image: img("photo-1504674900247-0877df9cc836"),
    category: "executivos",
    tags: ["Mais vendido"],
    dietary: ["suino"],
  },

  // ── Marmitas ─────────────────────────────────────────────────────
  {
    id: "marmita-tradicional",
    name: "Marmita Tradicional",
    description:
      "Arroz, feijão, carne do dia, farofa e salada. O sabor de casa no seu almoço.",
    price: 19.9,
    image: img("photo-1600891964092-4316c288032e"),
    category: "marmitas",
    tags: ["Mais vendido"],
    dietary: ["bovina"],
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
  {
    id: "marmita-vegetariana",
    name: "Marmita Vegetariana",
    description:
      "Legumes salteados, grão-de-bico, arroz sete grãos e salada colorida da estação.",
    price: 22.9,
    image: img("photo-1512621776951-a57141f2eefd"),
    category: "marmitas",
    tags: [],
    dietary: ["vegetariano", "fitness"],
  },
  {
    id: "marmita-executiva",
    name: "Marmita Executiva",
    description:
      "Contra-filé acebolado, arroz, feijão tropeiro, mandioca cozida e vinagrete.",
    price: 27.9,
    image: img("photo-1594041680534-e8c8cdebd659"),
    category: "marmitas",
    tags: [],
    dietary: ["bovina"],
  },

  // ── Churrasco ────────────────────────────────────────────────────
  {
    id: "chur-picanha",
    name: "Picanha na Brasa",
    description:
      "500g de picanha maturada na brasa, acompanha arroz, farofa, vinagrete e pão de alho.",
    price: 89.9,
    image: img("photo-1544025162-d76694265947"),
    category: "churrasco",
    tags: ["Chef recomenda"],
    dietary: ["bovina"],
  },
  {
    id: "chur-costela",
    name: "Costela no Bafo",
    description:
      "Costela bovina assada lentamente por 8 horas, macia e desmanchando.",
    price: 69.9,
    image: img("photo-1529692236671-f1f6cf9683ba"),
    category: "churrasco",
    tags: ["Mais vendido"],
    dietary: ["bovina"],
  },
  {
    id: "chur-espetinho",
    name: "Espetinho Misto",
    description:
      "Trio de espetinhos: alcatra, frango com bacon e linguiça toscana, com farofa.",
    price: 32.9,
    image: img("photo-1555939594-58d7cb561ad1"),
    category: "churrasco",
    tags: [],
    dietary: ["bovina", "frango", "suino"],
  },
  {
    id: "chur-linguica",
    name: "Linguiça Artesanal na Brasa",
    description:
      "Linguiça artesanal suína grelhada na brasa com mandioca frita e vinagrete.",
    price: 28.9,
    image: img("photo-1432139555190-58524dae6a55"),
    category: "churrasco",
    tags: [],
    dietary: ["suino"],
  },

  // ── Grelhados ────────────────────────────────────────────────────
  {
    id: "grel-salmao",
    name: "Salmão Grelhado",
    description:
      "Posta de salmão grelhada com crosta de ervas, risoto de limão e aspargos.",
    price: 59.9,
    image: img("photo-1467003909585-2f8a72700288"),
    category: "grelhados",
    tags: ["Chef recomenda", "Novo"],
    dietary: ["peixe", "fitness"],
  },
  {
    id: "grel-frango",
    name: "Frango Grelhado com Legumes",
    description:
      "Peito de frango marinado em ervas finas, grelhado com legumes da estação.",
    price: 31.9,
    image: img("photo-1626082927389-6cd097cdc6ec"),
    category: "grelhados",
    tags: [],
    dietary: ["frango", "fitness"],
  },
  {
    id: "grel-contrafile",
    name: "Contra-filé ao Chimichurri",
    description:
      "Contra-filé grelhado no ponto com chimichurri da casa e batatas rústicas.",
    price: 46.9,
    image: img("photo-1600335895229-6e75511892c8"),
    category: "grelhados",
    tags: [],
    dietary: ["bovina"],
  },
  {
    id: "grel-tilapia",
    name: "Tilápia na Grelha",
    description:
      "Filé de tilápia grelhado com azeite de alecrim, purê de mandioquinha e salada.",
    price: 38.9,
    image: img("photo-1615141982883-c7ad0e69fd62"),
    category: "grelhados",
    tags: [],
    dietary: ["peixe", "fitness"],
  },

  // ── Porções ──────────────────────────────────────────────────────
  {
    id: "porc-batata",
    name: "Batata Frita Especial",
    description:
      "Batatas crocantes com queijo parmesão e cheiro-verde. Serve até 3 pessoas.",
    price: 26.9,
    image: img("photo-1571091718767-18b5b1457add"),
    category: "porcoes",
    tags: ["Mais vendido"],
    dietary: ["vegetariano"],
  },
  {
    id: "porc-mandioca",
    name: "Mandioca Crocante",
    description:
      "Mandioca frita dourada por fora e macia por dentro, com molho da casa.",
    price: 22.9,
    image: img("photo-1626804475297-41608ea09aeb"),
    category: "porcoes",
    tags: [],
    dietary: ["vegetariano"],
  },
  {
    id: "porc-calabresa",
    name: "Calabresa Acebolada",
    description:
      "Calabresa fatiada e grelhada com cebola caramelizada e pão francês.",
    price: 29.9,
    image: img("photo-1625943553852-781c6dd46faa"),
    category: "porcoes",
    tags: [],
    dietary: ["suino"],
  },
  {
    id: "porc-torresmo",
    name: "Torresmo de Rolo",
    description:
      "Torresmo pururucado e sequinho, acompanhado de limão e molho de pimenta.",
    price: 27.9,
    image: img("photo-1606313564200-e75d5e30476c"),
    category: "porcoes",
    tags: ["Chef recomenda"],
    dietary: ["suino"],
  },

  // ── Bebidas ──────────────────────────────────────────────────────
  {
    id: "beb-suco",
    name: "Suco Natural",
    description: "Laranja, abacaxi, maracujá ou acerola. Feito na hora. 500ml.",
    price: 9.9,
    image: img("photo-1613478223719-2ab802602423"),
    category: "bebidas",
    tags: [],
    dietary: ["vegetariano", "fitness"],
  },
  {
    id: "beb-refri",
    name: "Refrigerante Lata",
    description: "Coca-Cola, Guaraná Antarctica, Fanta ou Sprite. 350ml gelado.",
    price: 6.9,
    image: img("photo-1497034825429-c343d7c6a68f"),
    category: "bebidas",
    tags: [],
    dietary: ["vegetariano"],
  },
  {
    id: "beb-agua",
    name: "Água Mineral",
    description: "Com ou sem gás, sempre gelada. 500ml.",
    price: 4.9,
    image: img("photo-1595981267035-7b04ca84a82d"),
    category: "bebidas",
    tags: [],
    dietary: ["vegetariano", "fitness"],
  },
  {
    id: "beb-cafe",
    name: "Café Espresso",
    description: "Café 100% arábica, extraído na hora para fechar o almoço.",
    price: 5.9,
    image: img("photo-1541167760496-1628856ab772"),
    category: "bebidas",
    tags: [],
    dietary: ["vegetariano"],
  },

  // ── Sobremesas ───────────────────────────────────────────────────
  {
    id: "sob-pudim",
    name: "Pudim de Leite",
    description: "Receita da vovó: cremoso, com calda de caramelo dourada.",
    price: 12.9,
    image: img("photo-1551024506-0bccd828d307"),
    category: "sobremesas",
    tags: ["Mais vendido"],
    dietary: ["vegetariano"],
  },
  {
    id: "sob-petit",
    name: "Petit Gâteau",
    description:
      "Bolinho quente de chocolate com centro cremoso e sorvete de creme.",
    price: 18.9,
    image: img("photo-1563805042-7684c019e1cb"),
    category: "sobremesas",
    tags: ["Chef recomenda"],
    dietary: ["vegetariano"],
  },
  {
    id: "sob-acai",
    name: "Açaí na Tigela",
    description: "Açaí cremoso com banana, granola crocante e mel. 400ml.",
    price: 16.9,
    image: img("photo-1615557960916-5f4791effe9d"),
    category: "sobremesas",
    tags: ["Novo"],
    dietary: ["vegetariano", "fitness"],
  },
  {
    id: "sob-mousse",
    name: "Mousse de Maracujá",
    description: "Mousse aerado de maracujá com calda fresca da fruta.",
    price: 10.9,
    image: img("photo-1551183053-bf91a1d81141"),
    category: "sobremesas",
    tags: [],
    dietary: ["vegetariano"],
  },

  // ── Promoções ────────────────────────────────────────────────────
  {
    id: "promo-executivo",
    name: "Executivo do Dia + Suco",
    description:
      "Prato executivo do dia com suco natural incluso. Válido de segunda a sexta.",
    price: 32.9,
    image: img("photo-1414235077428-338989a2e8c0"),
    category: "promocoes",
    tags: ["Promoção"],
    dietary: ["promocoes"],
  },
  {
    id: "promo-churrasco",
    name: "Combo Churrasco para 2",
    description:
      "Picanha 400g, espetinho de frango, arroz, farofa, vinagrete e 2 bebidas.",
    price: 99.9,
    image: img("photo-1603360946369-dc9bb6258143"),
    category: "promocoes",
    tags: ["Promoção", "Mais vendido"],
    dietary: ["bovina", "frango", "promocoes"],
  },
  {
    id: "promo-marmita",
    name: "Marmita em Dobro",
    description:
      "Duas marmitas tradicionais por um preço especial. Perfeito para dividir.",
    price: 34.9,
    image: img("photo-1610970881699-44a5587cabec"),
    category: "promocoes",
    tags: ["Promoção"],
    dietary: ["bovina", "promocoes"],
  },
];

export const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
