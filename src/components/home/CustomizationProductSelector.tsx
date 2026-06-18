import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { markingTechniques, products } from "@/data/products";

const customizableProductIds = [
  "tshirt-unisexe",
  "polo-personnalise",
  "casquette-personnalisee",
  "veste-personnalisee",
  "sweat-personnalise",
  "pantalon-pro-personnalise"
];

const productDescriptions: Record<string, string> = {
  "tshirt-unisexe": "Idéal pour les événements, associations, entreprises et équipes.",
  "polo-personnalise": "Un rendu professionnel et élégant pour votre image de marque.",
  "casquette-personnalisee": "Broderie ou marquage pour compléter une tenue identifiable.",
  "veste-personnalisee": "Parfait pour les équipes terrain, artisans et entreprises.",
  "sweat-personnalise": "Confortable, visible et durable pour clubs, assos et staff.",
  "pantalon-pro-personnalise": "Ajoutez un marquage discret et professionnel à une tenue complète."
};

const customizableProducts = customizableProductIds
  .map((productId) => products.find((product) => product.id === productId))
  .filter(Boolean);

export function CustomizationProductSelector({
  className = "bg-white py-20",
  intro = true
}: {
  className?: string;
  intro?: boolean;
}) {
  return (
    <AnimatedSection id="personnaliser" className={className}>
      <div className="section-shell">
        {intro ? (
          <div className="grid gap-5 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">Personnaliser</p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
                Choisissez le textile à marquer.
              </h2>
            </div>
            <p className="text-lg leading-8 text-ink/68">
              Sélectionnez un produit, ajoutez votre logo ou votre texte, puis visualisez une simulation claire avant devis.
            </p>
          </div>
        ) : null}

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {customizableProducts.map((product) => {
            if (!product) {
              return null;
            }

            return (
              <article
                key={product.id}
                className="group overflow-hidden rounded-lg border border-ink/10 bg-paper shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative aspect-[1.08] overflow-hidden bg-mist">
                  <Image
                    src={product.images.main}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/70 via-ink-deep/8 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex rounded bg-gold px-2.5 py-1 text-xs font-black uppercase tracking-[0.12em] text-ink">
                      {product.badge ?? "Personnalisable"}
                    </span>
                  </div>
                </div>

                <div className="grid gap-4 p-5">
                  <div>
                    <h3 className="font-display text-3xl font-bold leading-tight text-ink">{product.shortName}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink/66">
                      {productDescriptions[product.id] ?? product.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {product.techniques.slice(0, 3).map((technique) => (
                      <span
                        key={technique}
                        className="inline-flex items-center gap-1.5 rounded-md border border-ink/10 bg-white px-2.5 py-1.5 text-xs font-black text-ink/72"
                      >
                        <CheckCircle2 size={14} className="text-mint" />
                        {markingTechniques[technique]}
                      </span>
                    ))}
                  </div>

                  <Button href={`/personnaliser/${product.id}`} variant="primary" className="w-full">
                    Personnaliser ce produit
                    <ArrowRight size={17} />
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
