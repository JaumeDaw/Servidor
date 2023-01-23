const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const Participante = require(__dirname + "/models/participante.js");
const Categoria = require(__dirname + "/models/categoria");


mongoose.connect('mongodb://localhost:27017/carreras');

let app = express();
app.set("view engine", 'ejs');
app.use('/public', express.static('./public'));

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.render('index');
});
app.get('/lista', (req,res) => {
    Participante.find()
    .then((resultado) => {
      //res.send(resultado);
      res.render('lista_participantes',{participantes: resultado});
    })
    .catch((error) => {
      res.send([]);
    });
});
app.get('/nueva_categoria', (req,res) => {
    res.render("nueva_categoria");
});
app.get('/nuevo_participante', (req,res) => {
    res.render('nuevo_participante');
});
app.post("/nueva_categoria", (req,res) => {
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


app.listen(8080);