---
title: VisualKraken
emoji: 🦑
description: Site vitrine développé avec Nuxt
lien: https://visualkraken.netlify.app
slug: visualkraken
github: https://github.com/benjamingeets/visualkraken
techno:
    - Vue.js
    - Nuxt.js
    - SASS
---

# VisualKraken

![Index](/img/index_vk.webp)

## L'idée

Création d’une agence web en coopération avec [Tristan Galand](https://galandtristan.be/).

Dans notre organisation, j’ai pris la place de développeur et j’ai donc développé ce site en ayant pour maitre mot la légèreté. Pour arriver à mes fins, j’ai donc créé un site avec **Nuxt.js** afin de générer un site complètement statique.

### Le blog

N'ayant pas prévu de créer énormément de contenu pour le blog et gardant en tête l'objectif d'un site statique, le contenu est écrit en **Markdown** et géré par le module **Content** de **Nuxt**. Cela me permettait de simplement rédiger les articles, les ajouter au répertoire sur **GitHub** et mettre à jour le contenu via un système d'**intégration continue** sur **Netlify**.

### La page de contact

Le site étant hébergé sur Netlify, j'ai utilisé leur [fonctionnalité de formulaire](https://www.netlify.com/products/forms/) pour intercepter les messages envoyés sur la page de contact (et par ce biais éviter d'avoir à créer un système dédié à cela).

**Mise à jour (avril 2021)**: Nous avons pris la décision d’arrêter ce projet afin de nous concentrer sur notre auto-formation.

![Blog](/img/blog_vk.webp)