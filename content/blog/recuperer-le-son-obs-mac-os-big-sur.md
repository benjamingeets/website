---
titre: Récupérer le son de MacOS Big Sur dans OBS (Apple Silicon)
image: background_music.jpg
description: Parce que 3/4 des solutions ne marchent pas sous BigSur ou sur m1 lol!
tags : [MacOS]
date: 2021-04-13
---

Récemment, [je me suis mis à stream sur twitch](https://www.twitch.tv/benjaminfantuning). C'est chouette, mais j'ai un Mac sous MacOS Big sur. Et là vient le problème, de base, sous Windows, OBS récupère facilement le son. Sur Mac, c'est une autre paire de manches.

Il existait jusqu'à présent [iShowU Audio Capture](https://obsproject.com/forum/resources/os-x-capture-audio-with-ishowu-audio-capture.505/) qui semblait combler ce manque, mais pas d'bol, le logiciel n'est pas disponible sous MacOS Big Sur.
Entre temps, la version 0.4.0 de [Background Music](https://github.com/kyleneideck/BackgroundMusic) est sortie. Au départ, c'est un logiciel qui fait de mélangeur de volume (qui manque cruellement à MacOS). Et d'une pierre deux coups, il crée un périphérique virtuel qui écoute votre son (et qu'on peut donc récupérer). 

![Background Music](/img/blog/media/melangeur.png)

### Ajouter Background Music à OBS

Pour se faire, il vous suffira d'ajouter un Audio input. (Donc ajouter une nouvelle source)

![Ajoute de la source](/img/blog/media/nouveau_audio_input.png)

Et magie, un micro virtuel a fait son apparation, il se gère comme un micro normal et vous pouvez moduler les volumes de vos différentes applications depuis votre barre des menus. 

![Audio Mixer](/img/blog/media/audio_mixer.png)

[<button>⬇️ La version compatible</button>](https://github.com/kyleneideck/BackgroundMusic/releases/tag/0.4.0-SNAPSHOT-b38f6dd)