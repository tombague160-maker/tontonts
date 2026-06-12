import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import type { Product } from "@/types/product";
import { formatPrice } from "@/utils/priceCalculator";

function ProductMiniature({ product }: { product: Product }) {
  const color = product.colors[0]?.hex ?? "#F8F8F4";

  if (product.mockupType === "cap") {
    return (
      <svg viewBox="0 0 320 220" className="h-full w-full" role="img" aria-label={product.name}>
        <path d="M63 136C80 76 128 50 184 65C222 75 244 103 253 135C219 125 177 121 139 125C111 128 85 132 63 136Z" fill={color} stroke="#13284A" strokeOpacity="0.2" strokeWidth="4"/>
        <path d="M242 128C280 126 305 138 314 156C278 158 250 154 226 144" fill="#F4B51E" opacity="0.9"/>
        <path d="M96 124C128 112 179 112 218 125" stroke="#081426" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round"/>
      </svg>
    );
  }

  if (product.mockupType === "bag") {
    return (
      <svg viewBox="0 0 320 260" className="h-full w-full" role="img" aria-label={product.name}>
        <path d="M103 81C108 37 134 23 160 23C187 23 212 38 217 81" stroke="#13284A" strokeOpacity="0.28" strokeWidth="10" fill="none" strokeLinecap="round"/>
        <path d="M74 76H246L266 235H54L74 76Z" fill={color} stroke="#13284A" strokeOpacity="0.18" strokeWidth="5"/>
        <rect x="112" y="122" width="96" height="42" rx="4" fill="#F4B51E" opacity="0.85"/>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 260" className="h-full w-full" role="img" aria-label={product.name}>
      <defs>
        <linearGradient id={`soft-${product.id}`} x1="0" x2="1">
          <stop stopColor="#ffffff" stopOpacity="0.42" />
          <stop offset="1" stopColor="#081426" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <path
        d="M108 45L137 28H184L213 45L276 74L247 131L218 119V232H101V119L72 131L44 74L108 45Z"
        fill={color}
        stroke="#13284A"
        strokeOpacity="0.18"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path d="M137 29C145 49 175 49 184 29" stroke="#13284A" strokeOpacity="0.18" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <path d="M105 47H215V232H105V47Z" fill={`url(#soft-${product.id})`} opacity="0.55"/>
      <rect x="130" y="102" width="61" height="32" rx="4" fill="#F4B51E" opacity="0.84"/>
    </svg>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="grid overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft">
      <div className="flex aspect-[1.18] items-center justify-center bg-mist p-5">
        <ProductMiniature product={product} />
      </div>
      <div className="grid gap-4 p-5">
        <div>
          <p className="text-xs font-bold uppercase text-coral">{product.category.replace("-", " ")}</p>
          <h2 className="mt-1 font-display text-xl font-extrabold text-ink">{product.name}</h2>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink/68">{product.description}</p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="font-bold text-ink">à partir de {formatPrice(product.basePrice)}</span>
          <div className="flex -space-x-1">
            {product.colors.slice(0, 5).map((color) => (
              <span
                key={color.id}
                className="h-5 w-5 rounded-full border border-ink/20"
                style={{ backgroundColor: color.hex }}
                title={color.label}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <Link
            href={product.slug === "t-shirt-personnalise-unisexe" ? `/produits/${product.slug}` : "/produits/t-shirt-personnalise-unisexe"}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-4 py-3 text-sm font-bold text-white transition hover:bg-ink-deep"
          >
            Personnaliser
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/produits/t-shirt-personnalise-unisexe#devis"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-ink/18 px-4 py-3 text-sm font-bold text-ink transition hover:bg-mist"
          >
            <FileText size={16} />
            Demander un devis
          </Link>
        </div>
      </div>
    </article>
  );
}
