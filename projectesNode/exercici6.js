const fs = require('fs');

function llegir(error, dades){
    if(error)
        console.log(error);
    else    
        console.log(dades.toString());    
}

fs.readFile('./arxiu1.txt',llegir);

console.log('ultima linea del programa');

