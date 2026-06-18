import Image from "next/image";
import { ArrowRight, FileText, Star } from "lucide-react";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/formatPrice";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[1.18] overflow-hidden bg-mist">
        <Image
          src={product.images.main}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
        {product.badge ? (
          <Badge tone="white" className="absolute left-4 top-4">
            {product.badge}
          </Badge>
        ) : null}
      </div>

      <div className="grid gap-4 p-5">
        <div>
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-black uppercase text-coral">{product.category.replace("-", " ")}</p>
            {product.rating ? (
              <span className="inline-flex items-center gap-1 text-sm font-black text-ink">
                <Star size={15} className="fill-gold text-gold" />
                {product.rating.toFixed(1)}
              </span>
            ) : null}
          </div>
          <h2 className="mt-2 font-display text-xl font-black text-ink">{product.name}</h2>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink/66">{product.description}</p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="font-black text-ink">à partir de {formatPrice(product.basePrice)}</span>
          <div className="flex -space-x-1">
            {product.colors.slice(0, 5).map((color) => (
              <span
                key={color.id}
                className="h-5 w-5 rounded-full border border-white shadow"
                style={{ backgroundColor: color.hex }}
                title={color.label}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <Button href={`/personnaliser/${product.id}`} variant="primary">
            Personnaliser
            <ArrowRight size={16} />
          </Button>
          <Button href="/devis" variant="secondary">
            <FileText size={16} />
            Devis rapide
          </Button>
        </div>
      </div>
    </article>
  );
}
