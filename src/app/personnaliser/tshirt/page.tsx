import { FileCheck2, ImageUp, ShieldCheck } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TshirtConfigurator } from "@/components/configurator/TshirtConfigurator";
import { featuredProduct } from "@/data/products";

export default function TshirtPersonalisationPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-ink-deep py-12 text-white">
          <div className="section-shell grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">Aperçu textile réaliste</p>
              <h1 className="mt-3 font-display text-5xl font-bold leading-tight md:text-6xl">
                Visualisez votre logo sur un vrai t-shirt
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/72">
                Choisissez l’emplacement : côté cœur, centre poitrine ou dos, puis demandez votre devis personnalisé.
                Le rendu final est confirmé après vérification du fichier.
              </p>
            </div>
            <div className="grid gap-2 rounded-lg border border-white/12 bg-white/8 p-4 backdrop-blur">
              <span className="inline-flex items-center gap-2 text-sm font-black"><ImageUp size={17} className="text-gold" /> Mockup photo réaliste</span>
              <span className="inline-flex items-center gap-2 text-sm font-black"><FileCheck2 size={17} className="text-gold" /> BAT possible avant marquage</span>
              <span className="inline-flex items-center gap-2 text-sm font-black"><ShieldCheck size={17} className="text-mint" /> Fichier vérifié avant production</span>
            </div>
          </div>
        </section>

        <section className="section-shell py-12">
          <TshirtConfigurator product={featuredProduct} />
        </section>
      </main>
      <Footer />
    </>
  );
}
