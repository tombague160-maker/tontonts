# Déploiement preview non référencé

Ce projet est une application Next.js. La solution gratuite recommandée est Vercel, car elle prend en charge Next.js sans export statique fragile.

## Préparation incluse

- Meta robots global : `noindex, nofollow`
- Fichier public : `/robots.txt`
- Header HTTP : `X-Robots-Tag: noindex, nofollow`
- Aucun sitemap public
- Configuration Vercel : `vercel.json`

Ces réglages demandent aux moteurs de recherche de ne pas indexer le site. Ils ne protègent pas le site par mot de passe : toute personne qui possède l'URL peut l'ouvrir.

## Commandes de vérification

```bash
npm.cmd install
npm.cmd run lint
npm.cmd run build
npm.cmd audit --omit=dev --audit-level=moderate
```

## Déploiement Vercel depuis GitHub

1. Pousser ce projet dans le dépôt GitHub voulu.
2. Aller sur https://vercel.com/new.
3. Importer le dépôt GitHub.
4. Garder les réglages Vercel par défaut pour Next.js :
   - Framework Preset : `Next.js`
   - Install Command : `npm install`
   - Build Command : `npm run build`
   - Output Directory : laisser vide pour Next.js sur Vercel
5. Nom conseillé : `les-tontons-marqueurs-preview`.
6. Déployer.
7. Tester l'URL Vercel fournie.
8. Vérifier :
   - `https://votre-url.vercel.app/robots.txt`
   - la présence de `<meta name="robots" content="noindex, nofollow">`
   - le header `X-Robots-Tag: noindex, nofollow`

## Vérifier les headers après mise en ligne

```bash
curl -I https://votre-url.vercel.app/
curl https://votre-url.vercel.app/robots.txt
```

Le header attendu :

```txt
X-Robots-Tag: noindex, nofollow
```

Le contenu attendu de `/robots.txt` :

```txt
User-agent: *
Disallow: /
```

## Pousser sur GitHub depuis ce dossier

Si le dossier n'est pas encore relié au dépôt :

```bash
git init
git checkout -b preview-deploiement-les-tontons-marqueurs
git remote add origin https://github.com/VOTRE-COMPTE/VOTRE-DEPOT.git
git add .
git commit -m "Ajout de la mise en ligne preview non référencée"
git push -u origin preview-deploiement-les-tontons-marqueurs
```

Si le dépôt existe déjà localement, partir du clone officiel puis copier les fichiers modifiés, ou ajouter le bon remote avant le commit.

## Passer le site en référencement public plus tard

Quand le site sera prêt à être indexé :

1. Retirer `robots` de `src/app/layout.tsx` ou passer `index: true, follow: true`.
2. Retirer `public/robots.txt` ou remplacer par une configuration permissive.
3. Retirer le header `X-Robots-Tag` dans `next.config.ts`.
4. Retirer ou adapter `vercel.json`.
5. Ajouter un sitemap public si nécessaire.
6. Redéployer.
