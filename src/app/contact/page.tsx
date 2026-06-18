import { Mail, MapPin, Phone } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="section-shell py-14">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">Contact</p>
          <h1 className="mt-3 font-display text-5xl font-bold leading-tight text-ink md:text-6xl">
            Une question sur un textile, un logo ou un délai ?
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink/68">
            Les Tontons Marqueurs vous accompagnent pour choisir le bon support, la bonne technique
            et le bon niveau de finition.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-5">
            <div className="rounded-lg bg-white p-6 shadow-soft">
              <Mail className="text-coral" size={28} />
              <h2 className="mt-4 font-display text-2xl font-bold text-ink">Email</h2>
              <p className="mt-2 text-ink/68">contact@lestontonsmarqueurs.fr</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-soft">
              <Phone className="text-gold" size={28} />
              <h2 className="mt-4 font-display text-2xl font-bold text-ink">Téléphone</h2>
              <p className="mt-2 text-ink/68">Téléphone à compléter</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-soft">
              <MapPin className="text-mint" size={28} />
              <h2 className="mt-4 font-display text-2xl font-bold text-ink">Atelier</h2>
              <p className="mt-2 text-ink/68">Production professionnelle et livraison possible.</p>
            </div>
          </div>
          <ContactForm />
        </div>

        <div className="mt-10 rounded-lg bg-ink p-8 text-white shadow-soft">
          <h2 className="font-display text-4xl font-bold">Vous avez déjà votre logo ?</h2>
          <p className="mt-3 max-w-2xl text-white/72">Envoyez-le dans le formulaire ou préparez votre aperçu textile réaliste.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/personnaliser" variant="gold">Préparer mon aperçu</Button>
            <Button href="/devis" variant="light">Demander un devis</Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
