import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function PremiumIntro() {
  return (
    <AnimatedSection className="bg-ink-deep py-20 text-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative min-h-[460px] overflow-hidden rounded-lg">
          <Image
            src="/images/workshop.jpg"
            alt="Préparation textile dans un atelier de marquage"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/76 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/12 bg-ink-deep/72 p-5 backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-gold">Atelier textile</p>
            <p className="mt-2 text-lg font-semibold">Broderie, flocage, transfert et marquage professionnel.</p>
          </div>
        </div>

        <div>
          <SectionTitle eyebrow="Notre savoir-faire" title="Un accompagnement humain pour un résultat professionnel." tone="light">
            <p>
              Idéal pour entreprises, associations, clubs, événements et vêtements de travail. Votre fichier est vérifié avant production,
              les contraintes de marquage sont expliquées et un BAT peut être validé avant marquage.
            </p>
          </SectionTitle>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Broderie", "Marquage", "Conseil"].map((item) => (
              <div key={item} className="rounded-lg border border-white/12 bg-white/7 p-5">
                <p className="font-display text-3xl font-bold text-gold">{item}</p>
                <p className="mt-2 text-sm leading-6 text-white/68">Finition propre, suivi clair et rendu adapté au textile.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
