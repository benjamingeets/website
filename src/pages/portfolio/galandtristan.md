---
layout: ../../layouts/Main-BlogPost.astro
title: Galandtristan.be
emoji: 📘
description: Portfolio jamstack
github: https://github.com/benjamingeets/galandtristan.be
lien: https://galandtristan.be
techno:
    - SvelteKit
    - Cockpit
---

# Galandtristan.be

![galandtristan.be](/img/galandtristan.webp)

## La JAMSTACK

Ce portfolio est développé en suivant l'architecture **Jamstack**, cela offre certains avantages (performances, sécurité, prix,...). Pour ce faire, j'utilise SvelteKit avec l'adapter static combiné à un hébergement sur Netlify.

A chaque mise à jour effectuée dans le CMS (Cockpit), le webhook netlify de mon projet est appelé et cela permet de re-build le portfolio de manière complètement static.

## Le CMS

Initialement, j'utilisais Strapi (CMS Headless JavaScript), mais cela induisait la gestion d'un serveur, c'était un peu trop pour un simple portfolio. C'est pour cela que j'utilise désormais Cockpit, CMS Headless PHP hébergé sur un hébergement mutualisé. 

![cms](/img/cms_gt.webp)