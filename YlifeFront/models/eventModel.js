const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    description: { type: String, required: true },
    photo: String,
    createur: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    lieu: { type: String, required: true },
    prix: { type: Number, default: 0 },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
