"use client";

import { AlignCenter, RotateCcw, RotateCcwSquare, RotateCwSquare, ZoomIn, ZoomOut } from "lucide-react";
import { useConfiguratorStore } from "@/store/configuratorStore";
import { Button } from "@/components/ui/Button";

export function LogoControls() {
  const {
    activePlacement,
    transforms,
    logoOpacity,
    updateTransform,
    centerActiveLogo,
    resetActiveLogo,
    scaleActiveLogo,
    rotateActiveLogo,
    setLogoOpacity,
    clearLogo
  } = useConfiguratorStore();
  const transform = transforms[activePlacement];

  return (
    <section className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
      <h2 className="font-display text-xl font-black text-ink">Positionner le logo</h2>
      <div className="mt-4 grid gap-4">
        <label className="grid gap-2 text-sm font-black text-ink">
          Position horizontale
          <input
            type="range"
            min="18"
            max="82"
            value={transform.x}
            onChange={(event) => updateTransform(activePlacement, { x: Number(event.target.value) })}
            className="range-input"
          />
        </label>
        <label className="grid gap-2 text-sm font-black text-ink">
          Position verticale
          <input
            type="range"
            min="18"
            max="82"
            value={transform.y}
            onChange={(event) => updateTransform(activePlacement, { y: Number(event.target.value) })}
            className="range-input"
          />
        </label>
        <label className="grid gap-2 text-sm font-black text-ink">
          Taille
          <input
            type="range"
            min="42"
            max="230"
            value={transform.size}
            onChange={(event) => updateTransform(activePlacement, { size: Number(event.target.value) })}
            className="range-input"
          />
        </label>
        <label className="grid gap-2 text-sm font-black text-ink">
          Rotation
          <input
            type="range"
            min="-60"
            max="60"
            value={transform.rotation}
            onChange={(event) => updateTransform(activePlacement, { rotation: Number(event.target.value) })}
            className="range-input"
          />
        </label>
        <label className="grid gap-2 text-sm font-black text-ink">
          Opacité
          <input
            type="range"
            min="0.2"
            max="1"
            step="0.05"
            value={logoOpacity}
            onChange={(event) => setLogoOpacity(Number(event.target.value))}
            className="range-input"
          />
        </label>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <Button type="button" variant="secondary" onClick={centerActiveLogo}><AlignCenter size={16} />Centrer</Button>
        <Button type="button" variant="secondary" onClick={resetActiveLogo}><RotateCcw size={16} />Taille reco.</Button>
        <Button type="button" variant="secondary" onClick={() => scaleActiveLogo(12)}><ZoomIn size={16} />Agrandir</Button>
        <Button type="button" variant="secondary" onClick={() => scaleActiveLogo(-12)}><ZoomOut size={16} />Réduire</Button>
        <Button type="button" variant="secondary" onClick={() => rotateActiveLogo(-8)}><RotateCcwSquare size={16} />Rotation gauche</Button>
        <Button type="button" variant="secondary" onClick={() => rotateActiveLogo(8)}><RotateCwSquare size={16} />Rotation droite</Button>
      </div>
      <Button type="button" variant="secondary" onClick={clearLogo} className="mt-3 w-full">
        Supprimer le logo
      </Button>
    </section>
  );
}
