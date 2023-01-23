const express = require('express');

let Mascota = require(__dirname + "/../models/mascota.js");

let router = express.Router();


/* Servicio de listado */

router.get('/',(req, res) => {

        Mascota.find().then(resultado => {
            res.send(resultado);
        }).catch(error => {
            res.send([]);
        });
    }
);

router.post('/', (req,res) => {
    let nuevaMascota = new Mascota({
        nombre: req.body.nombre,
        tipo: req.body.tipo
    });
    nuevaMascota.save().then(resultado => {
        res.send({error: false, resultado: resultado});
    }).catch(error => {
        res.send({error:true, mensajeError: "Error añadiendo mascota"})
    });
});

module.exports = router;