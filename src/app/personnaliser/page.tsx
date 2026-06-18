import { ArrowDown } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomizationProductSelector } from "@/components/home/CustomizationProductSelector";
import { Button } from "@/components/ui/Button";

export default function PersonnaliserPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-ink-deep py-20 text-white">
          <div className="absolute inset-0 subtle-grid opacity-20" />
          <div className="section-shell relative grid gap-6 lg:grid-cols-[0.82fr_1fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">Personnalisation textile</p>
              <h1 className="mt-3 font-display text-5xl font-bold leading-tight md:text-7xl">
                Commencez par choisir votre vêtement.
              </h1>
            </div>
            <div>
              <p className="text-lg leading-8 text-white/74">
                T-shirt, polo, casquette, veste, sweat ou pantalon : chaque support possède ses propres zones de marquage
                pour une simulation plus claire.
              </p>
              <Button href="#personnaliser" variant="gold" size="lg" className="mt-6">
                Voir les produits
                <ArrowDown size={18} />
              </Button>
            </div>
          </div>
        </section>

        <CustomizationProductSelector className="bg-white py-16" intro={false} />
      </main>
      <Footer />
    </>
  );
}
