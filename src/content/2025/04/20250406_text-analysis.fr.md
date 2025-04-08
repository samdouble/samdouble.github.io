Hier, je me suis donné pour objectif d'être capable d'utiliser ma `GitHub Text-Analysis Action` pour obtenir une liste de toutes les phrases de plus de 25 mots sur ce blogue.

### Analyse de Markdown et de HTML
Avec la librairie `marked`, je suis en mesure de convertir du texte écrit en Markdown en HTML.  
C'est très pratique pour plusieurs raisons. D'abord, parce que le Markdown peut contenir du HTML et qu'il se peuve que j'ajoute éventuellement des règles pour que l'action valide ce HTML.  Ensuite, parce que ça offre une interface simple pour valider à la fois des textes écrits en Markdown et des pages HTML. Je n'ai qu'à écrire un validateur pour le HTML et quand l'action devra valider du Markdown, elle n'aura qu'à le convertir en HTML avec `marked` et faire passer ce HTML par le même validateur qu'une page HTML qui aurait été écrite directement par un utilisateur.

Avec `node-html-parser` et un petit code qui traverse récursivement les "noeuds" à la recherche de texte, ça a été très simple de faire une version minimale du validateur HTML. Pas une version béton à tout casser, mais au moins une qui peut reconnaître les différents paragraphes dans un fichier Markdown.

### Action ou CLI?
Plusieurs fois pendant le développement, j'ai oublié de mettre à jour le dossier `dist`. Ça m'a fait réfléchir. Est-ce que ce ne serait pas mieux, au lieu de bâtir une action GitHub, de faire une librairie exécutable qui s'installerait avec `npm install -g`, comme ESLint


TODO
