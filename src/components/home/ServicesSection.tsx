import { ArrowRight, BriefcaseBusiness, HardHat, Palette, Shirt, Sparkles, Users } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

const services = [
  {
    title: "Broderie textile",
    text: "Un rendu élégant, durable et professionnel pour vos polos, vestes, pulls et vêtements d’entreprise.",
    icon: Sparkles
  },
  {
    title: "Marquage textile",
    text: "Une solution idéale pour personnaliser vos t-shirts, sweats, vestes ou tenues d’équipe avec votre logo.",
    icon: Palette
  },
  {
    title: "T-shirts, polos et sweats",
    text: "Des textiles simples à porter, adaptés aux équipes, associations, événements et opérations commerciales.",
    icon: Shirt
  },
  {
    title: "Vêtements professionnels",
    text: "Des supports adaptés aux entreprises, artisans, commerçants, restaurateurs et équipes terrain.",
    icon: BriefcaseBusiness
  },
  {
    title: "Vestes de chantier",
    text: "Des vestes et tenues plus robustes pour chantiers, ateliers, livraisons et métiers exposés.",
    icon: HardHat
  },
  {
    title: "Textile équipe & événement",
    text: "Des séries cohérentes pour clubs, associations, salons, staff, écoles et collectivités.",
    icon: Users
  }
];

export function ServicesSection() {
  return (
    <AnimatedSection className="section-shell py-20" id="services">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <SectionTitle eyebrow="Services" title="Broderie, marquage et vêtements personnalisés.">
          <p>
            Une offre claire pour transformer votre logo en vêtement professionnel, avec conseil sur la technique,
            l’emplacement et le textile.
          </p>
        </SectionTitle>
        <Button href="/devis" variant="secondary" className="shrink-0">
          Préparer mon projet
          <ArrowRight size={17} />
        </Button>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map(({ title, text, icon: Icon }) => (
          <article key={title} className="group rounded-lg border border-ink/10 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gold/16 text-ink transition group-hover:bg-ink group-hover:text-white">
              <Icon size={23} />
            </span>
            <h3 className="mt-5 font-display text-3xl font-bold text-ink">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-ink/66">{text}</p>
            <Button href="/devis" variant="ghost" className="mt-4 px-0">
              Demander un devis
              <ArrowRight size={16} />
            </Button>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
