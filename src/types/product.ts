export type ProductCategory =
  | "t-shirts"
  | "pulls"
  | "polos"
  | "sweats"
  | "vestes"
  | "pantalons"
  | "chantier"
  | "casquettes"
  | "sacs"
  | "travail"
  | "evenementiel";

export type ProductGender = "homme" | "femme" | "enfant" | "unisexe";

export type ProductUse = "entreprise" | "sport" | "evenement" | "travail" | "association";

export type ProductView = "face" | "dos" | "cote";

export type MarkingTechnique =
  | "impression-numerique"
  | "flocage"
  | "broderie"
  | "serigraphie"
  | "transfert";

export type MarkingZoneId =
  | "coeur"
  | "poitrine"
  | "dos-grand-format"
  | "manche-gauche"
  | "manche-droite"
  | "casquette-face"
  | "casquette-cote"
  | "cuisse"
  | "poche";

export type GarmentColor = {
  id: string;
  label: string;
  hex: string;
  textColor: "clair" | "fonce";
};

export type MarkingZone = {
  id: MarkingZoneId;
  label: string;
  view: ProductView;
  recommendation: string;
  defaultTransform: {
    x: number;
    y: number;
    size: number;
    rotation: number;
  };
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: ProductCategory;
  description: string;
  basePrice: number;
  colors: GarmentColor[];
  sizes: string[];
  gender: ProductGender[];
  uses: ProductUse[];
  images: {
    main: string;
    gallery?: string[];
  };
  markingZones: MarkingZoneId[];
  techniques: MarkingTechnique[];
  mockupType: "tshirt" | "polo" | "sweat" | "jacket" | "cap" | "bag" | "workwear" | "event";
  fastDelay: boolean;
  badge?: string;
  rating?: number;
};

export type CatalogFilter = {
  category: ProductCategory | "tous";
  color: string | "toutes";
  gender: ProductGender | "tous";
  use: ProductUse | "tous";
  technique?: MarkingTechnique | "toutes";
  maxBudget: number;
  fastDelay: boolean;
};
