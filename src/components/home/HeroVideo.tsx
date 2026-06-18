import Image from "next/image";
import { ArrowRight, BadgeCheck, FileCheck2, Handshake, ImageUp, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const badges = [
  { label: "Broderie soignée", icon: Sparkles },
  { label: "BAT possible", icon: FileCheck2 },
  { label: "Aperçu avant devis", icon: ImageUp },
  { label: "Accompagnement humain", icon: Handshake }
];

export function HeroVideo() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-deep text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-textile.jpg"
          alt="Atelier textile avec vêtements personnalisés"
          fill
          priority
          className="object-cover opacity-90"
          sizes="100vw"
        />
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-90"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-textile.jpg"
          aria-hidden="true"
        >
          <source src="/videos/broderie-machine.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 media-overlay" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink-deep to-transparent" />

      <div className="section-shell relative grid min-h-[86vh] content-center py-24">
        <div className="max-w-4xl">
          <Badge tone="white" className="mb-7">
            <BadgeCheck size={16} />
            Broderie, flocage et marquage textile
          </Badge>
          <h1 className="font-display text-5xl font-bold leading-[0.96] md:text-7xl">
            Vos textiles, votre marque, notre savoir-faire.
          </h1>
          <div className="luxury-rule mt-7 max-w-xl" />
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/84 md:text-xl">
            Broderie, flocage et marquage textile pour entreprises, associations, clubs et événements.
            On marque vos vêtements avec soin, du premier aperçu jusqu’à la production.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/personnaliser" variant="gold" size="lg">
              Personnaliser
              <ArrowRight size={19} />
            </Button>
            <Button href="/realisations" variant="light" size="lg">
              Voir nos réalisations
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
