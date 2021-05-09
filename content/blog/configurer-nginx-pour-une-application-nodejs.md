---
titre: Configurer Nginx pour des applications NodeJS (Next.js, Nuxt.js, CMS,...) 
image: nginx_nodejs.jpg
description: Pour s'en servir en tant que reverse proxy 
tags : [NGINX, NodeJS]
date: 2021-04-08
---
## Créer un fichier de configuration pour votre application

```bash
sudo nano /etc/nginx/sites-available/VOTRE_SITE
```
*vous pouvez utiliser n'importe quel éditeur de texte, je suis juste habitué à nano*

On va devoir créer un upstream comme suit :
```nginx
upstream votreupstream{
    server localhost:XXXX;
}
```
Où XXXX est à remplacer par le port utilisé par votre application (3000 pour React, 8080 pour Vue ou encore 1337 pour Strapi par exemple).

Dans ce même fichier, indiquons au serveur comme il doit agir :

```nginx
upstream votreupstream{
    server localhost:XXXX;
}

server{
    listen 80;
    listen[::]:80;
    server_name votre-domaine.com;

    location / {
        proxy_pass http://votreupstream
    }
}
```

Dans ces lignes, on va définir :
- le port à écouter (80 pour du web)
- le domaine à écouter (votre-domaine.com en l'occurence), vous pouvez aussi y définir un sous-domaine pour une API par exemple *(mais vous devez faire pointer le sous-domaine vers votre serveur)* 

Et lui indiquer de toujours amener à votre upstream `votreupstream`. 

La ligne `listen[::]:80;` sert aux IPv6

## Créer un lien symbolique pour activer votre configuration

```bash
sudo ln -s /etc/nginx/sites-available/votre_site /etc/nginx/sites-enabled/votre_site
```


Vous pouvez ici vérfier votre configuration avec cette commande *(faites attention aux points virgules qu'on oublie facilement)*

```bash
sudo nginx -t
```

Si tout se passe bien, on reload la configuration de nginx 

```bash
sudo service nginx reload
```

**Et voila!** Vous pouvez répéter l'opération pour chacune de vos applications. 

Si vous souhaitez que vos applications aient un certificat SSL, [je vous explique tout ça ici (2min)](/blog/certbot-nginx-debian-activer-le-ssl)
