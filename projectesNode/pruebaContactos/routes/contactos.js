const express = require("express");

let Contacto = require(__dirname + "/../models/contacto.js");

let router = express.Router();

/* Servicio de listado general */

router.get("/", (req, res) => {
  Contacto.find()
    .then((resultado) => {
      res.send(resultado);
    })
    .catch((error) => {
      res.send([]);
    });
});

/* Servicio listado por id */

router.get("/:id", (req, res) => {
  Contacto.findById(req.params.id)
    .then((resultado) => {
      if (resultado) res.send({ error: false, resultado: resultado });
      else
        res.send({
          error: true,
          mensajeError: "No se han encontrado contactos",
        });
    })
    .catch((error) => {
      res.send({
        error: true,
        mensajeError: "Error buscando el contacto indicado",
      });
    });
});

/* Crear nuevo contacto */

router.post("/", (req, res) => {
  let nuevoContacto = new Contacto({
    nombre: req.body.nombre,
    telefono: req.body.telefono,
    edad: req.body.edad,
    restauranteFavorito: req.body.restauranteFavorito,
    mascotas: req.body.mascotas,
  });
  nuevoContacto
    .save()
    .then((resultado) => {
      res.send({ error: false, resultado });
    })
    .catch((error) => {
      res.send({ error: true, mensajeError: "Error añadiendo contacto" });
    });
});

/* Eliminar contacto */

router.delete("/:id", (req, res) => {
  Contacto.findByIdAndRemove(req.params.id)
    .then((resultado) => {
      res.send({ error: false, resultado: resultado });
    })
    .catch((error) => {
      res.send({ error: true, mensajeError: "Error eliminando Contacto" });
    });
});

/* Servicio para modificar contactos */

router.put("/:id", (req, res) => {
  Contacto.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        edad: req.body.edad,
      },
    },
    { new: true }
  )
    .then((resultado) => {
      res.send({ error: false, resultado: resultado });
    })
    .catch((error) => {
      res.send({ error: true, mensajeError: "Error actualizando contacto" });
    });
});

module.exports = router;
