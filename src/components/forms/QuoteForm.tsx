"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { featuredProduct, garmentColors, markingTechniques, markingZones } from "@/data/products";
import { calculatePrice } from "@/lib/calculatePrice";
import { formatPrice } from "@/lib/formatPrice";
import { getTotalQuantity, useConfiguratorStore } from "@/store/configuratorStore";
import type { Product } from "@/types/product";
import { Button } from "@/components/ui/Button";

const quoteSchema = z.object({
  prenom: z.string().min(2, "Prénom requis"),
  nom: z.string().min(2, "Nom requis"),
  entreprise: z.string().optional(),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(6, "Téléphone requis"),
  textile: z.string().min(2),
  quantite: z.coerce.number().min(1),
  tailles: z.string().min(1),
  technique: z.string().min(1),
  delai: z.string().min(1),
  message: z.string().optional()
});

type QuoteFormInput = z.input<typeof quoteSchema>;

export function QuoteForm({ product = featuredProduct }: { product?: Product }) {
  const [sent, setSent] = useState(false);
  const {
    colorId,
    technique,
    selectedPlacements,
    activePlacement,
    transforms,
    sizeBreakdown,
    logoName
  } = useConfiguratorStore();
  const quantity = getTotalQuantity(sizeBreakdown);
  const color = garmentColors.find((item) => item.id === colorId)?.label ?? "Blanc";
  const logoSize = selectedPlacements.reduce(
    (max, placement) => Math.max(max, transforms[placement]?.size ?? transforms[activePlacement].size),
    transforms[activePlacement].size
  );
  const price = calculatePrice({
    product,
    quantity,
    technique,
    placementCount: selectedPlacements.length,
    logoSize
  });
  const sizeSummary = useMemo(
    () =>
      Object.entries(sizeBreakdown)
        .filter(([, value]) => value > 0)
        .map(([size, value]) => `${size} : ${value}`)
        .join(", ") || "À préciser",
    [sizeBreakdown]
  );

  const form = useForm<QuoteFormInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      textile: product.name,
      quantite: quantity || 1,
      tailles: sizeSummary,
      technique: markingTechniques[technique],
      delai: "Standard"
    }
  });

  function handleSubmit() {
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-mint/25 bg-mint/10 p-7 text-ink">
        <CheckCircle2 className="text-mint" size={38} />
        <h2 className="mt-4 font-display text-2xl font-black">
          Merci, votre demande a bien été envoyée.
        </h2>
        <p className="mt-2 leading-7 text-ink/72">
          Les Tontons Marqueurs reviennent vers vous rapidement avec un devis personnalisé.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="grid gap-5 rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
      <div>
        <p className="text-sm font-black uppercase text-coral">Demande de devis</p>
        <h2 className="mt-1 font-display text-3xl font-black text-ink">Recevoir un devis précis</h2>
        <p className="mt-2 text-sm leading-6 text-ink/68">
          Les informations du configurateur sont reprises automatiquement pour accélérer la réponse.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-black text-ink">
          Prénom
          <input {...form.register("prenom")} className="rounded-md border border-ink/14 px-3 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-black text-ink">
          Nom
          <input {...form.register("nom")} className="rounded-md border border-ink/14 px-3 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-black text-ink">
          Entreprise
          <input {...form.register("entreprise")} className="rounded-md border border-ink/14 px-3 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-black text-ink">
          Email
          <input {...form.register("email")} type="email" className="rounded-md border border-ink/14 px-3 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-black text-ink">
          Téléphone
          <input {...form.register("telephone")} type="tel" className="rounded-md border border-ink/14 px-3 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-black text-ink">
          Délai souhaité
          <select {...form.register("delai")} className="rounded-md border border-ink/14 px-3 py-3 font-normal">
            <option>Standard</option>
            <option>Délai rapide si possible</option>
            <option>Date précise à indiquer</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-black text-ink">
          Type de textile
          <input {...form.register("textile")} className="rounded-md border border-ink/14 px-3 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-black text-ink">
          Quantité
          <input {...form.register("quantite")} type="number" min={1} className="rounded-md border border-ink/14 px-3 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-black text-ink">
          Tailles
          <input {...form.register("tailles")} className="rounded-md border border-ink/14 px-3 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-black text-ink">
          Technique souhaitée
          <input {...form.register("technique")} className="rounded-md border border-ink/14 px-3 py-3 font-normal" />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-black text-ink">
        Message
        <textarea
          {...form.register("message")}
          className="min-h-28 rounded-md border border-ink/14 px-3 py-3 font-normal"
          placeholder="Précisez votre projet, votre événement ou vos contraintes."
        />
      </label>

      <div className="rounded-lg bg-paper p-4 text-sm leading-7 text-ink/72">
        <strong className="text-ink">Récapitulatif configurateur :</strong> {product.name}, couleur {color},
        {quantity || 1} pièce(s), tailles {sizeSummary}, technique {markingTechniques[technique]},
        emplacements {selectedPlacements.map((placement) => markingZones[placement].label).join(", ")}.
        {logoName ? ` Fichier importé : ${logoName}.` : " Aucun fichier importé pour le moment."}
        Prix indicatif : {formatPrice(price.total)}.
      </div>

      <p className="text-sm text-ink/60">Le branchement réel pourra ensuite envoyer cette demande vers un email, un CRM, Odoo ou une API.</p>

      <Button type="submit" variant="gold" size="lg">
        <Send size={18} />
        Envoyer ma demande
      </Button>
    </form>
  );
}
