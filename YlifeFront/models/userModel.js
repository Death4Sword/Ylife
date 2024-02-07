const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    mail: { type: String, required: true, unique: true },
    motDePasse: { type: String, required: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    telephone: String,
    classeEcole: { type: String, enum: ['B1', 'B2', 'B3', 'M1', 'M2'] },
    createurEvenement: { type: String, enum: ['Ydays', 'BDE', 'BDS', 'Ambassadeur'] },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
