const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Event = require('./models/eventModel');
const User = require('./models/userModel');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/Ylife', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

// Route GET pour récupérer tous les événements
app.get('/api/evenements', async (req, res) => {
  try {
    const evenements = await Event.find().populate('createur');
    res.json(evenements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route POST pour ajouter un événement
app.post('/api/evenements', async (req, res) => {
  const nouvelEvenement = new Event({
    titre: req.body.titre,
    description: req.body.description,
    photo: req.body.photo,
    createur: req.body.createur,
    date: req.body.date,
    lieu: req.body.lieu,
    prix: req.body.prix,
  });

  try {
    const evenementAjoute = await nouvelEvenement.save();
    res.status(201).json(evenementAjoute);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route GET pour récupérer tous les utilisateurs
app.get('/api/utilisateurs', async (req, res) => {
  try {
    const utilisateurs = await User.find();
    res.json(utilisateurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route POST pour ajouter un utilisateur
app.post('/api/utilisateurs', async (req, res) => {
  const nouvelUtilisateur = new User({
    mail: req.body.mail,
    motDePasse: req.body.motDePasse,
    nom: req.body.nom,
    prenom: req.body.prenom,
    telephone: req.body.telephone,
    classeEcole: req.body.classeEcole,
    createurEvenement: req.body.createurEvenement,
  });

  try {
    const utilisateurAjoute = await nouvelUtilisateur.save();
    res.status(201).json(utilisateurAjoute);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
