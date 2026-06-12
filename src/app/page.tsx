import { Building2, CalendarDays, ChefHat, Factory, Handshake, Landmark, Shirt, Store, Trophy, UsersRound } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroVideo } from "@/components/home/HeroVideo";
import { PremiumIntro } from "@/components/home/PremiumIntro";
import { ServicesSection } from "@/components/home/ServicesSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CategorySection } from "@/components/home/CategorySection";
import { SavoirFaire } from "@/components/home/SavoirFaire";
import { ConfiguratorPreview } from "@/components/home/ConfiguratorPreview";
import { TrustSection } from "@/components/home/TrustSection";
import { RealisationGrid } from "@/components/home/RealisationGrid";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/AnimatedSection";

const audiences = [
  { label: "Entreprises", icon: Building2, text: "Renforcer votre image professionnelle au quotidien." },
  { label: "Artisans", icon: Factory, text: "Des tenues lisibles, solides et cohérentes sur le terrain." },
  { label: "Associations", icon: Handshake, text: "Créer une identité d’équipe simple à porter." },
  { label: "Clubs sportifs", icon: Trophy, text: "Sweats, t-shirts et marquages pour joueurs et staff." },
  { label: "Événements", icon: CalendarDays, text: "Textiles pour salons, rassemblements et opérations spéciales." },
  { label: "Collectivités", icon: Landmark, text: "Solutions claires pour écoles, services et équipes locales." },
  { label: "Restaurateurs", icon: ChefHat, text: "Polos, vestes et tabliers personnalisés pour le service." },
  { label: "Commerçants", icon: Store, text: "Une tenue identifiable et soignée pour l’accueil." },
  { label: "Créateurs de marque", icon: UsersRound, text: "Premières séries textiles avec rendu maîtrisé." }
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroVideo />
        <PremiumIntro />
        <ServicesSection />
        <HowItWorks />
        <CategorySection />
        <SavoirFaire />
        <ConfiguratorPreview />

        <AnimatedSection className="bg-white py-20">
          <div className="section-shell">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">Pour qui ?</p>
              <h2 className="mt-3 font-display text-4xl font-bold text-ink md:text-5xl">
                Des vêtements personnalisés pour toutes les équipes.
              </h2>
            </div>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {audiences.map(({ label, icon: Icon, text }) => (
                <div key={label} className="rounded-lg border border-ink/10 bg-paper p-5">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gold/18 text-ink">
                      <Icon size={24} />
                    </span>
                    <span className="font-display text-2xl font-bold text-ink">{label}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-ink/62">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <TrustSection />
        <RealisationGrid />

        <AnimatedSection className="section-shell py-16">
          <div className="rounded-lg bg-ink p-8 text-white shadow-soft md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">Vous avez déjà votre logo ?</p>
                <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
                  Envoyez-le et recevez un devis clair pour vos vêtements personnalisés.
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/72">
                  Nous vous accompagnons sur le textile, l’emplacement et la technique de marquage.
                </p>
              </div>
              <Button href="/devis" variant="gold" size="lg">
                <Shirt size={20} />
                Demander un devis
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
