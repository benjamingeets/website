---
title: L'état des outils frontend
publish_date: 2022-06-13
---

Quand j'ai commencé le développement web avec Vue.js, j'ai eu du mal avec le tooling frontend. NPM, Webpack, Node, compiler son JS, son CSS,... Mais ça me semblait normal.

> OK, c'est comme ça qu'on fait des sites, c'est compliqué, mais soit.

Mais au plus j'avance, plus je trouve cette logique insensée. La finalité de tout ce qu'on fait en tant que développeur web, ça n'est jamais que du HTML, du CSS et éventuellement du JS.

C'est sur ça qu'on **doit** se concentrer. Ecrire du HTML propre, accessible et du CSS léger.

Au final, faire toute une application avec Nuxt/Next pour la générer côté serveur puis servir les fichiers au client, ça n'apporte pas grand chose. C'est beaucoup de surcouche pour se donner l'impression que ce qu'on fait est complexe, alors que ça n'a pas à l'être.

**La finalité ne reste que du HTML**. Et on s'entend sur le fait que le HTML ce n'est pas bien compliqué.

## La fluidité

Le JavaScript, c'est bien, mais quand on s'en sert avec parcimonie. Il est indispensable pour faire des menus hamburger pour mobile ou quelques animations par exemple, mais pour le reste, on peut très souvent - voire tout le temps - s'en passer sans que **personne ne s'en rende vraiment compte**.

J'ai longtemps été très fan du rendu AJAX entre les pages. C'était chouette de charger du contenu sans avoir le gros écran blanc du navigateur. Mais aujourd'hui je trouve cela un peu anecdotique. Est-ce que ce ne serait pas une énorme hallucination collective de dev qui nous pousse à croire qu'on a besoin de ça?

**(D'autant plus qu'aujourd'hui on n'a plus d'écran blanc entre 2 pages)**

## L'alternative

Astro a été un vrai renouveau dans cet univers. Sans trop de complexité - au final, on peut n'écrire que du HTML dans les fichiers `.astro` - on a la possibilité de créer des pages, scindées en composant pour s'y retrouver, exclusivement en HTML. Mais il est aussi possible d'utiliser le langage de templating d'autres frameworks si vous y êtes habitué.

Et le rendu est lui même uniquement du HTML, sauf si vous avez besoin de JavaScript. Mais cette approche sans JavaScript par défaut me semble idéale.

Cela permet aussi de gérer le contenu depuis un CMS Headless afin de re-rendre le site à chaque modification.

## Les performances

Alors certes, en terme des performances, les web-app, sont bien moins gourmandes pour le serveur. Mais est-ce important?

J'entends qu'il soit crucial pour Facebook d'optimiser le rendu de la moindre de ses pages, car cela implique des sommes colossales. Mais pour le reste du monde, on en a pas grand chose à foutre je pense. Tant que l'expérience est fluide et que la page s'affichage rapidement chez le visiteur.

La différence du temps pris par une requête entre un fichier HTML pré-généré ou la réponse d'un serveur qui génère la page au vol est imperceptible.

Et cela nous mène à la question suivante :

> Vaut-il mieux un fichier HTML lourd dépendant de fichiers JS ou un fichier HTML généré au vol avec peu ou pas de JS ?

A la lecture de cette article, vous savez ou je me situe.

Etant donné qu'on a, de toutes façons, besoin d'un serveur pour avoir de l'interaction avec des données, je préfère tout gérer avec ce dernier.

## Conclusion

Et c'est ce qui m'amène aujourd'hui à ne plus que faire des site générés côté serveur ou des applications dites _backend_ avec Laravel ou Adonis. Je préfère faire des backend simples que des applications frontend compliquées pour palier au manque de back et sans dépendre d'aucun outil externe.

C'est tout ça qui me fait me dire qu'on n'a peut être pas besoin de ce tooling frontend. Que le HTML, ça faisait très bien le job et que quand ça ne suffit pas, un petit framework backend sera presque toujours la meilleure réponse.
