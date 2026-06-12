import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteForm } from "@/components/forms/QuoteForm";

export default function DevisPage() {
  return (
    <>
      <Header />
      <main className="bg-white py-14">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">Devis personnalisé</p>
            <h1 className="mt-3 font-display text-5xl font-bold leading-tight text-ink md:text-6xl">
              Parlez-nous de votre projet textile
            </h1>
            <p className="mt-5 text-lg leading-8 text-ink/68">
              Entreprise, association, club, collectivité ou événement : décrivez votre besoin,
              joignez votre fichier si vous l’avez déjà préparé, et nous revenons vers vous avec
              un devis clair.
            </p>
          </div>
          <QuoteForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
