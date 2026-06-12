"use client";

import Image from "next/image";
import { ChangeEvent, DragEvent, useRef, useState } from "react";
import { ImagePlus, Replace, Trash2, UploadCloud } from "lucide-react";
import { useConfiguratorStore } from "@/store/configuratorStore";
import { Button } from "@/components/ui/Button";

const acceptedFiles = ".png,.jpg,.jpeg,.svg,.pdf";

function isPreviewable(file: File) {
  return file.type.startsWith("image/") || file.name.toLowerCase().endsWith(".svg");
}

export function LogoUploader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const { logoUrl, logoName, logoPreviewable, setLogo, clearLogo } = useConfiguratorStore();

  function applyFile(file: File) {
    const previewable = isPreviewable(file);
    const url = previewable ? URL.createObjectURL(file) : null;
    setLogo(url, file.name, previewable);
  }

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      applyFile(file);
    }
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragActive(false);
    const file = event.dataTransfer.files?.[0];

    if (file) {
      applyFile(file);
    }
  }

  return (
    <section
      className={`rounded-lg border border-dashed p-5 transition ${
        dragActive ? "border-gold bg-gold/10" : "border-ink/25 bg-paper"
      }`}
      onDragOver={(event) => {
        event.preventDefault();
        setDragActive(true);
      }}
      onDragLeave={() => setDragActive(false)}
      onDrop={handleDrop}
    >
      <div className="flex gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white text-ink shadow-sm">
          <UploadCloud size={22} />
        </span>
        <div>
          <h3 className="font-display text-2xl font-bold text-ink">Importez votre logo ou votre visuel</h3>
          <p className="mt-1 text-sm leading-6 text-ink/68">
            Glissez votre fichier ici ou importez-le depuis votre ordinateur. PNG transparent recommandé.
            Votre visuel sera vérifié avant production et un BAT peut être validé avant marquage.
          </p>
        </div>
      </div>

      <input ref={inputRef} type="file" accept={acceptedFiles} className="hidden" onChange={handleFile} />

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Button type="button" onClick={() => inputRef.current?.click()} variant="primary">
          {logoName ? <Replace size={17} /> : <ImagePlus size={17} />}
          {logoName ? "Remplacer le fichier" : "Importer mon logo"}
        </Button>
        <Button type="button" onClick={clearLogo} variant="secondary" disabled={!logoName}>
          <Trash2 size={17} />
          Supprimer le logo
        </Button>
      </div>

      {logoName ? (
        <div className="mt-4 flex items-center gap-3 rounded-md bg-white p-3 shadow-sm">
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md bg-mist">
            {logoUrl && logoPreviewable ? (
              <Image src={logoUrl} alt="Miniature du visuel importé" fill className="object-contain p-1" unoptimized />
            ) : (
              <span className="text-xs font-black text-ink/60">PDF</span>
            )}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-black text-ink">{logoName}</p>
            <p className="text-xs font-semibold text-ink/60">
              Pas sûr de votre fichier ? Envoyez-le quand même, nous le vérifierons avant production.
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
