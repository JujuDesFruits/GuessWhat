# Cahier des charges technique de l'application Guess What
édité le 24 novembre 2020   
auteur [Julien TRIJEAN](https://www.linkedin.com/in/julien-trijean-21183a147) Etudiant Ynov - [Mastère data scientist](https://www.ynov.com/formation/ynov-masteres/data-scientist/)

## Code
## Base de Données
### MongoDB
### Format Données
Les données sont enregistré au format document.
Il y'a deux type de données: Les Questions, et les utilisateurs
Les utilisatueurs ont leur données enregistré sous le format suivant:
```
{
  userID: ObjectID ,
  userConn: {userLogin: "login", userPWD: "password"},
  userEmail: "email"
}
```
Les questions ont leur données enregistrées au format suivant:
```
{
  userID: ObjectID ,
  Date: Date("<YYYY-mm-dd>") ISODate,
  DateEnd: Date("<YYYY-mm-dd_THH:MM:ss>")
  categorie: "categorie",
  question: ""
  like: int,
  report: int,
  answer: {"rep 1", "rep2",...}
  soluc: "rep1"
}
```
**Attention** Etant sur Mongo, si certain champ sont NULL, alors ils n'ont pas lieux d'exister sur une BDD type document.
## Serveur
