const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const participantes = require(__dirname + "/routes/participantes");
const categorias = require(__dirname + "/routes/categorias");


mongoose.connect('mongodb://localhost:27017/carreras');

let app = express();

app.set('view engine', "ejs");

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.render('index');
});

app.use('/participantes', participantes);
app.use('/categorias', categorias);

//Puesta en marcha del servidor

app.listen(8080);