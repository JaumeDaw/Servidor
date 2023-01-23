const express = require('express');

let Categoria = require(__dirname + "/../models/categoria.js");

let router = express.Router();


router.get("/", (req, res) => {
    Categoria.find()
      .then((resultado) => {
        /* res.send(resultado); */
        res.render('categorias',{categorias: resultado});
      })
      .catch((error) => {
        res.send([]);
      });
  });