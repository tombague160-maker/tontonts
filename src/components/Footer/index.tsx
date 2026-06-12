import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink-deep text-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Image
            src="/logo/logo-les-tontons-marqueurs.png"
            alt="LES TONTONS MARQUEURS"
            width={260}
            height={96}
            className="h-14 w-auto brightness-0 invert"
          />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/74">
            Vos vêtements personnalisés, simplement. Un accompagnement humain pour un résultat
            professionnel, du premier fichier au BAT avant production.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold">Navigation</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/76">
            <Link href="/catalogue" className="hover:text-gold">
              Catalogue
            </Link>
            <Link href="/produits/t-shirt-personnalise-unisexe" className="hover:text-gold">
              Configurateur textile
            </Link>
            <Link href="/produits/t-shirt-personnalise-unisexe#devis" className="hover:text-gold">
              Demander un devis
            </Link>
          </div>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/76">
            <span className="inline-flex items-center gap-2">
              <Mail size={17} />
              contact@lestontonsmarqueurs.fr
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone size={17} />
              Téléphone à compléter
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={17} />
              Atelier et livraison possible
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/55">
        © {new Date().getFullYear()} LES TONTONS MARQUEURS. Site de démarrage prêt à évoluer.
      </div>
    </footer>
  );
}
