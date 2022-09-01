const sumar = require('./sumar');
const restar = require('./restar');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');
const colors = require('colors');

const operacion = process.argv[2];
const n1 = +process.argv[3]
const n2 = +process.argv[4]

if(process.argv[3] == undefined || process.argv[4] == undefined){
    return console.log('Faltan ingresar variables!');
}else{
switch (operacion){
    case 'sumar':
        console.log(sumar(n1,n2));
         break;
    case 'restar':
        console.log(restar(n1,n2));
         break;
    case 'dividir':
         console.log(dividir(n1,n2));
         break;
    case 'multiplicar':
         console.log(multiplicar(n1,n2));
         break;
    default:
        console.log('La operación '+ process.argv[2] + ' ingresada no es válida!');
    }
}
