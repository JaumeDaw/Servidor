const mongoose = require('mongoose');

/* Definción del Schema */

let restauranteSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            minlength: 2,
            trim: true
        },
        direccion: {
            type: String,
            required: true,
            minlength: 2,
            trim: true
        },
        telefono: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            match: /^\d{9}$/
        },
    }
);

/* Asociacion  */
let Restaurante = mongoose.model('restaurante', restauranteSchema);
module.exports = Restaurante;