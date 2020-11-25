# Cahier des charges technique de l'application Guess What
édité le 24 novembre 2020   
auteur [Julien TRIJEAN](https://www.linkedin.com/in/julien-trijean-21183a147) Etudiant Ynov - [Mastère data scientist](https://www.ynov.com/formation/ynov-masteres/data-scientist/)

## Code
## Base de Données
### MongoDB
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
