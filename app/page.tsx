import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WeeklyMenu from "@/components/WeeklyMenu";
import MenuSections from "@/components/MenuSections";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WeeklyMenu />
      <MenuSections />
      <Footer />
      <CartDrawer />
    </main>
  );
}
