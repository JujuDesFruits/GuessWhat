# Cahier des charges technique de l'application Guess What
édité le 24 novembre 2020   
auteur [Julien TRIJEAN](https://www.linkedin.com/in/julien-trijean-21183a147) Etudiant Ynov - [Mastère data scientist](https://www.ynov.com/formation/ynov-masteres/data-scientist/)

## Intro
### Contexte
Dans le cadre de la formation proposer par Ynov, on nous offres des créneaux pour la réalisation de projets personnel: les [Ydays](https://www.ynov.com/ydays/). Pour cette occasion un projet simple à faire mais qui pourrait permettre à des étudiants de différentes séries de réaliser une application concrete à vu le jour. Proposer un projet d'un jeu de pari en ligne semble facilement réalisable de part sa faible complexité en développement. Le projet n'aura à disposition que 12 séances de 7h pour être réaliser. Chaque séance auront lieu sur certains mercredi alloué par l'école. Ce projet fera l'oeuvre d'une double évaluation, une en milieux du projet et une en fin de projet, par un jury du campus.   

L'objectif est d'offrir à l'utilisateur une expérience de pari en ligne sans verser le moindre euro est sur des sujets diverses et variés.   

Le groupe de développent de l'application est crée cette année et est constitué exclusivement d'étudiants du campus Ynov. Nous sommes 7, 2 développeur, 3 market com, 1 designeuse et 1 admin system.

### Besoin et Contrainte
**Besoin Fonctionnel:**   
- Page de log, création d'un compte, oublie du mot de passe.
- Page d'accueil, onglet de catégories, outil de recherche, onglet profils, onglet dashboard, création d'un salon (la contrainte du temps rend optionnel ce dernier)
- Page d'une catégorie, fitre par défaut des questions du jour, en cliquant sur la questions on peut parier sur la réponse, liker la question ou reporter un abus. Il y'a aussi un filtre pour le top des questions, les nouvelles questions.
- Page profil, permet de cliquer sur des onglet comme les info utilisateurs avec la possibilité de changer son mot de passe. Il y'a les statistiques utilisateurs, et un historique ses questions réponses données.
- Page dashboard, permet d'afficher les personnes ayant remportées le plus de points. Celle ayant obtenue le plus de points dans la semaine. Les personnes ayant le plus posées de questions seront aussi affiché.
- Page Salon, pour inviter des amis à jouer ensemble via un code (?). une fois dans le même salon un nbx de point et réparti entre joueur et une personne est choisi comme poseur de question. Les autres mise, celui qui pose la question est choisi à la fin d'une question.   
**Contrainte :**   
Le développement est destiné à Android et web exclusivement. Donc développer sur un outil permettant de compilé le code en cross plateform est nécessaire. Nous avond donc choisi d'utiliser vue.js et strapi pour les deux plateformes. Sera à notre charge les servers tel que le serveur BDD, le serveur SMTP et le serveur Apache.

### Resultats attendus
- Création et livraison de maquettes en .pdf
- Intégration continue sur Git
- Dev cross-plateform et multi-langage
- Serveur maintenu et dispo sur une unique machine
- Artwork et logo en .png ou .jpeg

**Exigences :**   
Respect de la charte graphique et prise en compte des contraite relevé par le ciblage utilisateur

## Code
l'ensemble du code est open source disponible dans le [lient suivant](). Les choix techniques ont été réalisé par compétences présentes au sein de l'équipe.
### Vue.JS
Vue.js est un outil de dev front end open source.   
Le framework javascritp permet d'éditer des interface utilisateur ou dans notre cas une application mono-page.

### Strapi
Strapi est lui aussi open source, il s'agit d'un headless CMS (Content Management System est un manageur de contenue back end via API) pour réaliser des applications cross plateform.   
Ce dernier utilise l'API Vue pour la création d'appli mobile en utilisant REST ou GRAPHQL.

## Base de Données
### MongoDB
MongoDB est une base de donnée noSQL type document. Il facilite l'intégration de développement orienté objet.   
Développé pour être déployer en cloud, la ressource est donc facilement distribuable et parralélisable. Il répond à un besoin de fléxibilité.   
Directement compris dans l'intégrateur Strapi, il s'agit d'un outil adapté car moderne, avec une large communauté active. De plus il offre une certaine facilité de stockage tout en répondant aux besoins du projet.
   
La BDD sera composé de 4 collections à savoir:
- USER
- ANSWER
- QUESTION
- REPORT

### Format Données
Les données sont enregistré au format document.
Les utilisatueurs ont leur données enregistré sous le format suivant:
```
{
  userID: ObjectID,
  userConn: {userEmail: "email", userPWD: "password"},
  userPseudo: "pseudo",
  points: int
}
```
Les réponses des utilisateurs sont enregistrés aux format suivant:
```
{
  userID: ObjectID,
  QuestionID: ObjectID,
  choice: "",
  points: int
}
```
Les questions ont leurs données enregistrées au format suivant:
```
{
  QuestionID: ObjectID,
  userPseudo: "pseudo",
  DateStart: Date("<YYYY-mm-dd>") ISODate,
  DateEnd: Date("<YYYY-mm-dd_THH:MM:ss>"),
  categorie: "categorie",
  question: "String",
  like: int,
  answer: {"rep1", "rep2",...},
  soluc: "rep1",
  lang: "String"
}
```
Les abus seront enregistré de la manière suivante
```
{
  QuestionID: ObjectID,
  userID: ObjectID,
  reportReason: "String"
}
```
**Attention** Etant sur Mongo, si certain champ sont NULL, alors ils n'ont pas lieux d'exister sur une BDD type document.
## Serveur
La maintenance du serveur se fait par déploiment continue via github et Ansible. Par manque de ressources, le serveur est composé d'une unique machine sous ubuntu server avec peu de puissances, stockage et ram.

### Firewall
Responsable du filtrage des ports, de l'anti DDoS, il est composé d'un filtre Bbox et d'un programme serveur UFW. De cette manière toutes connections entrantes sont rejeté en dehors du web, BDD et SSH avec authentification.

### SMTP
Le serveur SMTP via ubuntu serveur permet sur le port 25 (d'envoyer ?) recevoir des emails. Un chiffrement TLS permet de sécuriser les messages.   
SPF & DKM permettent de poser des règles de receptions pour sécuriser la messagerie mail (ex eviter le spam).

### Apache
Apache est le framework responsable de la diffusion de la page web sur le port 443. Le choix est de rediriger le port 80 sur le 443 pour obliger une connexion chiffré. Ce dernier est alimenté en déploiment continue via GitHub et Ansible.
