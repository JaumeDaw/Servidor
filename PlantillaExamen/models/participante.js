const mongoose = require("mongoose");

let participanteSchema = new mongoose.Schema({
  dorsal: {
    type: Number,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  apellidos: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  fechaNacimiento: {
    type: Date,
    require: true,
    min: 2004
  },
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categoria",
  },
});

let Participante = mongoose.model("participante", participanteSchema);

module.exports = Participante;
