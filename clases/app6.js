
const numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < 5; i++) {
  alert(numeros[i]);
}


// const miArray = ["marca", 3, "palabra"];

//AGREGAR VALORES

// miArray.push("Otro elemento");

//AGREGAR ELEMENTOS AL PRINCIPIO DEL ARRAY

// miArray.unshift("Otro elemento al principio");

//ELIMINAR UN ELEMENTO

// const nombres = ["Luis", "Ana", "Julia", "Juan"];
// nombres.pop();
// nombres.shift();

//SPLICE

const nombres1 = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
nombres.splice(1, 2);

const alumnos = ["Alejandro", "Cristian"];
// const tutores = ["Dario", "Rodrigo"];

const presentes = alumnos.join(", ");


console.log(nombres.indexOf("Juan"));



// INCLUDES
// console.log(nombres.includes("Pablo"));

//REVERSE
// nombres.reverse();

const nombres11 = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];

console.log(nombres);


// CARGAR DATOS Y ALAMCENAR EN UN ARRAY

const listaNombres = [];
let cantidad = 5;

do {
  let entrada = prompt("Ingrese el nombre");
  listaNombres.push(entrada.toUpperCase());
  console.log(listaNombres.length);
} while (listaNombres.length != cantidad);

const nuevaLista = listaNombres.concat(["ANA", "EMA"]);

alert(nuevaLista.join("\n"));


//ELIMINAR DATOS DE UN ARRAY

const nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];

const eliminar = (nombre) => {
  let i = nombres.indexOf(nombre);

  if (i != -1) {
    nombres.splice(i, 1);
  }
};

eliminar("Pedro");

console.log(nombres);


const objeto1 = { id: 1, producto: "Arroz" };

const array = [objeto1, { id: 2, producto: "Fideos" }];

array.push({ id: 3, producto: "Pan" });

console.log(array);


const productos = [
    { id: 1, producto: "Arroz", precio: 50 },
    { id: 2, producto: "Fideos", precio: 100 },
    { id: 3, producto: "Pan", precio: 80 },
];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
}

