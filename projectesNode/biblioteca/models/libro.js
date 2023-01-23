const mongoose = require('mongoose');

//Esquema de comentarios

let comentarioSchema = new mongoose.Schema({
    fecha: {
        type: Date,
        required: true,
        default: new Date()
    },
    nick: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
    },
    texto:{
        type: String,
        required: true,
        minlength: 1,
        trim: true,
    }
}) ;

//Esquema para los libros

let libroSchema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            required: true,
            minlength: 1,
            trim: true
        },
        editorial: {
            type: String,
            required: true,
            minlength: 1,
            trim: true,
        },
        precio: {
            type: Number,
            required: true,
            min: 0
        },
        //Vinculación del libro con el autor

        autor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "autor",
        },

        //Vinculación de libro con comentarios (subdocumentos)
        comentarios: [comentarioSchema],
    }
);

let Libro = mongoose.model('libro', libroSchema);

module.exports = Libro;