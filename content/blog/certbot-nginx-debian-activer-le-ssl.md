---
titre: Activer un certificat SSL Let's Encrypt avec Certbot et Nginx 
image: certbot.jpg
description: Solution simple et rapide pour avoir le HTTPS
tags : [HTTPS, NGINX, Certbot]
date: 2021-03-21
---
Avoir un site en HTTPS est indispensable en 2021. Si vous passez par un hébergeur, il gère probablement cela pour vous, mais si vous avez votre propre serveur ou VPS, voici la démarche à suivre afin d'avoir votre certificat SSL avec Let's Encrypt gratuitement

## Commencez par installer votre site

Avant toute chose, vous allez devoir déployer vos applications/sites afin que l'outil que nous allons utiliser, certbot (qui est un outil officiel), active le SSL sur chacun d'entre eux.  

## Installer Certbot

### 1. Connectez vous et installez Snapd si vous ne l'avez pas déjà fait

Avant toute chose, il vous faudra Snapd (pas présent de base sur Debian par exemple). Connectez vous en SSH et exécutez la commande suivante: 

```bash
$ sudo apt install snapd
```

Ensuite, assurez vous que votre version de snapd est à jour 

```bash
$ sudo snap install core; sudo snap refresh core
```

### 2. Installez CertBot

```bash
$ sudo snap install --classic certbot
```

### 3. Préparez la commande Certbot

Exécutez la commande suivante afin de vous assurer que la commande certbot puisse être exécutée.

```bash
$ sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

## Installez votre certificat

Exécutez certbot comme suit:

```bash
$ sudo certbot --nginx
```

## Voila 🔒

Votre site est en HTTPS !