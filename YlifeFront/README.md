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

# Utilisation de prisma

Dans le dossier prisma c'est le schema de la BDD
Faire sa base de données puis lancer cette commande
```
npx prisma db pull
```
Cela récupère la base de données sous le format de prisma cela peu aider pour la mise en place et la récupération des données

Ensuite des que la BDD à été récupèrer installer le client

```
npm install @prisma/client
npx prisma generate
```
Cela permettra de générer le client pour faire les routes
Ensuite faire les routes dans API_prisma.ts
lancer en ligne de commande
```
npx ts-node API_prisma.ts
```

Evidemment il faudra faire en sorte au click que cela post dans la BDD pour que le compte ou un événement soit créer.