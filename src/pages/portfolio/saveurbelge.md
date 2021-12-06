---
layout: ../../layouts/ProjetLayout.astro
title: SaveurBelge
emoji: 👨‍🌾
lien: https://saveurbelge.be
description: Web-app listant des commerces locaux
techno:
    - Node.js
    - SvelteKit
    - TailwindCSS
    - Fastify
    - MongoDB
---

# SaveurBelge

![Index](/img/index_sb.webp)

SaveurBelge est une application web qui permet, sur base de la géolocalisation/du code postal de l'utilisateur d'indiquer les commerçant/producteurs locaux aux alentours. Pour y parvenir, tout un système d'utilisateur a été mis en place afin que les commerçants puissent eux-mêmes s'ajouter sur le site pour partager leurs commerces.

Je me suis entièrement chargé du développement: backend, frontend, base de données (MongoDB) , déploiement,...

[Galand Tristan](https://galandtristan.be) s'est chargé de l'UX/UI design et de le charte graphique/logo.

## Le frontend

Pour le frontend, j'ai choisi d'utiliser SvelteKit (Svelte avec du SSR). J'ai principalement choisi ce framework par affinité (et SvelteKit pour l'optimisation SEO). 

J'ai utilisé TailwindCSS pour le CSS qui offre un "cadre" qui est très agréable à utiliser. 

![Index](/img/search_sb.webp)

**L'affichage des cartes:** Pour gérer l'affichage des cartes des commerçants, j'utilise Leaflet combiné à OpenStreetMap. 

**La recherche:** L'expérience de la recherche étant centrale, un soin particulier lui a été apportée. On récupère la localisation de l'utilisateur qui peut ensuite choisir un secteur d'activité et des catégories. On lui affichera ensuite les résultats de sa recherche qui lui permettront d'accéder à une page dédiée aux commerces.

Tout un back office a été développé, d'un part pour les commerçants et d'une autre pour moi et Galand Tristan, les administrateurs afin que l'on puisse facilement modérer le contenu du site.


![Recherche](/img/backoffice_sb.webp)
## Le backend

Tout se corse pour le backend. N'ayant jamais eu à développer d'API, j'ai choisi Node par défaut. Après des tentatives avec PostgreSQL et Express, j'ai fini par utiliser Fastify et MongoDB. 

✉️ **L'envoie de mails :** Un des éléments centraux de cette API sont les mails, ils nous permettent de vérifier si un utilisateur qui s'inscrit a bien accès à l'adresse email qu'il nous a fourni, de réinitialiser les mots de passe, de signaler les mises à jour aux utilisateurs,... Pour ce faire, j'utiliser **nodemailer** avec des templates de mails faits en **EJS**. 

**🔐 La gestion de mots de passe :** Pour l'identification, j'utilise bcrypt afin de sécuriser au maximum les mots de passe.

📕 **Les librairies utilisées :**

- Bcrypt
- Dotenv
- ejs
- mongoose
- node-fetch
- nodemailer
- slugify
- différents plugins pour fastify