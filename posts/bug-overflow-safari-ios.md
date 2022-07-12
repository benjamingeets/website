---
title: Safari overflow étrange même avec overflow-x sur le body
publish_date: 2022-07-12
---

Récemment j'ai eu un problème de CSS: j'avais un **`{overflow-x:hidden;}`** sur mon `body` car j'avais des images qui flottaient un peu partout sur mon site. Tout marchait très bien, **sauf sur Safari**, et encore pire sur Safari iOS ou ça n'avait aucun impact.

En gros, sur Desktop, je pouvais quand même scroll horizontalement avec mon track pad et sur iOS j'avais un overflow "classique". Autant dire que c'est moche.

Il s'avère, après recherche, que Safari ne permet pas de mettre un overflow sur l'élément body. **Pour régler _temporairement_ mon problème, j'ai donc encapsulé le contenu de mon `body` dans un `div` avec les mêmes classes qu'avant. Et pouf, ça marche.**

Et la solution définitive sera simplement de ne plus mettre d'overflow hidden sur le body.

J'ai trouve [ce lien sur le bug tracker de Safari qui a éclairé ma lanterne](https://bugs.webkit.org/show_bug.cgi?id=153852).

> Since iOS Safari prevents attaching the overflow property to the body tag, you can use the position: fixed attribute.

_Kareem Darkazanli_
