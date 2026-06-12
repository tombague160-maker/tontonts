import { CheckCircle2, FileText, PackageCheck, Send, Shirt, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const steps = [
  {
    title: "Vous choisissez votre vêtement",
    text: "T-shirt, polo, pull, veste, pantalon, veste de chantier ou textile professionnel.",
    icon: Shirt
  },
  {
    title: "Vous envoyez votre logo ou votre idée",
    text: "Transmettez votre fichier, votre logo ou simplement votre besoin.",
    icon: Send
  },
  {
    title: "Nous préparons une proposition",
    text: "Les Tontons Marqueurs vous conseillent sur le textile, la technique et l’emplacement.",
    icon: FileText
  },
  {
    title: "Vous validez le rendu",
    text: "Le marquage ou la broderie est validé avant production.",
    icon: CheckCircle2
  },
  {
    title: "Nous lançons la personnalisation",
    text: "Les vêtements sont préparés avec soin, selon la quantité et le délai souhaités.",
    icon: Sparkles
  },
  {
    title: "Vous récupérez vos textiles",
    text: "Vos vêtements personnalisés sont prêts à être portés par votre équipe.",
    icon: PackageCheck
  }
];

export function HowItWorks() {
  return (
    <AnimatedSection className="section-shell py-16" id="processus">
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">Comment ça marche ?</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
            Un parcours simple, du logo au vêtement personnalisé.
          </h2>
        </div>
        <p className="text-lg leading-8 text-ink/68">
          Vous envoyez votre logo, nous vous accompagnons pour choisir le bon textile, le bon emplacement
          et la bonne technique de marquage.
        </p>
      </div>

      <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {steps.map(({ title, text, icon: Icon }, index) => (
          <article key={title} className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gold/18 text-ink">
                <Icon size={24} />
              </span>
              <span className="font-display text-3xl font-bold text-ink/12">0{index + 1}</span>
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-ink/65">{text}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
