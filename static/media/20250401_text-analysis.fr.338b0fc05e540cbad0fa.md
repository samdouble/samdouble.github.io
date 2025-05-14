Il m'arrive de relire certains des articles que j'ai écrit sur ce blogue et de trouver que je fais des longues phrases. Et si j'étais capable d'en être averti par une GitHub Action? J'ai fait des recherches et à part une action avec 3 lignes de code qui compte les mots dans un texte, je n'ai rien trouvé sur le GitHub Marketplace. C'est comme ça qu'est né `github-text-analysis-action`.

Mon idée est de faire une action qui prendrait en paramètre le chemin vers un fichier de configuration, où seraient détaillées des règles de validation. Il serait ainsi possible de valider la longueur des phrases, oui, mais aussi plein d'autres choses, comme des erreurs simples, des mots qui reviennent trop souvent, etc... Ce serait très similaire à ce qu'ESLint fait pour du code JavaScript/TypeScript, mais avec le langage naturel. Ça pourrait être utile pour détecter des problèmes dans un README, dans un blogue avec des fichiers statiques comme celui-ci ou même une documentation faite sur `Docusaurus`, qui construit ses pages à partir de fichiers MDX (Markdown avec composantes React).

### Début du projet
Pour créer une action GitHub en TypeScript, j'ai suivi cet [excellent tutoriel](https://dev.to/balastrong/create-a-custom-github-action-in-typescript-21ad), en l'adaptant ici et là selon mes besoins. Il y existe bien un [repo GitHub](https://github.com/actions/typescript-action) qu'on peut copier pour créer facilement une action en TypeScript, mais je trouvais qu'il y avait beaucoup de code "boilerplate" dont je ne me servirais probablement jamais.

Je ne voulais pas devoir publier un millier de versions non-fonctionnelles de l'action sur le Marketplace avant d'en avoir une qui marche, mais il se trouve qu'on peut utiliser une action sans la publier, en faisant référence à son repo GitHub. Mieux encore, on peut pointer sur une branche ou un commit en particulier. Je pouvais donc tester mon action depuis ce blogue (en ajoutant au workflow, par exemple: `uses: samdouble/github-text-analysis-action@my-test-branch`), sans même devoir fusionner un tas de commits brisés dans la branche principale du repo de l'action.

### Gestion des dépendances
Une particularité des actions GitHub, c'est qu'elles doivent être "stand-alone", c'est-à-dire contenir tout le code dont elles ont besoin pour fonctionner. La solution simple proposée par la documentation des GitHub Actions est de versionner le dossier `node_modules`. Avec TypeScript en plus, ça veut dire qu'il faut aussi versionner les fichiers JavaScript générés par le compilateur TypeScript.

Ce n'est pas idéal. J'ai essayé l'alternative, qui est d'utiliser le module `@vercel/ncc` pour compiler dans un seul fichier tout le code de l'action, incluant les `node_modules`.


J'oublie parfois de recompiler 

vercel
action pour pousser des fichiers sur un commit
J'ai utilisé [cette action](https://github.com/marketplace/actions/update-generated-files-action)



TODO


