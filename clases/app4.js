/*
function solicitarNombre() {
  let nombre = prompt("Ingrese su nombre");
  console.log(`El nombre del usuario es: ${nombre}`);
}

solicitarNombre();

function sumar(primerNumero, segundoNumero) {
  let resultado = primerNumero + segundoNumero;
  return resultado;
}

console.log(sumar(5, 6));


let numero1 = Number(prompt("Ingrese un numero"));
let numero2 = Number(prompt("Ingrese otro numero"));

function suma(numero1, numero2) {
  return numero1 + numero2;
  let resultado = suma(numero1, numero2);
}

console.log(resultado);


function saludar(nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Jorge", "Cortez");

*/

/*

let primerNumero;
let segundoNumero;

function calculadora(primerNumero, segundoNumero, operacion) {
  switch (operacion) {
    case "+":
      return primerNumero + segundoNumero;
      break;
    case "-":
      return primerNumero - segundoNumero;
      break;
    case "*":
      return primerNumero * segundoNumero;
      break;
    case "/":
      return primerNumero / segundoNumero;
      break;
    default:
      return 0;
      break;
  }
}

console.log(calculadora(30, 50, " "));
*/

//SCOPE O AMBITO DE LAS VARIABLES
/*
function crearMensaje() {
  let mensaje = "Segundo mensaje";
}

let mensaje = "Mensaje de prueba";
console.log(mensaje);

iniciarApp();

function iniciarApp() {
  console.log("iniciando app");
  
  segundaFuncion();
}

function segundaFuncion() {
  console.log("Desde la segunda funcion");
  
  usuarioAutenticado("Coder");
}

function usuarioAutenticado(usuario) {
  console.log("Autenticando usuario... espere");
  console.log(`Usuario autenticado ${usuario}`);
}


const aprendiendo = function () {
  console.log("Aprendiendo");
};

const aprendiendo2 = () => "Aprendiendo Js";

console.log(aprendiendo2());


const resta = (a, b) => a - b;
console.log(resta(20, 5));


const saludo = function () {
  return "Hola";
};

console.log(saludo());


let producto = function (a, b) {
  return a * b;
};

let resultado = producto(3, 8);

console.log(resultado);

*/