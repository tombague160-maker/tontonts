# LES TONTONS MARQUEURS

Base professionnelle Next.js pour un site vitrine et e-commerce textile premium : marquage textile, broderie, vêtements personnalisables, demande de devis et aperçu photo réaliste du logo sur t-shirt.

## Installer

```bash
npm.cmd install
```

## Lancer en local

```bash
npm.cmd run dev
```

Site local : `http://127.0.0.1:3000`

Routes principales :

- `/`
- `/boutique`
- `/personnaliser/tshirt`
- `/realisations`
- `/devis`
- `/contact`

## Logo officiel

Logo utilisé par le site :

`public/logo/logo-les-tontons-marqueurs.png`

Version optimisée :

`public/logo/logo-les-tontons-marqueurs.webp`

Remplacer ces fichiers par les versions officielles fournies par LES TONTONS MARQUEURS, sans changer leur ratio.

## Aperçu textile réaliste

Le configurateur photo utilise :

`src/components/configurator/PhotoTextilePreview.tsx`

Images de base :

- `public/images/customizer/tshirt-front-realistic.webp`
- `public/images/customizer/tshirt-back-realistic.webp`
- `public/images/customizer/tshirt-black-front-realistic.webp`
- `public/images/customizer/tshirt-black-back-realistic.webp`
- `public/images/customizer/tshirt-grey-front-realistic.webp`
- `public/images/customizer/tshirt-grey-back-realistic.webp`

La table `tshirtVariants` dans `src/components/configurator/PhotoTextilePreview.tsx` relie chaque couleur aux bonnes images face/dos. Pour ajouter une nouvelle couleur avec de vraies photos, ajouter deux WebP dans `public/images/customizer/`, puis compléter cette table.

Classes CSS de placement :

- `.logo-placement-heart`
- `.logo-placement-center`
- `.logo-placement-back`
- `.color-option`
- `.color-option.active`
- `.customizer-preview`
- `.customizer-product-image`
- `.customizer-logo-overlay`

Le logo est posé en overlay sur une vraie photo de t-shirt. Les contrôles permettent de choisir cœur, centre ou dos, puis d’ajuster taille, position, rotation et opacité.

Le placement cœur est volontairement positionné à droite sur l'image visible :

- source des valeurs : `src/data/products.ts`, `markingZones.coeur.defaultTransform`
- classe CSS de secours : `.logo-placement-heart`

## Images

Images générales :

`public/images/`

Images produits :

`public/images/products/`

Images de réalisations :

`public/images/realisations/`

Prompts de remplacement :

`image-prompts-les-tontons-marqueurs.md`

## Produits

Modifier le catalogue ici :

`src/data/products.ts`

Catégories incluses : t-shirts, pulls, sweats, vestes, polos, pantalons, vestes de chantier, vêtements professionnels, sacs, casquettes et textiles événementiels.

## Prix

Règles de prix :

`src/data/pricing.ts`

Calcul :

`src/lib/calculatePrice.ts`

## Réalisations

Contenu de la galerie :

`src/data/realisations.ts`

Galerie filtrable :

`src/components/realisations/RealisationGallery.tsx`

La page `/realisations` affiche 30 exemples avec catégorie, type de marquage, description courte et bouton "Projet similaire".

Prompts pour produire les visuels définitifs :

`image-prompts-realisations-les-tontons-marqueurs.md`

## Formulaires

Formulaire de devis :

`src/components/forms/QuoteForm.tsx`

Formulaire de contact :

`src/components/forms/ContactForm.tsx`

Pour brancher un vrai envoi : créer une route API Next.js, envoyer les données vers email, CRM, Odoo ou webhook, puis stocker les fichiers uploadés.

## Vérifications

```bash
npm.cmd run lint
npm.cmd run build
npm.cmd audit --omit=dev --audit-level=moderate
```
