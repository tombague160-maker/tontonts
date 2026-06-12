"use client";

import { ChangeEvent, useRef } from "react";
import { ImagePlus, Replace, Trash2, UploadCloud } from "lucide-react";
import { useConfiguratorStore } from "@/store/configuratorStore";

const acceptedFiles = ".png,.jpg,.jpeg,.svg,.pdf";

function isPreviewable(file: File) {
  return file.type.startsWith("image/") || file.name.toLowerCase().endsWith(".svg");
}

export function LogoUploader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { logoName, setLogo, clearLogo } = useConfiguratorStore();

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const previewable = isPreviewable(file);
    const url = previewable ? URL.createObjectURL(file) : null;
    setLogo(url, file.name, previewable);
  }

  return (
    <div className="rounded-lg border border-dashed border-ink/25 bg-paper p-4">
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-ink shadow-sm">
          <UploadCloud size={22} />
        </span>
        <div>
          <h3 className="font-display text-lg font-extrabold text-ink">Importez votre logo ou votre visuel</h3>
          <p className="mt-1 text-sm leading-6 text-ink/68">
            PNG transparent recommandé. JPG, JPEG, SVG et PDF acceptés. Vérification possible avant production.
          </p>
        </div>
      </div>

      <input ref={inputRef} type="file" accept={acceptedFiles} className="hidden" onChange={handleFile} />

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-4 py-3 text-sm font-bold text-white transition hover:bg-ink-deep"
        >
          {logoName ? <Replace size={17} /> : <ImagePlus size={17} />}
          {logoName ? "Remplacer le visuel" : "Importer un fichier"}
        </button>
        <button
          type="button"
          onClick={clearLogo}
          disabled={!logoName}
          className="inline-flex items-center justify-center gap-2 rounded-md border border-ink/15 px-4 py-3 text-sm font-bold text-ink transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-45"
        >
          <Trash2 size={17} />
          Supprimer
        </button>
      </div>

      {logoName ? (
        <p className="mt-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-ink">
          Fichier chargé : <span className="text-ink/70">{logoName}</span>
        </p>
      ) : null}
    </div>
  );
}
