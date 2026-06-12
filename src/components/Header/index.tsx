"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Catalogue", href: "/catalogue" },
  { label: "Configurateur", href: "/produits/t-shirt-personnalise-unisexe" },
  { label: "Devis", href: "/produits/t-shirt-personnalise-unisexe#devis" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/92 backdrop-blur-xl">
      <div className="section-shell flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Accueil LES TONTONS MARQUEURS">
          <Image
            src="/logo/logo-les-tontons-marqueurs.png"
            alt="LES TONTONS MARQUEURS"
            width={238}
            height={88}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-ink lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-coral">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/produits/t-shirt-personnalise-unisexe"
            className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-bold text-white shadow-lift transition hover:bg-ink-deep"
          >
            <ShoppingBag size={18} />
            Créer mon vêtement
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-ink/15 text-ink lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-ink/10 bg-white lg:hidden">
          <nav className="section-shell grid gap-2 py-4 text-base font-semibold text-ink">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-3 hover:bg-mist"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
