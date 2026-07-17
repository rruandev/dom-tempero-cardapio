import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dom Tempero — O almoço de respeito de Sobradinho",
  description:
    "Cardápio digital do Dom Tempero: pratos executivos, marmitas, churrasco, grelhados, porções, bebidas e sobremesas. Peça pelo WhatsApp.",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${poppins.variable}`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
