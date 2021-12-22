<!-- This is the full report in french --> 


    <!-- [[{ Résume }]] -->

Il existe de nombreuses technologies qui sont utilisées sur Internet pour partager des fichiers, chacune d’entre elles ont des fonctionnalités, des méthodes et des protocoles différents. Cependant, le plus commun et le plus facile est le Web qui a été établi par quelques fonctionnalités simples. Le Web se développe continuellement pour être aussi facile pour les utilisateurs. Les développeurs Web veulent créer une machine qui pense comme des humains en ajoutant de nouveaux outils, méthodes et protocoles au Web actuel.

L’objectif de cet article est de présenter NextJS, l’un des frameworks les plus populaires qui aide les développeurs du monde entier à créer des sites Web, et également de présenter notre exemple de site Web créé par NextJS et hébergé par Vercel.

Le résultat final n’est pas le site Web lui-même, mais plutôt l’expérience de développement dans laquelle les développeurs bénéficieront le plus, "La vérité ne peut être trouvée qu’à un seul endroit: le code.". [1]

Mots-clés : Internet, Web, NextJS, Vercel, code.

    <!-- [[{ Introduction générale }]] -->

Au siècle dernier, L'internet devient de plus en plus important pour nous, les humains, car il est utilisé littéralement pour tout ce que nous faisons, nous y accédons quotidiennement pour faire diverses activités telles que faire des achats, communiquer, vérifier la map..., *et c’est* pourquoi *nous avons* besoin de sites Web pour faire de telles choses.

Problème: De nos jours, c’est un voyage long et difficile pour développer un site Web, il est à la fois coûteux et difficile pour les développeurs de créer un site Web, le développement Web a vu un énorme avènement de l’application à page unique (SPA) au cours des deux dernières années. Le développement initial était simple : rechargez une page complète pour effectuer une modification de l’affichage ou effectuer une action de l’utilisateur. Le problème avec cela était un énorme temps d’aller-retour pour la demande complète pour atteindre le serveur Web et revenir au client.

Puis est venu NextJS, qui offre une excellente expérience utilisateur, une facilité d’utilisation et un fractionnement automatique du code qui profite aux développeurs débutants et avancés, Cette solution est devenue populaire car elle résolvait un problème que de nombreux développeurs Web avaient l’habitude d’avoir avec les applications Web rendues côté client (dans le navigateur). NextJS fournit une solution prête à l’emploi pour le rendu côté serveur (SSR) des composants React.

*Pour présenter notre travail, nous avons conçu notre rapport en trois chapitres :*
Le premier chapitre contient une étude générale sur le développement Web, la technologie des composants et la façon dont NextJS peut être votre prochaine technologie à apprendre.
Le deuxième chapitre se compose de divers diagrammes qui sont à l’origine du développement de notre site Web.
Le dernier chapitre se compose de deux parties, la partie qui contient tous les outils / langages que nous avons utilisés et la deuxième partie présente notre site Web avec ses différentes fonctionnalités.

SPA -> Single Page Application
SSR -> Server Side Rendering

    <!-- [[{ Introduction }]] -->

De nos jours, les développeurs ont de plus en plus de mal à effectuer des tâches liées au développement Web, dans ce chapitre, nous vous présenterons ce qu’est la technologie des composants et comment cela profite-t-il à nous les développeurs. Nous approfondirons également des sujets détaillés tels que javascript et ses bibliothèques et frameworks. Enfin, pour quoi NextJS a-t-il été construit et en quoi cela nous profite-t-il?

    <!-- [[{ Javascript }]] -->
    <!-- [[{ Definition }]] -->

JavaScript souvent abrégé JS, est un langage de programmation qui est l’une des technologies de base du World Wide Web, JavaScript fait partie de la triade de technologies que tous les développeurs Web doivent apprendre : HTML pour spécifier le contenu des pages Web, CSS pour spécifier la présentation des pages Web et JavaScript pour spécifier le comportement des pages Web [2], JavaScript interagit avec le code HTML et rend les pages Web plus actives. [3]

HTML -> Hyper Text Markup Language
CSS -> Cascading Style Sheets

    <!-- [[{ Bibliothèques et frameworks }]] -->

Les bibliothèques JavaScript sont des collections d’extraits de code préécrits qui peuvent être utilisés (et réutilisés) pour exécuter des fonctions JavaScript courantes. D’autre part, les frameworks javascript sont un ensemble complet d’outils qui aident à façonner et à organiser votre site Web ou votre application Web. Lorsque vous essayez de définir des frameworks dans le contexte du framework JavaScript par rapport à la bibliothèque, pensez-y de cette façon: les bibliothèques JavaScript sont comme des meubles qui ajoutent du style et de la fonction à une maison déjà construite. Alternativement, les frameworks sont un modèle que vous utilisez pour construire la maison elle-même.

Voici quelques-unes des bibliothèques les plus populaires:

  * React 
  * JQuery
  * D3

    <!-- [[{ React }]] -->

React est une bibliothèque JavaScript créée en 2011 par Facebook (maintenant Meta) qui se spécialise dans l’aide aux développeurs pour créer des interfaces utilisateur, ou UIs. En termes de sites Web et d’applications Web, ReactJS tente de résoudre le problème à partir de la couche View. Il peut très bien être défini et utilisé comme le V dans n’importe lequel des frameworks MVC. Il n’a pas d’opinion sur la façon dont il devrait être utilisé. Il crée des représentations abstraites de vues. Il décompose des parties de la vue dans les composants. Ces composants englobent à la fois la logique pour gérer l’affichage de la vue et la vue elle-même. Il peut contenir des données qu’il utilise pour afficher l’état de l’application.

React est fondé sur l’idée que la manipulation DOM est une opération coûteuse et doit être minimisée. Il reconnaît également que l’optimisation de la manipulation DOM à la main entraînera beaucoup de code standard, qui est sujet aux erreurs, ennuyeux et répétitif. React résout ce problème en donnant au développeur un DOM virtuel à restituer au lieu du DOM réel. Il trouve la différence entre le DOM réel et le DOM virtuel et effectue le nombre minimum d’opérations DOM requis pour atteindre le nouvel état. [4]

UI -> User Interface
MVC -> Model View Controller
DOM -> Document Object Model

    <!-- [[{ NextJS }]] -->

    <!-- [[{ Avantages }]] -->

* Courbe d’apprentissage en douceur
* Standardisation
* Support prêt à l’emploi
* Adaptabilité et réactivité
* Sécurité des données
* Idéal pour l’optimisation des moteurs de recherche
* Délai de mise sur le marché rapide
* Zéro configuration 
* Fractionnement automatique du code 
* Facilité de mise à niveau.
* Prise en charge SSR, SSG

SSR -> Server Side Rendering
SSG -> Static Site Generating

    <!-- [[{ Inconvénients }]] -->

* Routage
* Absence de gestionnaire d’état intégré


    <!-- [[{ Citations }]] -->

* 1 Martin, Robert C., James Grenning, and Simon Brown. Clean architecture: a craftsman's guide to software structure and design. No. s 31. Prentice Hall, 2018.
* 2 Flanagan, David. JavaScript — The definitive guide (6 ed.). p. 1.
* 3 Paulson, Linda Dailey. "Building rich web applications with Ajax." Computer 38.10 (2005): 14-17.
* 4 Vipul, A. M., and Prathamesh Sonpatki. ReactJS by Example-Building Modern Web Applications with React. Packt Publishing Ltd, 2016. 
