# GuessWhat

## Règles de modification du code

liste des étapes pour modifier du code:
cloner le projet (ou utiliser le ssh):
```
git clone https://github.com/JujuDesFruits/GuessWhat.git
```
créer votre branche
```
git checkout -b "nom_de_la_branche"
```
faite vos modifications   
pousser les modifications sur la branche principale
```
git add .
git commit -m "nom_de_la_modification_explicite"
git push --set-upstream origin nom_de_la_branche
```
cliquer sur le lien proposer et completez le pull request.
**Ne pas s'auto merger à moins de réaliser un changement mineur**
Pour mettre votre branche à jour dans le cas d'un conflit avec la branche *master* réaliser cette étape:
```
git checkout master
git pull
git checkout "nom_de_la_branche"
git pull . master
```

# Install dependencies
```
$ npm run cordova-prepare
```

# Run app
```
$ npm run serve # Development Web
$ npm run build # Build Web
$ npm run cordova-serve-android # Development Android 
$ npm run cordova-build-android # Build Android 
$ npm run cordova-build-only-www-android 
```
