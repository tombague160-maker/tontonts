import type { GarmentColor, MarkingTechnique, MarkingZone, Product } from "@/types/product";

export const garmentColors: GarmentColor[] = [
  { id: "blanc", label: "Blanc", hex: "#F8F8F4", textColor: "fonce" },
  { id: "noir", label: "Noir", hex: "#111318", textColor: "clair" },
  { id: "gris", label: "Gris", hex: "#B9BDC4", textColor: "fonce" },
  { id: "bleu-marine", label: "Bleu marine", hex: "#13284A", textColor: "clair" },
  { id: "rouge", label: "Rouge", hex: "#B93432", textColor: "clair" },
  { id: "vert", label: "Vert", hex: "#2E6D56", textColor: "clair" },
  { id: "beige", label: "Beige", hex: "#D8C6A3", textColor: "fonce" }
];

export const markingTechniques: Record<MarkingTechnique, string> = {
  "impression-numerique": "Impression numérique",
  flocage: "Flocage",
  broderie: "Broderie",
  serigraphie: "Sérigraphie",
  transfert: "Transfert"
};

export const markingTechniqueDescriptions: Record<MarkingTechnique, string> = {
  "impression-numerique": "Idéale pour visuels colorés, photos et petites séries.",
  flocage: "Idéal pour texte, numéros, équipes et marquages nets.",
  broderie: "Rendu premium, durable, parfait pour polos et vêtements professionnels.",
  serigraphie: "Idéale pour grandes séries avec un coût unitaire optimisé.",
  transfert: "Polyvalent, précis et adapté à de nombreux textiles."
};

export const markingZones: Record<MarkingZone["id"], MarkingZone> = {
  coeur: {
    id: "coeur",
    label: "Coeur",
    view: "face",
    recommendation: "Petit logo côté coeur",
    defaultTransform: { x: 62, y: 38, size: 72, rotation: 0 }
  },
  poitrine: {
    id: "poitrine",
    label: "Poitrine centre",
    view: "face",
    recommendation: "Logo moyen centré",
    defaultTransform: { x: 50, y: 43, size: 126, rotation: 0 }
  },
  "dos-grand-format": {
    id: "dos-grand-format",
    label: "Dos",
    view: "dos",
    recommendation: "Grand visuel au dos",
    defaultTransform: { x: 50, y: 42, size: 172, rotation: 0 }
  },
  "manche-gauche": {
    id: "manche-gauche",
    label: "Manche gauche",
    view: "cote",
    recommendation: "Petit marquage manche",
    defaultTransform: { x: 42, y: 36, size: 64, rotation: -6 }
  },
  "manche-droite": {
    id: "manche-droite",
    label: "Manche droite",
    view: "cote",
    recommendation: "Petit marquage manche",
    defaultTransform: { x: 58, y: 36, size: 64, rotation: 6 }
  },
  "casquette-face": {
    id: "casquette-face",
    label: "Face avant",
    view: "face",
    recommendation: "Logo brodé ou marqué sur le devant",
    defaultTransform: { x: 63, y: 57, size: 104, rotation: 0 }
  },
  "casquette-cote": {
    id: "casquette-cote",
    label: "Côté casquette",
    view: "cote",
    recommendation: "Petit marquage latéral",
    defaultTransform: { x: 68, y: 47, size: 70, rotation: -6 }
  },
  cuisse: {
    id: "cuisse",
    label: "Cuisse",
    view: "face",
    recommendation: "Logo discret sur la jambe",
    defaultTransform: { x: 64, y: 72, size: 82, rotation: 0 }
  },
  poche: {
    id: "poche",
    label: "Poche",
    view: "face",
    recommendation: "Petit marquage proche de la poche",
    defaultTransform: { x: 57, y: 61, size: 62, rotation: 0 }
  }
};

const allTechniques: MarkingTechnique[] = [
  "impression-numerique",
  "flocage",
  "broderie",
  "serigraphie",
  "transfert"
];

