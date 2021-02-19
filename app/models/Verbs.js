// Modelo para controlar los verbos

const mongoose = require('mongoose');

// Crear esquema
const VerbsSchema = new mongoose.Schema({
    engWord: {
        type: String,
        required: true
    },
    engWordListen: {
        type: String,
        required: true
    },
    engWordSimplePas: {
        type: String,
        required: true
    },
    engWordSimplePasListen: {
        type: String,
        required: true
    },
    engWordParticiplePas: {
        type: String,
        required: true
    },
    engWordParticiplePasListen: {
        type: String,
        required: true
    },
    espWord: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Regular', 'Irregular']
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

// Convertir el esquema en un modelo
const Verbs = mongoose.model('Verbs', VerbsSchema);

module.exports = Verbs;