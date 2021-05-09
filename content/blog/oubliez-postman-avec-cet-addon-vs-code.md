---
titre: Oubliez Postman avec cet add-on pour VS Code (REST Client) 
image: rest_client.png
description: Parce que pourquoi avoir un gros logiciel quand un add-on fait pareil en plus simple?
tags : [API, VS_Code]
date: 2021-04-01
---

Vous utilisez probablement Postman pour tester vos requêtes. Mais Postman c'est gros, ça demande un compte et c'est pas forcément utile.

Voici [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client), un add-on très léger pour VS Code qui va vous permettre de faire exactement pareil mais sans grosse installation et directement depuis Visual Studio Code.

## Comment ça marche?

Vous n'aurez qu'à créer un fichier ayant pour extension ".http" et à tapez vos requêtes comme suit :

```http
GET 192.168.0.1
```
*En placant la bonne cible évidemment*

Un petit bouton vous permettant d'envoyer la requête va apparaitre au dessus de cette dernière et lezgo.

Avec une API fonctionnelle, ça renvoie ce genre de réponse: 

![Réponse de REST Client](/img/blog/media/rest_client_reponse.png)

Et vous avez la possibilité d'ajouter des headers, d'utiliser POST/UPDATE/DELETE,... etc

```http
POST https://example.com/comments HTTP/1.1
content-type: application/json

{
    "name": "sample",
    "time": "Wed, 21 Oct 2015 18:27:50 GMT"
}
```
[⬇️ Télécharger **REST Client** sur le MarketPlace](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
