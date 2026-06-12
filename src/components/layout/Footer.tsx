import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-ink-deep text-white">
      <div className="section-shell grid gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.9fr]">
        <div>
          <div className="inline-flex rounded-lg bg-paper px-4 py-3">
            {/* Remplacer ce fichier par le logo officiel fourni par LES TONTONS MARQUEURS. */}
            <Image
              src="/logo/logo-les-tontons-marqueurs.png"
              alt="LES TONTONS MARQUEURS"
              width={178}
              height={105}
              className="h-16 w-auto object-contain"
            />
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
            Marquage textile, broderie et vêtements personnalisables pour entreprises, associations,
            clubs, événements, artisans et équipes terrain.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold">Site</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/72">
            <Link href="/#services" className="hover:text-gold">Services</Link>
            <Link href="/boutique" className="hover:text-gold">Vêtements</Link>
            <Link href="/personnaliser/tshirt" className="hover:text-gold">Aperçu textile</Link>
            <Link href="/realisations" className="hover:text-gold">Réalisations</Link>
            <Link href="/devis" className="hover:text-gold">Demande de devis</Link>
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/72">
            <span className="inline-flex items-center gap-2"><Mail size={17} /> contact@lestontonsmarqueurs.fr</span>
            <span className="inline-flex items-center gap-2"><Phone size={17} /> Téléphone à compléter</span>
            <span className="inline-flex items-center gap-2"><MapPin size={17} /> Atelier et livraison possible</span>
          </div>
        </div>

        <div className="rounded-lg bg-white/8 p-5">
          <ShieldCheck className="text-gold" size={28} />
          <p className="mt-3 font-display text-2xl font-bold">Un doute sur votre logo ?</p>
          <p className="mt-2 text-sm leading-6 text-white/72">Envoyez-le, nous le vérifions.</p>
          <Button href="/devis" variant="gold" className="mt-4 w-full">
            Demander un devis
          </Button>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/52">
        © {new Date().getFullYear()} LES TONTONS MARQUEURS. Tous droits réservés.
      </div>
    </footer>
  );
}
