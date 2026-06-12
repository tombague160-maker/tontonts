import type { ProductCategory } from "@/types/product";

export type Category = {
  id: ProductCategory;
  title: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    id: "t-shirts",
    title: "T-shirts",
    description: "La base idéale pour entreprises, événements, clubs et associations.",
    image: "/images/products/tshirt-product.jpg"
  },
  {
    id: "pulls",
    title: "Pulls",
    description: "Des textiles chauds et confortables pour équipes, boutiques et staff.",
    image: "/images/products/sweat-product.jpg"
  },
  {
    id: "sweats",
    title: "Sweats",
    description: "Confort et visibilité pour équipes, promos et clubs sportifs.",
    image: "/images/products/sweat-product.jpg"
  },
  {
    id: "vestes",
    title: "Vestes",
    description: "Une image professionnelle pour le terrain, le staff et l’accueil.",
    image: "/images/products/workwear-product.jpg"
  },
  {
    id: "polos",
    title: "Polos",
    description: "Un rendu plus habillé avec broderie ou marquage discret.",
    image: "/images/products/polo-product.jpg"
  },
  {
    id: "pantalons",
    title: "Pantalons",
    description: "Des bas professionnels pour équipes terrain, ateliers et chantiers.",
    image: "/images/products/workwear-product.jpg"
  },
  {
    id: "chantier",
    title: "Vestes de chantier",
    description: "Textiles robustes et visibles pour artisans, chantiers et équipes exposées.",
    image: "/images/products/workwear-product.jpg"
  },
  {
    id: "travail",
    title: "Vêtements professionnels",
    description: "Textiles cohérents pour artisans, restaurants, ateliers et équipes.",
    image: "/images/products/workwear-product.jpg"
  }
];
