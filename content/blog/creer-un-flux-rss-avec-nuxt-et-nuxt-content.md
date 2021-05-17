---
titre: Créer un flux RSS avec Nuxt et Nuxt Content
image: rss.jpg
description: Parce que Nuxt.js a tout pensé pour nous.
tags: [RSS, Nuxt]
date: 2021-05-17
---

## Installer Nuxt Feed

C'est le module Nuxt qui va nous permettre de générer simplement notre flux. Je vous mets [le lien ici](https://github.com/nuxt-community/feed-module).

```bash
npm install @nuxtjs/feed
```

_(avec NPM ou Yarn)_

Ensuite, ajoutez le à vos modules dans votre nuxt.config.js

```javascript
export default {
  modules: ["@nuxtjs/feed", "@nuxt/content"],
  feed: {}
}
```

## Créez le contenu du flux

C'est ici que les chose sérieuses commencent.

Ajoutez un objet feed dans votre nuxt.config.js comme ci-desuss.
Maintenant, créons notre feed:

### On va devoir commencer par lui attribuer un chemin, un titre, un lien et une description.

```javascript
feed:{
    path: "/feed.xml",
    async create(feed) {
    feed.options = {
        title: "Benjamin Geets :: Blog",
        link: `lien/vers/votre/blog`,
        description: "Etudiant belge et développeur web"
        }
    }
}
```

### Ensuite, on ajoute le contenu de Nuxt Content

```javascript
const { $content } = require("@nuxt/content")
const posts = await $content("blog").fetch()
```

### Maintenant, on ajoute chaque post du blog au flux

```javascript
posts.forEach(post => {
  feed.addItem({
    title: post.titre,
    image: `lien/vers/votre/image`,
    id: `lien/vers/votre/article`,
    link: `lien/vers/votre/article`,
    description: post.description,
    date: new Date(post.date)
  })
})
```


## Le code complet

J'y ai ajouté un cacheTime et le type (qui peut être rss2, atom1 ou json1).

```javascript
export default {
  modules: ["@nuxtjs/feed", "@nuxt/content"],
  feed: {
    path: "/feed.xml",
    async create(feed) {
      feed.options = {
        title: "Benjamin Geets :: Blog",
        link: `lien/vers/votre/blog`,
        description: "Etudiant belge et développeur web"
      }
      const { $content } = require("@nuxt/content")
      const posts = await $content("blog").fetch()

      posts.forEach(post => {
        const lien = `lien/vers/votre/article`
        feed.addItem({
          title: post.titre,
          image: `lien/vers/votre/image`,
          id: lien,
          link: lien,
          description: post.description,
          date: new Date(post.date)
        })
      })
    },
    cacheTime: 1000 * 60 * 15,
    type: "rss2"
  }
}
```



### Et voila!

Votre flux rss est disponible selon le chemin que vous lui avez attribué, https://geets.dev/feed.xml dans l'exemple.
