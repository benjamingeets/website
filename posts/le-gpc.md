---
title: J'ai découvert le GPC et ça a l'air cool comme idée
publish_date: 2022-06-18
---

Je suis dev. Et c'est en partie pour cette raison que je suis très attaché à ma vie privée sur Internet. J'ai tout ce qu'on peut imaginer comme add-ons sur mon Firefox pour faire respecter mon choix et j'évite les sites peu scrupuleux dans ce domaine (comme Facebook et Google).

Mais il faut bien dire que c'est une corvée à faire respecter. Que ce soit en désactivant les cookies de suivi via les bannières ou avec une armée d'add-ons.


 Et encore, je sais me servir de mon ordinateur et je comprends plus ou moins ce qui s'y passe. C'est très loin d'être le cas des gens normaux qui ne peuvent pas comprendre les tenants et aboutissants de ces problématiques mais qui subissent quand même ces horribles bannières.

Bref, je pense que malgré les efforts européen, la vie privée sur Internet est **très loin** d'être un droit décemment respecté. 

Mais aujourd'hui, j'ai découvert le **G**lobale P**rivacy** **C**ontrol. Et c'est une idée qui m'a bien plue. 

Le concept du GPC, c'est d'envoyer un unique signal pour informer le serveur que le visiteur ne souhaite pas être tracké. Cela permet un gain de temps pour le client qui n'a plus à décocher tous les horribles toggles pour faire respecter son choix, mais ça pourrait être un gros gain de temps niveau dev aussi, plus besoin de faire des cookie notice horrible qu'au final 2/3 des utilisateurs vont accepter par flemme.

Actuellement, le GPC n'est pas très supporté. Mais il est disponible sur Firefox, Bravo & Duckduckgo browser.

## Comment ça marche côté serveur

Un des avantages du GPC c'est que ce n'est pas bien compliqué à utiliser.

```js
app.get("/", function(req, res) {
  const gpcValue = req.header('Sec-GPC')
  if (gpcValue === "1") {
    // signal detected, do something
  }
})
```

(même côté client d'ailleurs)

```js
const gpcValue = navigator.globalPrivacyControl
if (gpcValue) {
  // signal detected, do something
}
```

Tout ça est encore loin d'être adopté, mais je suis assez convaincu par cette citation

> Sois le changement que tu veux voir dans le monde

Alors je vais, autant que possible, intégrer le GPC ! 