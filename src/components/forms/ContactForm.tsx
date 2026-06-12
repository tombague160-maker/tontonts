"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="rounded-lg bg-white p-6 shadow-soft"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-ink">
          Prénom
          <input className="rounded-md border border-ink/12 px-4 py-3" name="prenom" required />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Nom
          <input className="rounded-md border border-ink/12 px-4 py-3" name="nom" required />
        </label>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-ink">
          Email
          <input className="rounded-md border border-ink/12 px-4 py-3" type="email" name="email" required />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Téléphone
          <input className="rounded-md border border-ink/12 px-4 py-3" name="telephone" />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-bold text-ink">
        Message
        <textarea
          className="min-h-36 rounded-md border border-ink/12 px-4 py-3"
          name="message"
          placeholder="Décrivez votre projet, le type de textile, les quantités ou votre délai."
          required
        />
      </label>

      {sent ? (
        <p className="mt-4 rounded-md bg-mint/12 p-3 text-sm font-bold text-ink">
          Merci, votre message est prêt à être transmis. Le branchement réel se fera via une route API ou un outil de devis.
        </p>
      ) : null}

      <Button type="submit" variant="primary" className="mt-5 w-full sm:w-auto">
        <Send size={17} />
        Envoyer le message
      </Button>
    </form>
  );
}
