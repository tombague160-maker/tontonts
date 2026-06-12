"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Vêtements", href: "/boutique" },
  { label: "Personnalisation", href: "/personnaliser/tshirt" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Contact", href: "/contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/92 backdrop-blur-xl">
      <div className="section-shell flex min-h-[72px] items-center justify-between gap-4 md:min-h-20 md:gap-6">
        <Link href="/" aria-label="Accueil Les Tontons Marqueurs" className="flex shrink-0 items-center">
          {/* Remplacer ce fichier par le logo officiel fourni par LES TONTONS MARQUEURS. */}
          <Image
            src="/logo/logo-les-tontons-marqueurs.png"
            alt="LES TONTONS MARQUEURS"
            width={178}
            height={105}
            priority
            className="h-12 w-auto object-contain sm:h-14 md:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-bold text-ink xl:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-coral">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button href="/devis" variant="primary">
            <FileText size={18} />
            Demander un devis
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-ink/15 bg-white/50 text-ink shadow-soft xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-ink/10 bg-paper/98 shadow-lift xl:hidden">
          <nav className="section-shell grid max-h-[calc(100vh-72px)] gap-1 overflow-y-auto py-4 text-base font-bold text-ink">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3.5 hover:bg-mist"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/devis" variant="gold" className="mt-2 w-full" onClick={() => setOpen(false)}>
              <FileText size={18} />
              Demander un devis
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
