const fs = require('fs');

fs.writeFile('./arxiu1.txt','linea1\nlinea2',
    function(error){
        if (error) console.log(error);
        else console.log("l'arxiu ha sigut creat");
    });
console.log('ultima linea del programa');