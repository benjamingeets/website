---
titre : Site personnel
date: 2021-05-01
technologies : [Nuxt.js,SASS,Markdown,Tailwind CSS]
description: Création d'un site/blog/portfolio avec gestion de contenu sous NuxtJS.
image : benjamingeets.png
emoji: 👨‍💼
site: {
    disponible: True,
    url: geets.dev
}
git: {
    disponible: True,
    url: github.com/benjamingeets/geetsdev
}
---
## Refonte : mai 2021

Re-création de 0 de mon site/blog/portfolio. Initialement réalisé avec le framework css classless Sakura, j'ai décidé de le refaire en gérant le CSS moi même afin de ne pas avoir à écrire par dessus un framework et ne plus être limité. Cela m'a demandé un investissement en temps plus important mais me permettera de mieux maintenant mon code.

Le design du site a été fait pas [Galand Tristan](https://galandtristan.be)

J'en ai profité pour tenter l'expérience TailwindCSS + Nuxt.js. 

## Déploiement initial: mars 2021

Création de ce site internet avec le framework **Nuxt.js** permettant de faire du rendu côté serveur avec **Vue.js** (optimisant le SEO). 

Cependant, je génère du **contenu statique**. 

N'ayant pas besoin d'être trop fréquemment mis à jour, les performances du site sont donc incomparables [(score de 100/100 en 📱 et 💻 sur Google PageSpeed Insight)](https://developers.google.com/speed/pagespeed/insights/?hl=fr&url=https%3A%2F%2Fbenjamingeets.be%2F).

![](/img/portfolio/media/google_score.png)

Afin de mettre son contenu facilement à jour, j'utilise l'extension [Content de Nuxt.js](https://content.nuxtjs.org/fr/) permettant de simplement créer des fichiers **Markdown** pour ajouter des éléments. A chaque mise à jour du [répertoire sur GitHub](https://github.com/benjamingeets/benjamingeets), [Netlify](https://netlify.com) re-génère mon site.


