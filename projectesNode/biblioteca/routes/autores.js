const express = require("express");

let Autor = require(__dirname + "/../models/autor.js");

let router = express.Router();

//Servicio de listado

router.get("/", (req, res) => {
  Autor.find()
    .then((resultado) => {
      /* res.send(resultado); */
      res.render('autores',{autores: resultado});
    })
    .catch((error) => {
      res.send([]);
    });
});

//Servicio para insertar autores

router.post("/", (req, res) => {
  let newAutor = new Autor({
    nombre: req.body.nombre,
    nacimiento: req.body.nacimiento,
  });
  newAutor  
    .save()
    .then((resultado) => {
      res.send({ error: false, resultado: resultado });
    })
    .catch((error) => {
      res.send({ error: true, mensajeError: "Error añadiendo autor" });
    });
});

//Servicio para borrar autores

router.delete("/:id", (req, res) => {
  Autor.findByIdAndRemove(req.params.id).then((resultado) => {
    if (resultado) {
      res.send({ error: false, resultado: resultado });
    } else {
      res.send({ error: true, mensajeError: "Error eliminando autor" });
    }
  });
});

module.exports = router;
