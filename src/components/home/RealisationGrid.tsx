import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { realisations } from "@/data/realisations";
import { Button } from "@/components/ui/Button";

export function RealisationGrid() {
  const featuredRealisations = realisations.slice(0, 9);

  return (
    <AnimatedSection id="realisations" className="bg-ink py-20 text-white">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">Nos réalisations</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
              Des marquages pensés pour être portés, vus et compris.
            </h2>
          </div>
          <Button href="/realisations" variant="gold">
            Voir les réalisations
          </Button>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredRealisations.map((item) => (
            <article key={item.id} className="group relative aspect-[1.14] overflow-hidden rounded-lg bg-white/8">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/84 via-ink-deep/22 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="mb-2 inline-flex rounded bg-gold px-2 py-1 text-xs font-black uppercase tracking-[0.12em] text-ink">
                  {item.marking}
                </p>
                <h3 className="font-display text-2xl font-bold">{item.title}</h3>
                <p className="mt-1 text-[15px] leading-6 text-white/74">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
