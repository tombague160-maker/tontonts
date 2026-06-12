import Image from "next/image";
import { ArrowRight, BadgeCheck, FileCheck2, Handshake, ImageUp, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const badges = [
  { label: "Broderie soignée", icon: Sparkles },
  { label: "BAT possible", icon: FileCheck2 },
  { label: "Aperçu réaliste", icon: ImageUp },
  { label: "Accompagnement humain", icon: Handshake }
];

export function HeroVideo() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-deep text-white">
      <Image
        src="/images/hero-textile.jpg"
        alt="Atelier textile premium avec vêtements personnalisés"
        fill
        priority
        className="object-cover opacity-82"
        sizes="100vw"
      />
      <div className="absolute inset-0 media-overlay" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink-deep to-transparent" />

      <div className="section-shell relative grid min-h-[86vh] content-center py-24">
        <div className="max-w-4xl">
          <Badge tone="white" className="mb-7">
            <BadgeCheck size={16} />
            Broderie et marquage textile professionnel
          </Badge>
          <h1 className="font-display text-5xl font-bold leading-[0.96] md:text-7xl">
            Marquage textile et broderie pour vos vêtements professionnels.
          </h1>
          <div className="luxury-rule mt-7 max-w-xl" />
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/82 md:text-xl">
            Les Tontons Marqueurs personnalisent vos t-shirts, polos, pulls, vestes, pantalons et vêtements de chantier
            avec un rendu propre, durable et professionnel.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/devis" variant="gold" size="lg">
              Demander un devis
              <ArrowRight size={19} />
            </Button>
            <Button href="/boutique" variant="light" size="lg">
              Découvrir les vêtements
            </Button>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {badges.map(({ label, icon: Icon }) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-black backdrop-blur">
                <Icon size={17} className="text-gold" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
