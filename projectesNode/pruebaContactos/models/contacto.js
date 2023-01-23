const mongoose = require('mongoose');

/* Definició del Schema */

let contactoSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            minlength:1,
            trim: true,
        },
        telefono: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            match: /^\d{9}$/
        },
        edad: {
            type: Number,
            min: 18,
            max: 100,
        },
        restauranteFavorito: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "restaurantes",
        },
        mascotas: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "mascotas",
            },
        ],
    });
/* Associació model - Collection */

let Contacto = mongoose.model('contacto', contactoSchema);

module.exports = Contacto;