---
titre: Les bases du MarkDown
image: markdown.jpg
description: Découvrez ce standard d'écriture web pour écrire vite et bien.
tags: [Markdown]
date: 2021-03-23
---

[Je vous en parlais dans cet article](https://benjamingeets.be/blog/module-content-nuxt), mon blog tourne via des fichiers en .md. Cela induit que j'écris mes blog post et mon portfolio en markdown dans VS Code directement. Voici ma petit _cheatsheet_ !

## Cheatsheet du MarkDown

### Ecrire en gras

```markdown
**Ecrire en gras**
```

**Ecrire en gras**

---

### Ecrire en italique

```markdown
*Ecrire en italique*
```

*Ecrire en italique*

---

### Faire une liste non ordonnée:

```markdown
- Un
- Deux
- Trois
```

- Un
- Deux
- Trois

---

### Faire une liste ordonnée:

```markdown
1. Un
2. Deux
3. Trois
```

1. Un
2. Deux
3. Trois

---

### Les lignes

```markdown
---
```

---

### Les titres

`# Titre 1`

# Titre 1

`## Titre 2`

## Titre 2

Et chaque # ajouté fera descendre l'importance du titre.

---

### Le code
```markdown
    ```
        taper du code
    ```
```
```
        taper du code
```
```markdown
`Taper du code sur une ligne`
```
`Taper du code sur une ligne`

---

### Les liens
```markdown
[Faire un lien](https://benjamingeets.be)
```
[Faire un lien](https://benjamingeets.be)

---

#### Les tableaux
```markdown
| Colonne 1      | Colonne 2                     |
| -------------- | ----------------------------- |
| Première ligne | Première ligne mais colonne 2 |
| Seconde ligne  | Seconde ligne mais colonne 2  |
```
| Colonne 1      | Colonne 2                     |
| -------------- | ----------------------------- |
| Première ligne | Première ligne mais colonne 2 |
| Seconde ligne  | Seconde ligne mais colonne 2  |

---

### Echapper des caractères
```markdown
\`Ceci n'est pas du code\`
```
\`Ceci n'est pas du code\`

---

### Les blockquotes
```markdown
> Ceci est une citation  
> Il est possible de les imbriquer
>
> > Comme ceci
```
> Ceci est une citation  
> Il est possible de les imbriquer
>
> > Comme ceci

---

### Retour à la ligne
```markdown
Pour effectuer un retour à la ligne,  
il suffit d'enchainer 3 espacements en fin de ligne
```
Pour effectuer un retour à la ligne,  
il suffit d'enchainer 3 espacements en fin de ligne

---

### Les images
```markdown
![Un joli placeholder](https://via.placeholder.com/150x150)
```

![Un joli placeholder](https://via.placeholder.com/150x150)

