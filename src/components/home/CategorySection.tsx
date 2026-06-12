import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function CategorySection() {
  return (
    <AnimatedSection className="bg-white py-16">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase text-coral">Catégories</p>
            <h2 className="mt-2 font-display text-3xl font-black text-ink md:text-4xl">
              Des textiles prêts à personnaliser
            </h2>
          </div>
          <Button href="/boutique" variant="secondary">
            Voir la boutique
            <ArrowRight size={17} />
          </Button>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article key={category.id} className="group overflow-hidden rounded-lg border border-ink/10 bg-paper shadow-soft">
              <div className="relative aspect-[1.25] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/58 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-black text-ink">{category.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/66">{category.description}</p>
                <Button href="/personnaliser/tshirt" variant="ghost" className="mt-4 px-0">
                  Personnaliser
                  <ArrowRight size={16} />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
