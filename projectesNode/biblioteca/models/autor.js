const mongoose = require('mongoose');

//Esquema para los autores

let autorSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            minlength: 1,
            trim: true
        },
        nacimiento:{
            type: Number,
            min: 0,
            max: 2000
        }
    }
);

let Autor = mongoose.model('autor', autorSchema);

module.exports = Autor;