var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let datos =  {
    titulo: "Articulos disponibles a la fecha",
    articulos: [
      {codigo: 1, precio: 12, descripcion: 'peras'},
      {codigo: 2, precio: 132, descripcion: 'manzanas'},
      {codigo: 3, precio: 25, descripcion: 'naranjas'}
    ],
    descuentos: { lunes: "5%", martes: "20%" }
  }
  res.render('index', datos);
});

module.exports = router;
