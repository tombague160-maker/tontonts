export type RealisationCategory =
  | "T-shirts"
  | "Polos"
  | "Pantalons"
  | "Sweats"
  | "Vestes"
  | "Chantier"
  | "Broderie"
  | "Marquage";

export type Realisation = {
  id: number;
  title: string;
  category: RealisationCategory;
  marking: string;
  image: string;
  description: string;
};

export const realisationCategories: Array<"Tous" | RealisationCategory> = [
  "Tous",
  "T-shirts",
  "Polos",
  "Pantalons",
  "Sweats",
  "Vestes",
  "Chantier",
  "Broderie",
  "Marquage"
];

export const realisations: Realisation[] = [
  {
    id: 1,
    title: "T-shirt entreprise personnalisé",
    category: "T-shirts",
    marking: "Marquage cœur",
    image: "/images/customizer/tshirt-front-realistic.webp",
    description: "Logo discret côté cœur sur t-shirt blanc premium pour une équipe d'accueil."
  },
  {
    id: 2,
    title: "T-shirt noir grand logo",
    category: "T-shirts",
    marking: "Marquage centre",
    image: "/images/customizer/tshirt-black-front-realistic.webp",
    description: "Grand visuel au centre pour une série événementielle moderne et lisible."
  },
  {
    id: 3,
    title: "T-shirt gris dos marqué",
    category: "T-shirts",
    marking: "Marquage dos",
    image: "/images/customizer/tshirt-grey-back-realistic.webp",
    description: "Logo d'association dans le dos avec rendu textile sobre et professionnel."
  },
  {
    id: 4,
    title: "Polo bleu marine brodé",
    category: "Polos",
    marking: "Broderie cœur",
    image: "/images/products/polo-product.jpg",
    description: "Broderie côté cœur pour une tenue corporate élégante et durable."
  },
  {
    id: 5,
    title: "Polo blanc discret",
    category: "Polos",
    marking: "Broderie cœur",
    image: "/images/products/polo-product.jpg",
    description: "Logo fin et propre pour commerce, accueil client ou équipe de service."
  },
  {
    id: 6,
    title: "Polo noir premium",
    category: "Broderie",
    marking: "Broderie ton sur ton",
    image: "/images/products/polo-product.jpg",
    description: "Broderie sobre pour une image haut de gamme sans surcharge visuelle."
  },
  {
    id: 7,
    title: "Pantalon de travail marqué",
    category: "Pantalons",
    marking: "Logo jambe",
    image: "/images/products/workwear-product.jpg",
    description: "Marquage discret sur la jambe pour une tenue terrain complète."
  },
  {
    id: 8,
    title: "Pantalon professionnel noir",
    category: "Pantalons",
    marking: "Logo poche",
    image: "/images/products/workwear-product.jpg",
    description: "Petit logo lisible sur pantalon noir pour équipes techniques."
  },
  {
    id: 9,
    title: "Pantalon cargo personnalisé",
    category: "Pantalons",
    marking: "Marquage discret",
    image: "/images/products/workwear-product.jpg",
    description: "Support robuste pour artisans, ateliers et équipes de livraison."
  },
  {
    id: 10,
    title: "Sweat gris poitrine",
    category: "Sweats",
    marking: "Marquage poitrine",
    image: "/images/products/sweat-product.jpg",
    description: "Logo poitrine sur sweat confortable pour équipe ou association."
  },
  {
    id: 11,
    title: "Sweat noir dos",
    category: "Sweats",
    marking: "Grand dos",
    image: "/images/products/sweat-product.jpg",
    description: "Grand marquage dos pour une identité d'équipe immédiatement visible."
  },
  {
    id: 12,
    title: "Sweat bleu marine cœur",
    category: "Sweats",
    marking: "Marquage cœur",
    image: "/images/products/sweat-product.jpg",
    description: "Marquage compact et professionnel pour staff, club ou bureau."
  },
  {
    id: 13,
    title: "Veste softshell brodée",
    category: "Vestes",
    marking: "Broderie cœur",
    image: "/images/products/workwear-product.jpg",
    description: "Broderie nette sur veste softshell pour une tenue extérieure soignée."
  },
  {
    id: 14,
    title: "Veste chantier personnalisée",
    category: "Chantier",
    marking: "Logo poitrine",
    image: "/images/products/workwear-product.jpg",
    description: "Logo entreprise sur veste haute visibilité pour équipes BTP."
  },
  {
    id: 15,
    title: "Veste professionnelle noire",
    category: "Vestes",
    marking: "Marquage poitrine",
    image: "/images/products/workwear-product.jpg",
    description: "Marquage sobre pour équipe terrain, atelier ou maintenance."
  },
  {
    id: 16,
    title: "Pack entreprise complet",
    category: "Marquage",
    marking: "Tenue complète",
    image: "/images/company-textile.jpg",
    description: "T-shirt et pantalon marqués avec une identité cohérente pour l'équipe."
  },
  {
    id: 17,
    title: "Tenue restaurant brodée",
    category: "Polos",
    marking: "Broderie cœur",
    image: "/images/products/polo-product.jpg",
    description: "Polo brodé pour service, accueil et restauration moderne."
  },
  {
    id: 18,
    title: "Tenue artisan personnalisée",
    category: "Chantier",
    marking: "Veste et pantalon",
    image: "/images/workshop.jpg",
    description: "Ensemble professionnel identifiable pour atelier, chantier ou intervention."
  },
  {
    id: 19,
    title: "T-shirt événementiel",
    category: "T-shirts",
    marking: "Logo centre",
    image: "/images/products/event-product.jpg",
    description: "Visuel central pour salon, festival, opération locale ou lancement."
  },
  {
    id: 20,
    title: "T-shirt association coloré",
    category: "T-shirts",
    marking: "Impression couleur",
    image: "/images/sport-team.jpg",
    description: "Marquage vivant et propre pour association ou collectif local."
  },
  {
    id: 21,
    title: "Polo club sportif",
    category: "Polos",
    marking: "Logo cœur",
    image: "/images/sport-team.jpg",
    description: "Polo d'équipe avec logo côté cœur pour encadrement et staff."
  },
  {
    id: 22,
    title: "Sweat d'équipe dos",
    category: "Sweats",
    marking: "Marquage dos",
    image: "/images/products/sweat-product.jpg",
    description: "Sweat d'équipe avec dos marqué pour une présence forte et cohérente."
  },
  {
    id: 23,
    title: "Vêtement chantier visible",
    category: "Chantier",
    marking: "Logo réfléchissant",
    image: "/images/products/workwear-product.jpg",
    description: "Marquage adapté aux équipes terrain et contraintes de visibilité."
  },
  {
    id: 24,
    title: "T-shirt commerce local",
    category: "T-shirts",
    marking: "Logo minimaliste",
    image: "/images/customizer/tshirt-grey-front-realistic.webp",
    description: "Logo simple sur t-shirt premium pour boutique ou commerce de proximité."
  },
  {
    id: 25,
    title: "Polo brodé doré",
    category: "Broderie",
    marking: "Broderie premium",
    image: "/images/products/polo-product.jpg",
    description: "Broderie dorée fictive pour rendu premium et image de marque soignée."
  },
  {
    id: 26,
    title: "Pantalon gris discret",
    category: "Pantalons",
    marking: "Petit logo",
    image: "/images/products/workwear-product.jpg",
    description: "Marquage discret sur pantalon gris pour tenue professionnelle complète."
  },
  {
    id: 27,
    title: "Veste zippée brodée",
    category: "Vestes",
    marking: "Logo brodé",
    image: "/images/products/workwear-product.jpg",
    description: "Veste zippée avec broderie côté cœur, pensée pour un usage quotidien."
  },
  {
    id: 28,
    title: "Pack textile entreprise",
    category: "Marquage",
    marking: "Série multi-produits",
    image: "/images/company-textile.jpg",
    description: "T-shirt, polo, veste et pantalon personnalisés dans une même identité."
  },
  {
    id: 29,
    title: "Détail broderie polo",
    category: "Broderie",
    marking: "Macro broderie",
    image: "/images/workshop.jpg",
    description: "Zoom sur la texture du fil et la précision d'un marquage brodé."
  },
  {
    id: 30,
    title: "Détail marquage textile",
    category: "Marquage",
    marking: "Marquage t-shirt",
    image: "/images/atelier-textile-hero.png",
    description: "Détail de marquage sur coton avec rendu propre et lisible."
  }
];
