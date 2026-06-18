import { Shirt } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroVideo } from "@/components/home/HeroVideo";
import { CustomizationProductSelector } from "@/components/home/CustomizationProductSelector";
import { SavoirFaire } from "@/components/home/SavoirFaire";
import { RealisationGrid } from "@/components/home/RealisationGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TrustSection } from "@/components/home/TrustSection";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroVideo />
        <CustomizationProductSelector />
        <SavoirFaire />
        <RealisationGrid />
        <HowItWorks />
        <TrustSection />

        <AnimatedSection className="section-shell py-16">
          <div className="rounded-lg bg-ink p-8 text-white shadow-soft md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">Vous avez déjà votre logo ?</p>
                <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
                  Envoyez-le et visualisez votre futur textile personnalisé.
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/72">
                  Choisissez votre support, placez votre logo, puis recevez un devis clair avant production.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button href="/personnaliser" variant="gold" size="lg">
                  <Shirt size={20} />
                  Commencer ma personnalisation
                </Button>
                <Button href="/devis" variant="light" size="lg">
                  Demander un devis
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
