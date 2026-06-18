/*
console.log("Hola"); 

if (true) {
    var edad = 25;
}

if (true) {
    let puntos = 100;
    console.log(puntos); // 100
}   


const PI = 3.1416;
PI = 3; // Error: Assignment to constant variable.   
const user = { id: 1};
user.id = 2; // Esto es permitido, ya que no estamos reasignando la variable 'user', sino modificando su propiedad 'id'.


const v8 = require('v8');

const miVariable = {
    nombre: "Juan",
    version: 2026
};

const tamaño = v8.serialize(miVariable).length;
console.log(`El tamaño de la variable es: ${tamaño} bytes`);



// explicacion 1 de la clase 10
const readline = require('readline/promises');

const { stdin: input, stdout: output } = require('process'); 

const rl = readline.createInterface({ input, output });

async function main() {
const nombre = await rl.question('Digite su nombre: ');
if (validardatos(nombre)) {
    console.log(`El nombre digitado es: ${nombre}!`);
} else {
    console.log("El nombre digitado no es válido. Por favor, ingrese solo letras.");
}
    rl.close(); 
}

function validardatos(nombre) {
    // Lógica de validación de datos
    const expresion = /^[a-zA-Z]+$/;
    const nombreValido = expresion.test(nombre);
    if (nombreValido) {
        return true ;
    } else {
        return false;
    }
}

*/ 



// if/else evaluar edad 

let nino = [1 , 12];
let adulto = [18 , 65];
let adultoMayor = [66 , 120]; 
let edad;

if (edad >= nino[0] && edad <= nino[1]) {
    console.log("Eres un niño");
} else if (edad >= adulto[0] && edad <= adulto[1]) {
    console.log("Eres un adulto");
}   else if (edad >= adultoMayor[0] && edad <= adultoMayor[1]) {
    console.log("Eres un adulto mayor");
} else {
    console.log("Edad no válida");
}    
















iniciar();





