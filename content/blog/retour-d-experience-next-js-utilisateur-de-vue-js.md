---
titre: Retour d'expérience sur React et Next.js par un utilisateur de Vue.js 
image: vue_to_react.jpg
description: Il l'a fait. Avec un vent, légèrement défavorable, IL L'A FAIT.
tags : [Vue.js, React, Next.js, Nuxt.js]
date: 2021-04-18
---
*On pourrait croire qu'avec cette image je dis que Vue est supérieur, mais c'est une flèche en fait.*

Je suis étudiant, donc je ne suis pas encore un *vrai développeur qui gagne de l'argent*. Donc j'ai du temps pour me former pour devenir un *vrai développeur qui gagne de l'argent*. Et ces gens ont une caractéristique très claire: ils n'utilisent pas Vue, mais React. 

Mais pourquoi? Grâce à son ancienneté? Enfin cela ne change rien au problème. 

Toujours est-il que j'avais le [portfolio de Galand Tristan](/portfolio/galandtristan) à faire. Pour le backend, c'était clair, j'allais utiliser **Strapi**. Mais c'était l'occasion parfaite de me challenger un peu et tenter React.

## Next.js (React SSR)

Côté **Vue**, je suis adepte de **Nuxt.js** pour le **Server Side Renderin**g ou la génération statique. Le projet en question étant un portfolio, il me semblait judicieux d'opter pour du **SSR** pour avoir le meilleur de **React** et du **SEO**. Le context mis en place, mon expérience commence.

## HTML ++ ou JavaScript ++ ?

C'est le premier point qui m'a interloqué. Avec **Vue**, j'avais plus l'impression de faire du **HTML** boosté que du **JavaScript**. Sur **React**, c'est l'inverse, on fait du **JavaScript** et on le sent. Ce n'est pas un mal en soit, au contraire, ça m'a pousé à me servir un peu plus du **JavaScript** qu'avec **Vue**. 

Mais je trouve Vue plus explicite tout de même! Prenons comme exemple le rendu de liste en Vue et en React :

**Vue** :
```vue
<div v-for="(element,index) in liste">
    {{element}} numéro {{index}}
</div>
```

**React** :

```jsx
{liste.map((element,index)=>(
    <div> {element} numéro {index} </div>
))}
```
Et cela illustre bien mon propos: **Vue** ressemble à du **HTML**, **React** à du **JS**. Mais je suppose que votre préférence dépendra de vos affinités. 

## Le CSS, c'est pas possible.

Voici un vrai point où Vue est clairement meilleur que React: la gestion du **CSS**. Pour ajouter du style à un composant **Vue**, il suffit d'ajouter une balise `style` dans votre fichier .vue. On a la possibilité de le scope et même d'utiliser un préprocesseur comme **SASS**. Expérience presque native en somme.

Mais pour **React**... vous allez devoir utiliser **Tailwind CSS**. Et utiliser des `className`, pas des `class` *JavaScript oblige*. 
**React** ne gère pas nativement le **CSS**. Vous pouvez tout de même créez vos petits fichiers **SCSS** et vous en servir simplement, mais ça reste bien moins pratique que Vue.

**Tailwind CSS** a fini par devenir une "*solution*" évidente pour ne pas avoir 2 fichiers par composant. J'étais assez frileux à l'idée d'utiliser un framework CSS depuis mon traumatisme avec **Bootstrap**. Mais **Tailwind**, ça n'a rien à voir avec **Bootstrap**.

Si vous ne connaissez pas **Tailwind**, en gros, c'est un framework utilitaire qui va vous permettre de définir votre **CSS** avec des class comme suit :

**CSS** :

```css
p{
    color:blue;
    font-size:42px;
    height:100vh
}
```

**Tailwind CSS** :

```html
<p class="text-blue text-lg h-screen">Benjamin Geets</p>
```

Cela ne permet plus de ré-utiliser vos class, si vous scindez suffamment votre code, ça ne pose pas problème.

Si vous faites assez de composants, les class à rallonge de **Tailwind** ne se sentent pas trop et permettent d'aller assez vite une fois les noms mémorisés. Il n'est pas impossible que je m'en serve à nouveau, même sur Vue. 

## La génération statique

Pour faire du statique avec **Nuxt.js**, il suffit d'utiliser `npm run generate`. Pour **Next.js**, c'est plus compliqué. Déjà, il faudra prévoir votre code pour. 

En effet, quand dans **Nuxt.js**, il suffit d'utiliser un `asyncData` pour aller chercher vos données, que ce soit en **SSR** ou en statique, ce n'est pas le cas dans **Next.js**! Il vous faudra opter pour `getServerSideProps` ou `getStaticProps`.

## Lequel est le meilleur ?

**Franchement, menfou**. J'ai apprécié l'expérience de dev avec les deux et je compte continuer à utiliser les deux afin de m'habituer à être le plus versatile possible. Je ne les ai même pas trouvées spécialement différentes. Si ce n'est que **React** n'a pas d'équivalent à **Vue CLI** qui est un vrai atout à **Vue**. Les concepts restent les mêmes.

Je compte d'ailleurs m'attaquer à **Svelte** très bientôt qui, selon ses adeptes, est plus performant et clair. 