import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { RealisationGallery } from "@/components/realisations/RealisationGallery";

export default function RealisationsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-ink-deep py-16 text-white md:py-24">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">Réalisations</p>
              <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
                30 inspirations textile pour imaginer votre marquage.
              </h1>
            </div>
            <p className="text-lg leading-8 text-white/76 md:text-xl md:leading-9">
              T-shirts entreprise, polos brodés, pantalons de travail, sweats d&apos;équipe, vestes de chantier et détails
              de marquage : une galerie pensée pour montrer la variété des supports possibles.
            </p>
          </div>
        </section>

        <RealisationGallery />

        <section className="section-shell pb-16">
          <div className="rounded-lg bg-ink p-6 text-white shadow-soft sm:p-8 md:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
                  Vous voulez un rendu similaire avec votre logo ?
                </h2>
                <p className="mt-3 max-w-2xl text-[16px] leading-8 text-white/74">
                  Envoyez votre visuel, choisissez le textile et recevez un devis clair avec accompagnement sur
                  l&apos;emplacement et la technique de marquage.
                </p>
              </div>
              <Button href="/personnaliser" variant="gold" size="lg">
                Préparer mon aperçu textile
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
