"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { realisationCategories, realisations, type RealisationCategory } from "@/data/realisations";
import { Button } from "@/components/ui/Button";

type Filter = "Tous" | RealisationCategory;

export function RealisationGallery() {
  const [activeCategory, setActiveCategory] = useState<Filter>("Tous");
  const visibleRealisations = useMemo(
    () =>
      activeCategory === "Tous"
        ? realisations
        : realisations.filter((realisation) => realisation.category === activeCategory),
    [activeCategory]
  );

  return (
    <section className="section-shell py-14 md:py-18">
      <div className="rounded-lg border border-ink/10 bg-white p-4 shadow-soft sm:p-5">
        <div className="flex gap-2 overflow-x-auto pb-2" aria-label="Filtrer les réalisations">
          {realisationCategories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={active}
                className={`shrink-0 rounded-md border px-4 py-2.5 text-sm font-black transition ${
                  active
                    ? "border-ink bg-ink text-white shadow-lift"
                    : "border-ink/12 bg-paper text-ink hover:border-ink/28"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visibleRealisations.map((item) => (
          <article
            key={item.id}
            className="group overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <div className="relative aspect-[1.08] overflow-hidden bg-mist">
              <Image
                src={item.image}
                alt={`${item.title} - ${item.marking}`}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute left-3 top-3 rounded bg-white/92 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-ink shadow-soft">
                {item.category}
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-coral">{item.marking}</p>
              <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-ink md:text-3xl">
                {item.title}
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-ink/68">{item.description}</p>
              <Button href="/devis" variant="secondary" className="mt-5 w-full sm:w-auto">
                Projet similaire
                <ArrowRight size={17} />
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
