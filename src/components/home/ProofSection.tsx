import Image from "next/image";
import { ArrowRight, CheckCircle2, FileCheck2, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/Button";

const reassurances = [
  "Vérification des fichiers",
  "BAT avant production",
  "Conseils sur le marquage",
  "Tarifs selon quantité",
  "Délais adaptés",
  "Production professionnelle"
];

export function ProofSection() {
  return (
    <AnimatedSection className="section-shell py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="relative min-h-[420px] overflow-hidden rounded-lg shadow-soft">
          <Image src="/images/workshop.jpg" alt="Atelier de marquage textile" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white/92 p-5 shadow-soft backdrop-blur">
            <p className="flex items-center gap-2 text-sm font-black uppercase text-coral">
              <FileCheck2 size={18} />
              Votre fichier est vérifié avant production.
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase text-coral">Réassurance</p>
          <h2 className="mt-2 font-display text-3xl font-black text-ink md:text-4xl">
            Un accompagnement humain pour un résultat professionnel.
          </h2>
          <p className="mt-4 text-lg leading-8 text-ink/68">
            Idéal pour entreprises, associations, clubs, événements et vêtements de travail.
            Les fichiers sont vérifiés, les contraintes de marquage sont expliquées et le prix
            est confirmé avant lancement.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {reassurances.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-soft">
                <CheckCircle2 className="text-mint" size={21} />
                <span className="font-black text-ink">{item}</span>
              </div>
            ))}
          </div>
          <Button href="/devis" variant="primary" size="lg" className="mt-7">
            <ShieldCheck size={19} />
            Demander un avis sur mon fichier
            <ArrowRight size={19} />
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
