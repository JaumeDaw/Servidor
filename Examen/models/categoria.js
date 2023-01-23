const mongoose = require("mongoose");

let categoriaSchema = new mongoose.Schema({
  codigo: {
    type: String,
    required: true,
    trim: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  edadMinima: {
    type: Number,
    required: true,
  },
  edadMaxima: {
    type: Number,
    required: false,
  },
});

let Categoria = mongoose.model("categoria", categoriaSchema);

module.exports = Categoria;