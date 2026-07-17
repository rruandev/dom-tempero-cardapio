# Dom Tempero — Cardápio Digital

Cardápio digital do restaurante **Dom Tempero** (Sobradinho, Brasília - DF).

> _O almoço de respeito de Sobradinho_

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev) — animações
- [Lucide Icons](https://lucide.dev)

## Funcionalidades

- Página inicial com logo, slogan e chamada para o cardápio
- Navegação fixa com scroll suave entre categorias
- Busca de pratos por nome (ignora acentos)
- Filtros: carne bovina, frango, peixe, suíno, vegetariano, fitness e promoções
- Cards de pratos com foto, descrição, preço, tags e animações
- Carrinho lateral com quantidade, remoção, observações, nome e mesa/retirada
- Finalização do pedido pelo WhatsApp com mensagem gerada automaticamente
- Rodapé com horários, endereço, contatos e redes sociais
- Design responsivo, mobile-first

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Configuração

Edite `lib/menu-data.ts` para ajustar:

- `RESTAURANT.whatsapp` — número do WhatsApp que recebe os pedidos (formato: `5561XXXXXXXXX`)
- `RESTAURANT.address`, `phone`, `instagram`, `mapsUrl`, `hours`
- `DISHES` — pratos, preços, fotos e tags

As fotos atuais são placeholders do Unsplash — substitua pelas fotos reais dos pratos.
A logo em `public/logo.svg` é provisória — substitua pelo arquivo oficial.
