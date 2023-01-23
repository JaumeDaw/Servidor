const mongoose = require('mongoose');

/* Definición del Schema */

let mascotaSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            minlength: 3,
            trim: true
        },
        tipo: {
            type: String,
            required: true,
            enum: ['perro', 'gato', 'otros']
        }
    }
);

let Mascota = mongoose.model('mascota',mascotaSchema);
module.exports = Mascota;