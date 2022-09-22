/*
const button = document.querySelector("button");

button.onclick = function () {
  alert("saludo");
};
*/

/*
contenedor.addEventListener("click", () => {
  console.log("Diste click");
});
*/
/*
const contenedor = document.querySelector(".container");

contenedor.addEventListener("dblclick", () => {
  console.log("doble click");
});
*/

/*
formName.addEventListener("keydown", () => {
  console.log("Escribiendo...");
});
formName.addEventListener("blur", () => {
  console.log("dentro del input");
});
*/
/*
const formName = document.querySelector("#formName");

formName.addEventListener("input", (e) => {
  console.log(e.target.value);
});
*/

const formulario = document.querySelector("form");

const nombre = document.querySelector("#formName");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario() {
  e.preventDefault();
  console.log(nombre.value);
}