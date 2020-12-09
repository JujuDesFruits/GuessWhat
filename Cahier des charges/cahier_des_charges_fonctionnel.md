# Cahier des charges fonctionnel de l'application Guess What
édité le 24 novembre 2020   
auteur [Julien TRIJEAN](https://www.linkedin.com/in/julien-trijean-21183a147) Etudiant Ynov - [Mastère data scientist](https://www.ynov.com/formation/ynov-masteres/data-scientist/)

## Présentation Générale du projet
### L'application
L'application sera disponible sous deux formes, une application mobile, et un site web. le principe étant de proposer un jeu de pari en ligne sur lequel les utilisateurs peuvent proposer des questions réponses sur lesquelles les autres joueurs peuvent miser des point virtuels. Les utilisateurs en posant leur questions deviennent responsable de leur questions et seront pénalisé en cas de non réponses et ils seront récompensé de points en fonction du nombre de like sur leur questions. Un dashboard publique mettra en avant les profils des joueurs avec le plus de réussites. Des récompenses quotidiennes sont prévu pour fidéliser l'utilisateurs.

### Contexte
Dans le cadre de la formation proposer par Ynov, on nous offres des créneaux pour la réalisation de projets personnel: les [Ydays](https://www.ynov.com/ydays/). Pour cette occasion un projet simple à faire mais qui pourrait permettre à des étudiants de différentes séries de réaliser une application concrete à vu le jour. Proposer un projet d'un jeu de pari en ligne semble facilement réalisable de part sa faible complexité en développement. Le projet n'aura à disposition que 12 séances de 7h pour être réaliser. Chaque séance auront lieu sur certains mercredi alloué par l'école. Ce projet fera l'oeuvre d'une double évaluation, une en milieux du projet et une en fin de projet, par un jury du campus.

### Enoncé du besoin
L'utilisateur bénéficiera d'une utilisation complètement gratuite sans achat intégré d'un jeu type pari en ligne cross-plateform. Il pourra accédé à un dashboard publique des meilleurs profils, voir les statistiques sur les réponses à ces questions posées, voir les statistiques sur les ses réponses.
L'utilisateur  accède en premier lieux à une page de connexion, puis à une page d'accueil regroupant les différente catégories de questions, l'onglet de dashboard, son profil et les questions du jour. Sur son onglet profil, les statistiques de l'utilisateurs seront disponible.

### Environnement du produit
Ce projet est porté par une équipe de 7 étudiants: 2 Développeurs , 3 Market & Com, 1 Designeuse, 1 Admin system. Nous n'avons à notre disposition que nos ordinateurs pour développer l'application et un serveur personnel ne pouvant supporter qu'une faible charge de traffique. Etant un projet à but non lucratif, nous n'investirons aucune achat pour le projet et réaliseront la totalité du projet sur des outils libre de droits et non payant (github, serveur linux, base de donnée MongoDB). Le développement du projet se fait dans des locaux fournit par l'école ou à distance sur teams avec un compte étudiant (conditions covid)

## Expression fonctionnel du besoin
### Fonctions de service et de contrainte
Nous souhaitons donc réaliser une application mobile compatible Play Store (Android) et un site web. Les deux plateformes contienne les mêmes services:
- Page de log, création d'un compte, oublie du mot de passe.
- Page d'accueil, onglet de catégories, outil de recherche, onglet profils, onglet dashboard, création d'un salon (la contrainte du temps rend optionnel ce dernier)
- Page d'une catégorie, fitre par défaut des questions du jour, en cliquant sur la questions on peut parier sur la réponse, liker la question ou reporter un abus. Il y'a aussi un filtre pour le top des questions, les nouvelles questions.
- Page profil, permet de cliquer sur des onglet comme les info utilisateurs avec la possibilité de changer son mot de passe. Il y'a les statistiques utilisateurs, et un historique ses questions réponses données.
- Page dashboard, permet d'afficher les personnes ayant remportées le plus de points. Celle ayant obtenue le plus de points dans la semaine. Les personnes ayant le plus posées de questions seront aussi affiché.
- Page Salon, pour inviter des amis à jouer ensemble via un code (?). une fois dans le même salon un nbx de point et réparti entre joueur et une personne est choisi comme poseur de question. Les autres mise, celui qui pose la question est choisi à la fin d'une question.

### Critères D'appréciation
Les critères determiants pour l'évaluation des proositions sont la capacité à permettre à un utilisateur de se connecter à un compte pour pouvoir poser et répondre à des questions.   
La réussite du projet fluctura en fonction du nombre de fonctionnalités disponible en plus des simples questions/réponses.

### Niveaux des critères d'appréciation
Ceci est un classement ordonnée des priorité par ordre décroissant (du plus important au moins important):
- Création et connection à un compte
- Répondre aux questions
- Poser des questions
- Ordonner et classer les questions
- Gestion du mdp oublié
- Proposer du reporting
- Classement
- Changer de langue/région
- Récompense quotidienne
- Stats utilisateurs
- Outil de recherche
- Création d'un salon privé

## Cadre de réponse
### Pour chaque besoin
Pour le besoin de connection utilisateur, un serveur de base de données doit être disponible h24. ce dernier doit être laintenu en période creuse uniquementet fait l'oeuvre d'alerting en cas d'anomalie.   
Pour le besoin d'envoie de mail, dans le cadre de mot de passe oublié ou de rappel de question à répondre, un serveur SMTP doit être disponible h24 et faire l'oeuvre de maintenance en période creuse.   
Pour le besoin de répondre aux questions réponse, il est nécessaire de disposer d'une appli mobile (android) et une page web.   
Pour le besoin d'intuitivité, et d'accessiblilité, il faut pouvoir rendre une application simple d'usage avec une chartes graphique définit en fonction de son utilisateur cible.   
Pour des besoins d'impacte clientèle, il est important de prévoir un plan de com.

### Pour l'ensemble du produit
Le prix de la réalisation n'est pas à prendre en compte puis ce qu'il s'agit d'un projet éducatif à but non lucratif, sans fond ni gain. Le projet est amené à évoluer en fonction de l'avancé de ce dernier. Cependant, rappelons qui ne sera travaillé uniquement pendant les périodes horaires attribué au projet: 1 Mercredi sur deux hors vacances scolaire (un cumul de 12 séances). Le contexte covid oblige le télétravail ce qui pourrait amené certains retards liéà la difficulté du travail en groupe inter corps de métiers.
