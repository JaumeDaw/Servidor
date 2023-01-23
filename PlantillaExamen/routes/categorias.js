const express = require("express");

let Categoria = require(__dirname + "/../models/categoria.js");

let router = express.Router();

/* router.get("/", (req, res) => {
  Categoria.find()
    .then((resultado) => {
      // res.send(resultado);
      res.render("categorias", { categorias: resultado });
    })
    .catch((error) => {
      res.send([]);
    });
});*/
router.post("/nueva_categoria", (req,res) => {
    let newCategoria = new Categoria({
        codigo: req.body.codigo,
        descripcion: req.body.descripcion,
        edadMinima: req.body.edadMinima,
        edadMaxima: req.body.edadMaxima,
    });
    newCategoria
    .save()
    .then((resultado) => {
      res.send({ error: false, resultado: resultado });
    })
    .catch((error) => {
      res.send({ error: true, mensajeError: "Error añadiendo categoria" });
    });
})