const PI = 3.14;

function sumar(x1,x2) {
    return x1 + x2;
}

function restar(x1,x2) {
    return x1 - x2;
}

function dividir(x1,x2) {
    if(x2 === 0) {
        mostrarErrorDivisio();
    }else{
        return x1 / x2;
    }
}

function mostrarErrorDivisio(){
    console.log('No es pot dividir entre 0');
}

exports.sumar = sumar;
exports.restar = restar;
exports.dividir = dividir;
exports.PI = PI;