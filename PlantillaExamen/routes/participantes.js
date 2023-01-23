const express = require("express");

let Participante = require(__dirname + "/../models/participante.js");

let router = express.Router();

router.get("/lista-participantes", (req, res) => {
  Participante.find()
    .then((resultado) => {
      //res.send(resultado);
      res.render('lista_participantes',{participantes: resultado});
    })
    .catch((error) => {
      res.send([]);
    });
});
router.post("/nuevoPa", (req, res) => {
  let newParticipante = new Participante({
    dorsal: req.body.dorsal,
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    fechaNacimiento: req.body.fechaNacimiento,
    categoria: req.body.categoria,
  });
  newParticipante
    .save()
    .then((resultado) => {
      res.send({ error: false, resultado: resultado });
    })
    .catch((error) => {
      res.send({ error: true, mensajeError: "Error añadiendo participante" });
    });
});
