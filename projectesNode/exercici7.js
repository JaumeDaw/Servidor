const ruta = "/home/jaume_2daw/Imatges";
const fs = require('fs');

fs.readdirSync(ruta).forEach(fitxer =>
    {console.log(fitxer)})