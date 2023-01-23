//Librerias externas

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Enrutadores

const libros = require(__dirname + "/routes/libros");
const autores = require(__dirname + "/routes/autores");

//Conexión con la BD

mongoose.connect('mongodb://localhost:27017/libros');

let app = express();

app.set('view engine', "ejs")

/* app.use((req,res,next) => {
    res.send({error: "Web en mantenimento"});
    next();
}) */

//Carga de middleware y enrutadores
app.use(bodyParser.json());
app.use('/autores', autores);
app.use('/libros', libros);

//Puesta en marcha del servidor

app.listen(8080);