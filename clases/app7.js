/*
function mensaje(nombre) {
  console.log(`Saludos ${nombre}`);
}

mensaje("Coder");

function callback() {
    console.log("Soy un callback");
}

function mensaje(callback) {
    callback();
}

mensaje(callback);

*/

//MAS ADELANTE LO REEMPLAZAMOS POR PROMISES
/*
function primero(segundo) {
  setTimeout(function () {
    console.log("PRIMERO");
    segundo();
  }, 5000);
}

function segundo() {
  console.log("SEGUNDO");
}

primero(segundo);
*/

const pendientes = ["desafios", "preentregas", "asistencias", "booklets"];

// console.log(pendientes);

//FOR EACH
/*
pendientes.forEach((pendiente, indice) => {
  console.log(`${indice}: ${pendiente}`);
});
*/

//MAP
/*
pendientes.map((pendiente, indice) => {
  console.log(`${indice}: ${pendiente}`);
});
*/
/*

let total = 0;

carrito.forEach((producto) => (total += producto.precio));

console.log(total);

//REDUCE
let resultado = carrito.reduce((accum, producto) => {
    return accum + producto.precio;
}, 0);

console.log(resultado);

*/

//FILTER

/*
let resultado = carrito.filter((producto) => producto.precio > 1000);

let resultado = carrito.filter((producto) => producto.nombre !== "Monitor");
console.log(resultado);

*/

/* const carrito = [
  { nombre: "Teclado mecanico", precio: 1000 },
  { nombre: "Mouse", precio: 500 },
  { nombre: "Monitor", precio: 1500 },
]; */

//FIND
/*
const filtrado = carrito.find((producto) => producto.nombre === "Tablet");

console.log(filtrado);
*/

// console.log(Math.PI);
// console.log(Math.min(55, 25, 62, 89));
/*
const pi = Math.PI;

console.log(Math.round(pi));

console.log(Math);

*/

// console.log(new Date());
/*
const hoy = new Date("September 01, 2022");

console.log(hoy.getFullYear());
console.log(hoy.getMonth() + 1);
console.log(hoy.getDay());
*/