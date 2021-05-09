---
titre: Utiliser le module Content de Nuxt et NetlifyCMS pour gérer du MarkDown 
image: content_nuxt.webp
description: Eviter de passer par un CMS lourd quand vous pouvez juste créer vos fichiers .md
tags : [CMS, Nuxt.js, Markdown]
date: 2021-03-15
---
Auparavant, j'utilisais [Strapi](#) pour gérer le contenu de ce blog. Mais [l'incendie d'OVH](#) ayant mis à mal mon VPS, j'ai décidé de gérer mon site avec un workflow git *comme disent les jeunes*. 

J'ai donc choisi [le module Content de Nuxt](https://content.nuxtjs.org/fr). Cela inclus que tout le contenu de mon blog/portfolio est stocké dans des fichiers markdown directement dans mon [repo github](https://github.com/benjamingeets/benjamingeets). Se faisant, à chaque fois que j'ajoute un fichier markdown ou que j'effecture une modification, Netlify va mettre à jour mon blog et le tout reste 100% static.

## Quelques atouts de Content

En plus de pouvoir gérer du contenu depuis votre répertoire, Content va vous permettre de trier le contenu selon différentes paramètres. Et ça marche assez bien! Passant de Strapi à ce système, je m'y retrouve complètement. 

```javascript
projets = await $content("projets").where({ 'technologies': { $contains: params.recherche } }).fetch()
```

Avec cette ligne, je filtre ma requête afin de la limiter aux résultats ayant, dans la propriété technologie, le paramètre d'URL. Je vous laisse [découvrir toutes les possibilités dans la doc](https://content.nuxtjs.org/fr/fetching).

De plus, Content va parser le markdown sans que vous ayez à vous poser de question. 

```html
<nuxt-content :document='blog_post' />
```

Et voilà, le contenu de votre fichier markdown est parsé et affiché.

## Plus besoin de gestion de serveur

Exit le serveur, bienvenue dans le monde fabuleux du **serverless**. Avec du static, aucun risque de crash, pas de gestion pénible ou de mise en place longue. (Et en plus c'est, dans la limite du raisonnable, gratuit chez [Netlify](https://netlify.com) ou [Vercel](https://vercel.com/)).

## Possibilité de gérer le contenu avec NetlifyCMS

[NetlifyCMS](https://www.netlifycms.org/) est un CMS qui va directement gérer le contenu dans votre repo github. Il va donc modifier vos blog posts en markdown et ajouter vos images dans un dossier dédier. De plus, il se revendique agnostique de tout hébergeur. En d'autres termes, on peut *en théorie*, s'en servir sur n'importe quel hébergeur. 

![Netlify CMS](/img/blog/media/netlifyCMS.webp)

**Mais pas à la porté de tous**

A mes yeux, NetlifyCMS s'adresse aux *mangeurs de cartes graphiques* comme on dit. Chaque changement prend son temps à s'effectuer (étant donné qu'il faut re-build à chaque mise à jour). Je pense que ce CMS s'adresse vraiment aux développeurs qui veulent gérer le contenu de leur site sans avoir à passer *directement* par un repo git.