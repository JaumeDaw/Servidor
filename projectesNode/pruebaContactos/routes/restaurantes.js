const express = require('express');

let Restaurante = require(__dirname + "/../models/restaurante.js");
let router = express.Router();

router.get('/', (req, res) => {
    Restaurante.find().then(resultado => {
        res.send(resultado);
    }).catch(error => {
        res.send([]);
    });
}
);

router.post('/', (req,res) => {
let nuevoRestaurante = new Restaurante({
    nombre: req.body.nombre,
    direccion: req.body.direccion,
    telefono: req.body.telefono,
});
nuevoRestaurante.save().then(resultado => {
    res.send({error: false, resultado: resultado});
}).catch(error => {
    res.send({error:true, mensajeError: "Error añadiendo restaurante"})
});
});

module.exports = router;