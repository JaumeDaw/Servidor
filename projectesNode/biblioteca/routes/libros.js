const express = require("express");

let Libro = require(__dirname + "/../models/libro.js");

let router = express.Router();

//Middleware

router.use((req, res, next) => {
  console.log(new Date().toString(), ":", req.method, req.url);
  next();
});

//Servicio de listado

router.get("/", (req, res) => {
  Libro.find()
    .then((resultado) => {
      //res.send(resultado);
      res.render('libros',{libros: resultado});
    })
    .catch((error) => {
      res.send([]);
    });
});

//Busqueda libros por su id

router.get("/:id", (req, res) => {
  Libro.findById(req.params.id)
    .then((resultado) => {
      if (resultado) {
        res.send({ resultado: false, resultado: resultado });
      }
    })
    .catch((error) => {
      res.send({ error: true, mensajeError: "Error buscando libro" });
    });
});

//Servicio para insertar libros

router.post("/", (req, res) => {
  let newLibro = new Libro({
    titulo: req.body.titulo,
    editorial: req.body.editorial,
    precio: req.body.precio,
    autor: req.body.autor,
    comentarios: req.body.comentarios,
  });
  newLibro
    .save()
    .then((resultado) => {
      res.send({ error: false, resultado: resultado });
    })
    .catch((error) => {
      res.send({ error: true, mensajeError: "Error añadiendo libro" });
    });
});

//Servicio para modificar libros

router.put("/:id", (req, res) => {
  Libro.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        titulo: req.body.titulo,
        editorial: req.body.editorial,
        precio: req.body.precio,
        autor: req.body.autor,
      },
      $addToSet: {
        comentarios: req.body.comentarios,
      },
    },
    { new: true }
  ).then((resultado) => {
    if (resultado) {
      res.send({ error: false, resultado: resultado });
    } else {
      res.send({ error: true, mensajeError: "Error al actualizar el libro" });
    }
  }).catch((error) => {
    res.send({error: true, mensajeError: "Error actualizando el libro"})
  });
});

//Servicio para borrar libros

router.delete("/:id", (req, res) => {
    Autor.findByIdAndRemove(req.params.id).then((resultado) => {
      if (resultado) {
        res.send({ error: false, resultado: resultado });
      } else {
        res.send({ error: true, mensajeError: "Error eliminando libro" });
      }
    }).catch((error) => {
        res.send({error:true, mensajeError: "Error eliminando libro"})
    });
  });

module.exports = router;
