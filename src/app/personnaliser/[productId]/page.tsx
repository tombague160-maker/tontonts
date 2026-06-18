import { FileCheck2, ImageUp, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TshirtConfigurator } from "@/components/configurator/TshirtConfigurator";
import { products } from "@/data/products";

function findProduct(productId: string) {
  return products.find((product) => product.id === productId || product.slug === productId);
}

export function generateStaticParams() {
  return products.map((product) => ({ productId: product.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  const product = findProduct(productId);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} | LES TONTONS MARQUEURS`,
    description: `Personnalisez ${product.shortName.toLowerCase()} avec logo, texte, emplacement et prix estimatif.`
  };
}

export default async function ProductPersonalisationPage({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  const product = findProduct(productId);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <section className="bg-ink-deep py-12 text-white">
          <div className="section-shell grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">Simulation textile</p>
              <h1 className="mt-3 font-display text-5xl font-bold leading-tight md:text-6xl">
                Personnaliser {product.shortName.toLowerCase()}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/72">
                Ajoutez votre logo, choisissez l&apos;emplacement et préparez une demande de devis claire.
                Le rendu final est confirmé après vérification du fichier et validation du BAT.
              </p>
            </div>
            <div className="grid gap-2 rounded-lg border border-white/12 bg-white/8 p-4 backdrop-blur">
              <span className="inline-flex items-center gap-2 text-sm font-black">
                <ImageUp size={17} className="text-gold" /> Simulation immédiate
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-black">
                <FileCheck2 size={17} className="text-gold" /> BAT possible avant marquage
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-black">
                <ShieldCheck size={17} className="text-mint" /> Fichier vérifié avant production
              </span>
            </div>
          </div>
        </section>

        <section className="section-shell py-12">
          <TshirtConfigurator product={product} />
        </section>
      </main>
      <Footer />
    </>
  );
}
