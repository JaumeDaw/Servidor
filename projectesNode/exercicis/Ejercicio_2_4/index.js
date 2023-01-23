const moment = require('moment');
const lodash = require('lodash');

let ahora = moment();

console.log(ahora.format("DD/MM/YYYY"));

let antes = moment("07/10/2015", "DD/MM/YYYY");

let despues = moment("07/10/2023","DD/MM/YYYY");

let years = moment.duration(despues.diff(antes)).years();
let months = moment.duration(despues.diff(antes)).months();
let days = moment.duration(despues.diff(antes)).days();

console.log("Han pasado " + years + " años, " + months + " meses y " + days + " dias.");

let nombres = ["Jaume", "Nacho", "Ana", "Mario", "Laura"];

console.log(lodash.join(nombres));