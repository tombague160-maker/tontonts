import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

const items = [
  {
    title: "Broderie & finition premium",
    image: "/images/products/polo-product.jpg",
    text: "Un rendu durable et qualitatif pour polos, vestes et vêtements professionnels."
  },
  {
    title: "Marquage textile précis",
    image: "/images/products/tshirt-product.jpg",
    text: "Des techniques adaptées au visuel, à la quantité, au textile et au délai."
  },
  {
    title: "Production accompagnée",
    image: "/images/company-textile.jpg",
    text: "Un doute sur votre logo ? Envoyez-le, nous le vérifions avant production."
  }
];

export function SavoirFaire() {
  return (
    <AnimatedSection id="techniques" className="section-shell py-20">
      <SectionTitle eyebrow="Broderie & marquage" title="Une présentation premium, pensée pour inspirer confiance.">
        <p>
          Chaque projet est guidé par le textile, le logo, l’usage et la quantité. L’objectif reste simple :
          obtenir un vêtement personnalisé propre, lisible et prêt à être porté.
        </p>
      </SectionTitle>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="group overflow-hidden rounded-lg bg-white shadow-soft">
            <div className="relative aspect-[0.92] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/72 via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-3xl font-bold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/66">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
