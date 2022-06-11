---
title: Le projet SaveurBelge
publish_date: 2022-06-12
---

SaveurBelge, c'est un projet que j'ai lancé avec [Galand Tristan](https://galandtristan.be) en 2020. Initialement, le projet s'appelait "ConsommerTournai" (le nom de notre ville d'origine).

L'idée était, pendant la période Covid, de créer une plateforme sur laquelle les commerçants pourraient s'inscrire afin de signaler s'ils livraient, s'ils proposaient des plats à emporter,...

Malheureusement à l'époque, mes connaissances en développement s'arrêtaient à installer WordPress et un poil de PHP.

Mais l'idée nous a paru tellement intéressante, que je me suis mis à suivre le cours de PHP/MySQL de OpenClassRoom. Et sur cette base, j'ai créé le site en PHP. Etant conscient que j'allais sûrement laisser des failles de sécurités, nous avions fait le choix d'ajouter les commerces nous même via une interface protégée par un mot de passe. Les commerçants, eux, s'inscrivaient via un google forms.

Dans les faits, ça marchait. Ce n'était pas efficace, mais ça marchait. Malheureusement (ou heureusement?), la situation revenant à la normale et les gérants désagréables nous ont fait passer à autre chose et nous avons arrêté le projet.

## SaveurBelge

Mais quelques mois plus tard, l'idée nous restait en tête. Malgré une situation sanitaire plus "normale", on pouvait faire quelque chose de ce projet.

On l'a alors reconverti en plateforme de mise en relation entre commerçants/restaurateurs qui vendent des produits locaux et des consommateurs soucieux de ce qu'ils achètent !

### Techniquement, la V1.

Entre temps, j'ai commencé à me plonger sérieusement dans le développement web. J'ai commencé avec Vue.js, parce que c'était cool. Et lors de l'été 2021, on décide de relancer ConsommerTournai, mais sous un nouveau nom, SaveurBelge (ça parait pas très inspiré comme non, mais on a dû y passer une après-midi de brainstorming).

En terme de backend, j'étais nul part. Mais j'avais fait du JS avec Vue, donc j'ai choisi de faire du Node.js. Et, terrible erreur, j'ai **TOUT** fait à la main. L'authentification, les requêtes, ... bref, tout. Ca m'a pris un temps monstre, d'autant plus que j'ai dû tout lié à une app rendue côté serveur avec SvelteKit.

Le projet marchait, on avait des jolies interfaces. On était content.

### La V2: Node.js

![](/saveurbelge/saveurbelge.png)

La V1, c'était mon premier projet perso en prod. J'ai fait plein d'erreurs, je ne savais pas gérer un serveur Debian. Chaque déploiement était une tannée.

De nouveaux, quelques mois passent. Tristan et moi gagnons énormément en compétences et un constat s'impose à nous: cette V1, elle est claquée.

Trop compliquée au niveau de l'UX, trop compliquée au niveau du code absolument pas maintenable,... il n'y a rien qui va. S'amorce alors une longue période dans laquelle je vais tout essayer techniquement. Notamment un front Next.js avec Supabase, mais qui s'est avéré assez pénible à gérer encore une fois.

Au final, mon choix s'est porté sur Adonis.js, un framework Node.js MVC qui s'inspire de Laravel. Cette approche a été une vraie révélation pour moi au niveau de **comment et pourquoi** développer. Sur cette version, j'ai délégué beaucoup à Adonis. Et c'était pour le mieux, le framework embarque énormément de fonctionnalités telles qu'un ORM, la gestion de l'authentification, des routes,...

J'en étais très fier, et cerise sur le gateau, j'avais créé une API qui renvoie des positions GPS sur base d'un code postal, hébergée sur Vercel.

Mon déploiement sur un VPS s'est bien mieux passé et je ne me suis plus embêté à installer un système de gestion de base de données, SQLite a bien fait l'affaire !

### La V3: Retour à PHP

![](/saveurbelge/filamentphp.png)

Tout allait bien sur la V2. Mais gérer un serveur, ça reste assez pénible. Et la V2 n'avait pas de back office, tout se gérait directement sur le fichier SQLite du serveur. Autant dire que les mises à jours et la modération étaient très pénibles. Et c'est là que j'ai décidé de re-coder le tout, mais en Laravel cette fois-ci ! Laraval étant une inspiration d'Adonis, la structure est similaire. Mais Laravel a l'avantage d'être bien plus ancien et donc de disposer de bien plus de packages.

J'ai donc converti mes templates en Edge vers Blade et j'ai recodé la logique. Pour le backoffice, il m'a suffi de créer un petit dashboard avec [Filament](https://filamentphp.com) et d'héberger le tout sur un petit serveur mutualisé que ne me demande presque aucune gestion.