export const products: Product[] = [
  {
    id: "tshirt-unisexe",
    slug: "t-shirt-personnalise-unisexe",
    name: "T-shirt personnalisé unisexe",
    shortName: "T-shirt personnalisé",
    category: "t-shirts",
    description:
      "Le textile polyvalent pour lancer une série entreprise, club, association ou événement.",
    basePrice: 8,
    colors: garmentColors,
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    gender: ["unisexe", "homme", "femme"],
    uses: ["entreprise", "sport", "evenement", "association"],
    images: {
      main: "/images/products/tshirt-product.jpg",
      gallery: ["/images/company-textile.jpg", "/images/workshop.jpg"]
    },
    markingZones: ["coeur", "poitrine", "dos-grand-format", "manche-gauche", "manche-droite"],
    techniques: allTechniques,
    mockupType: "tshirt",
    fastDelay: true,
    badge: "Aperçu réaliste",
    rating: 4.9
  },
  {
    id: "polo-personnalise",
    slug: "polo-personnalise",
    name: "Polo personnalisé",
    shortName: "Polo personnalisé",
    category: "polos",
    description: "Un rendu soigné pour accueil, commerce, staff, artisans et équipes terrain.",
    basePrice: 16.5,
    colors: garmentColors.filter((color) => color.id !== "beige"),
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    gender: ["homme", "femme", "unisexe"],
    uses: ["entreprise", "evenement", "association", "travail"],
    images: { main: "/images/products/polo-product.jpg" },
    markingZones: ["coeur", "dos-grand-format", "manche-gauche", "manche-droite"],
    techniques: ["broderie", "transfert", "serigraphie"],
    mockupType: "polo",
    fastDelay: true,
    badge: "Broderie premium",
    rating: 4.8
  },
  {
    id: "sweat-personnalise",
    slug: "sweat-personnalise",
    name: "Sweat personnalisé",
    shortName: "Sweat personnalisé",
    category: "sweats",
    description: "Confort, visibilité et identité forte pour clubs, associations et événements.",
    basePrice: 24.9,
    colors: garmentColors.filter((color) => color.id !== "rouge"),
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    gender: ["unisexe", "homme", "femme"],
    uses: ["association", "sport", "evenement", "entreprise"],
    images: { main: "/images/products/sweat-product.jpg" },
    markingZones: ["coeur", "dos-grand-format", "manche-gauche", "manche-droite"],
    techniques: ["flocage", "broderie", "transfert"],
    mockupType: "sweat",
    fastDelay: false,
    badge: "Clubs et assos",
    rating: 4.7
  },
  {
    id: "veste-personnalisee",
    slug: "veste-personnalisee",
    name: "Veste personnalisée",
    shortName: "Veste personnalisée",
    category: "vestes",
    description: "Une pièce professionnelle pour équipes terrain, événements et vêtements corporate.",
    basePrice: 34.5,
    colors: garmentColors.filter((color) => ["noir", "bleu-marine", "gris", "vert"].includes(color.id)),
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    gender: ["unisexe", "homme", "femme"],
    uses: ["travail", "entreprise", "evenement"],
    images: { main: "/images/products/workwear-product.jpg" },
    markingZones: ["coeur", "dos-grand-format"],
    techniques: ["broderie", "transfert"],
    mockupType: "jacket",
    fastDelay: false,
    badge: "Vêtement pro",
    rating: 4.8
  },
  {
    id: "casquette-personnalisee",
    slug: "casquette-personnalisee",
    name: "Casquette personnalisée",
    shortName: "Casquette",
    category: "casquettes",
    description: "Un support visible pour clubs, animations commerciales et événements.",
    basePrice: 9.8,
    colors: garmentColors.filter((color) => ["blanc", "noir", "bleu-marine", "rouge", "vert"].includes(color.id)),
    sizes: ["Unique"],
    gender: ["unisexe", "enfant"],
    uses: ["sport", "evenement", "association"],
    images: { main: "/images/products/casquette-product.jpg" },
    markingZones: ["casquette-face", "casquette-cote"],
    techniques: ["broderie", "transfert"],
    mockupType: "cap",
    fastDelay: true,
    badge: "Délai rapide",
    rating: 4.6
  },
  {
    id: "tote-bag-personnalise",
    slug: "tote-bag-personnalise",
    name: "Tote bag personnalisé",
    shortName: "Tote bag",
    category: "sacs",
    description: "Parfait pour salons, boutiques, cadeaux clients et opérations événementielles.",
    basePrice: 6.2,
    colors: garmentColors.filter((color) => ["blanc", "noir", "beige"].includes(color.id)),
    sizes: ["Unique"],
    gender: ["unisexe"],
    uses: ["evenement", "entreprise", "association"],
    images: { main: "/images/company-textile.jpg" },
    markingZones: ["poitrine", "dos-grand-format"],
    techniques: ["impression-numerique", "serigraphie", "transfert"],
    mockupType: "bag",
    fastDelay: true,
    badge: "Salon et cadeau",
    rating: 4.7
  },
  {
    id: "workwear-personnalise",
    slug: "vetement-travail-personnalise",
    name: "Vêtement de travail personnalisé",
    shortName: "Vêtement de travail",
    category: "travail",
    description: "Des textiles solides et lisibles pour équipes chantier, atelier, service et livraison.",
    basePrice: 21.9,
    colors: garmentColors.filter((color) => ["noir", "bleu-marine", "gris", "vert"].includes(color.id)),
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    gender: ["unisexe", "homme", "femme"],
    uses: ["travail", "entreprise"],
    images: { main: "/images/products/workwear-product.jpg" },
    markingZones: ["coeur", "dos-grand-format", "manche-gauche", "manche-droite"],
    techniques: ["broderie", "transfert", "serigraphie"],
    mockupType: "workwear",
    fastDelay: false,
    badge: "Robuste",
    rating: 4.8
  },
  {
    id: "event-textile",
    slug: "textile-evenementiel",
    name: "Textile événementiel",
    shortName: "Textile événementiel",
    category: "evenementiel",
    description: "Des séries efficaces pour staff, festivals, écoles, collectivités et opérations spéciales.",
    basePrice: 10.9,
    colors: garmentColors,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    gender: ["unisexe", "homme", "femme", "enfant"],
    uses: ["evenement", "association", "entreprise"],
    images: { main: "/images/products/event-product.jpg" },
    markingZones: ["coeur", "poitrine", "dos-grand-format"],
    techniques: ["impression-numerique", "serigraphie", "transfert"],
    mockupType: "event",
    fastDelay: true,
    badge: "Événement",
    rating: 4.7
  },
  {
    id: "pull-personnalise",
    slug: "pull-personnalise",
    name: "Pull personnalisé",
    shortName: "Pull",
    category: "pulls",
    description: "Un textile chaud et soigné pour équipes, boutiques, associations et opérations hivernales.",
    basePrice: 27.5,
    colors: garmentColors.filter((color) => ["blanc", "noir", "bleu-marine", "gris", "beige"].includes(color.id)),
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    gender: ["unisexe", "homme", "femme"],
    uses: ["entreprise", "association", "evenement", "travail"],
    images: { main: "/images/products/sweat-product.jpg" },
    markingZones: ["coeur", "poitrine", "dos-grand-format"],
    techniques: ["broderie", "transfert", "flocage"],
    mockupType: "sweat",
    fastDelay: false,
    badge: "Confort premium",
    rating: 4.7
  },
  {
    id: "pantalon-pro-personnalise",
    slug: "pantalon-professionnel-personnalise",
    name: "Pantalon professionnel personnalisé",
    shortName: "Pantalon pro",
    category: "pantalons",
    description: "Une pièce utile pour compléter une tenue terrain, atelier, livraison ou chantier.",
    basePrice: 29.9,
    colors: garmentColors.filter((color) => ["noir", "bleu-marine", "gris", "vert"].includes(color.id)),
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    gender: ["unisexe", "homme", "femme"],
    uses: ["travail", "entreprise"],
    images: { main: "/images/products/workwear-product.jpg" },
    markingZones: ["cuisse", "poche"],
    techniques: ["broderie", "transfert"],
    mockupType: "workwear",
    fastDelay: false,
    badge: "Tenue complète",
    rating: 4.6
  },
  {
    id: "veste-chantier-personnalisee",
    slug: "veste-chantier-personnalisee",
    name: "Veste de chantier personnalisée",
    shortName: "Veste de chantier",
    category: "chantier",
    description: "Un vêtement robuste et identifiable pour artisans, équipes terrain et chantiers.",
    basePrice: 39.9,
    colors: garmentColors.filter((color) => ["noir", "bleu-marine", "gris", "vert"].includes(color.id)),
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    gender: ["unisexe", "homme", "femme"],
    uses: ["travail", "entreprise"],
    images: { main: "/images/products/workwear-product.jpg" },
    markingZones: ["coeur", "dos-grand-format", "manche-gauche", "manche-droite"],
    techniques: ["broderie", "transfert", "serigraphie"],
    mockupType: "workwear",
    fastDelay: false,
    badge: "Chantier",
    rating: 4.8
  }
];

export const featuredProduct = products[0];
