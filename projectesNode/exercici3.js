const os = require('os');

console.log('Sistema operatiu: ' + os.platform);
console.log('Versió del sistema operatiu: ' + os.release);
console.log('Memoria total: ' + os.totalmem + 'bytes');
console.log('Memoria lliure: ' + os.freemem + 'bytes');
console.log('Arquitectura CPU: ' + os.arch);
console.log('Numero de processadors lògics: ' + os.cpus().length);
os.cpus().forEach(cpu =>{
    console.log('Nom: ' + cpu.model);
    console.log('Nuclis: ' + cpu.speed);
});