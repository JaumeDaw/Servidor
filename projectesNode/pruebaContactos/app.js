/* Librerias externas */
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

/* Enrutadores */
const contactos = require(__dirname + "/routes/contactos.js");
const mascotas = require(__dirname + "/routes/mascotas.js");
const restaurantes = require(__dirname + "/routes/restaurantes.js");

/* Conexión a la BD */
mongoose.connect("mongodb://localhost:27017/contactos");

let app = express();

/* Carga de enrutadores */

app.use(bodyParser.json());
app.use("/contactos", contactos);
app.use("/mascotas", mascotas);
app.use("/restaurantes", restaurantes);

/* Puesta en marcha */

app.listen(8080);
