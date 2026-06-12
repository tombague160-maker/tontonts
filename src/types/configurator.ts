import type { MarkingZoneId, ProductView } from "@/types/product";

export type LogoTransform = {
  x: number;
  y: number;
  size: number;
  rotation: number;
};

export type SceneViewPreset = ProductView;

export type LogoPlacement = {
  id: MarkingZoneId;
  label: string;
  help: string;
};
