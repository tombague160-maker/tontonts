"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { markingTechniques, markingZones } from "@/data/products";
import { getTotalQuantity, useConfiguratorStore } from "@/store/configuratorStore";
import type { Product } from "@/types/product";

export function QuoteForm({ product }: { product: Product }) {
  const [sent, setSent] = useState(false);
  const { sizeBreakdown, selectedPlacements, technique, logoName, customText } = useConfiguratorStore();
  const quantity = getTotalQuantity(sizeBreakdown);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-mint/25 bg-mint/10 p-6 text-ink">
        <CheckCircle2 className="text-mint" size={34} />
        <h2 className="mt-4 font-display text-2xl font-extrabold">
          Merci, votre demande a bien été envoyée.
        </h2>
        <p className="mt-2 leading-7 text-ink/72">
          Les Tontons Marqueurs reviennent vers vous rapidement avec un devis personnalisé.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
      <div>
        <p className="text-sm font-bold uppercase text-coral">Demande de devis</p>
        <h2 className="mt-1 font-display text-3xl font-extrabold text-ink">
          Recevoir un devis précis
        </h2>
        <p className="mt-2 text-sm leading-6 text-ink/68">
          Le récapitulatif du configurateur est joint à votre demande pour faciliter la réponse.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-ink">
          Nom
          <input required className="rounded-md border border-ink/14 px-3 py-3 font-normal" name="nom" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Prénom
          <input required className="rounded-md border border-ink/14 px-3 py-3 font-normal" name="prenom" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Entreprise ou association
          <input className="rounded-md border border-ink/14 px-3 py-3 font-normal" name="entreprise" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Email
          <input required type="email" className="rounded-md border border-ink/14 px-3 py-3 font-normal" name="email" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Téléphone
          <input type="tel" className="rounded-md border border-ink/14 px-3 py-3 font-normal" name="telephone" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Délai souhaité
          <select className="rounded-md border border-ink/14 px-3 py-3 font-normal" name="delai">
            <option>Standard</option>
            <option>Délai rapide si possible</option>
            <option>Date précise à indiquer en commentaire</option>
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-bold text-ink">
        Commentaire
        <textarea
          className="min-h-28 rounded-md border border-ink/14 px-3 py-3 font-normal"
          name="commentaire"
          placeholder="Précisez votre projet, votre événement, vos contraintes ou vos questions."
        />
      </label>

      <div className="rounded-lg bg-paper p-4 text-sm leading-7 text-ink/72">
        <strong className="text-ink">Récapitulatif :</strong> {product.name}, {quantity} pièce(s),
        technique {markingTechniques[technique]}, emplacements{" "}
        {selectedPlacements.map((placement) => markingZones[placement].label).join(", ")}.
        {logoName ? ` Fichier : ${logoName}.` : " Aucun fichier importé pour le moment."}
        {customText ? ` Texte ajouté : ${customText}.` : ""}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-md bg-coral px-5 py-4 font-bold text-white shadow-lift transition hover:bg-[#C94330]"
      >
        <Send size={18} />
        Envoyer ma demande
      </button>
    </form>
  );
}
