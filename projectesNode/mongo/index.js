const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/contactos');

let contactosSchema = new mongoose.Schema({
    nombre: String,
    telefono: String,
    edad: Number,
});

let Contacto = mongoose.model('contactos', contactosSchema);

let contacto1 = new Contacto(
    {
        nombre: 'Jaume',
        telefono: '610965472',
        edad: 27
    }
);
contacto1.save().then(resultado => {
    console.log("Contacto añadido", resultado);
}).catch(error => {
    console.log("Error añadiendo contacto", error);
});