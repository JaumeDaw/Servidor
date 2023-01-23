const express = require("express");

let Participante = require(__dirname + "/../models/participante.js");

let router = express.Router();

router.get("/", (req, res) => {
  Participante.find()
    .then((resultado) => {
      //res.send(resultado);
      res.render('lista_participantes',{participantes: resultado});
    })
    .catch((error) => {
      res.send([]);
    });
});
