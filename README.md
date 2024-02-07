# Ylife
Create application for Association


# Package et dependance a installer 

```
npm install express mongoose body-parser
```
```
npm install axios react-navigation react-navigation-stack
```


# Lancement de l'application en local

Au tout début pour remettre en place les dépendances

```
npm install
```

Run pour tester les GET et POST

```
node app.js
```

Run pour tester l'application

```
npx react-native run-android
```

Télécharger android Studio pour le faire fonctionner
Ne pas oublier de mettre son Path JAVA_HOME et ANDROID_HOME 
Créer un AVD dans android studio pour pouvoir avoir un téléphone ou brancher un téléphone

# Fonctionnement du run-android

Aller dans /android

Modifier les différents fichiers suivants :

Dans gradle.properties changer cette ligne 'org.gradle.jvmargs=-Xmx1024m'
Dans build.gradle modifier les dépendances si besoin
Dans gradle-wrapper.properties changer ceux-ci 
```
distributionUrl=https\://services.gradle.org/distributions/gradle-6.5-all.zip
``` 
suivant la version de gradle utiliser 

Si problème de dépendance remove les gradles en faisant
```
rm .gradle
``` 
et 
```
rm ~/.gradle
```
Si pas possible de suppriumer reload vscode

# Commande pour gradle et problème

```
./gradlew clean
```
```
./gradlew --stop
```
```
./gradlew --status
```

```
npx react-native doctor
```

