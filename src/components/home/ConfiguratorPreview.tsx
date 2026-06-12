import { ArrowRight, ImageUp } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PhotoTextilePreview } from "@/components/configurator/PhotoTextilePreview";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ConfiguratorPreview() {
  return (
    <AnimatedSection className="section-shell py-20" id="personnalisation">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div>
          <SectionTitle eyebrow="Personnalisation textile" title="Visualisez votre logo sur un vrai t-shirt.">
            <p>
              Choisissez l’emplacement : côté cœur, centre poitrine ou dos. L’aperçu photo permet de préparer
              un devis clair avant validation du rendu et lancement de la production.
            </p>
          </SectionTitle>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/personnaliser/tshirt" variant="primary" size="lg">
              <ImageUp size={19} />
              Envoyer mon logo
            </Button>
            <Button href="/boutique" variant="secondary" size="lg">
              Découvrir les vêtements
              <ArrowRight size={19} />
            </Button>
          </div>
        </div>
        <PhotoTextilePreview />
      </div>
    </AnimatedSection>
  );
}
