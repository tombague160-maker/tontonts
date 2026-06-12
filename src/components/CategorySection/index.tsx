import Link from "next/link";
import { BriefcaseBusiness, CalendarHeart, Factory, GraduationCap, Handshake, Trophy } from "lucide-react";

const categories = [
  { label: "T-shirts", href: "/catalogue", color: "#F4B51E" },
  { label: "Polos", href: "/catalogue", color: "#2E8B78" },
  { label: "Sweats", href: "/catalogue", color: "#E9573F" },
  { label: "Vestes", href: "/catalogue", color: "#13284A" },
  { label: "Casquettes", href: "/catalogue", color: "#D8C6A3" },
  { label: "Vêtements de travail", href: "/catalogue", color: "#65748B" }
];

const audiences = [
  { label: "Entreprises", icon: BriefcaseBusiness },
  { label: "Artisans", icon: Factory },
  { label: "Associations", icon: Handshake },
  { label: "Clubs sportifs", icon: Trophy },
  { label: "Événements", icon: CalendarHeart },
  { label: "Écoles et collectivités", icon: GraduationCap }
];

export function CategorySection() {
  return (
    <div className="grid gap-12">
      <div>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase text-coral">Catégories populaires</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-ink md:text-4xl">
              Les textiles les plus demandés
            </h2>
          </div>
          <Link href="/catalogue" className="font-bold text-ink underline decoration-gold decoration-4 underline-offset-4">
            Voir tout le catalogue
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.label}
              href={category.href}
              className="group flex items-center justify-between rounded-lg border border-ink/10 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="font-display text-xl font-extrabold text-ink">{category.label}</span>
              <span className="h-11 w-11 rounded-md" style={{ backgroundColor: category.color }} />
            </Link>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-bold uppercase text-coral">Pour qui ?</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-ink md:text-4xl">
          Des textiles personnalisés pour chaque équipe
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-4 rounded-lg border border-ink/10 bg-white p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-gold/20 text-ink">
                <Icon size={22} />
              </span>
              <span className="font-bold text-ink">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
