
if (condicion) {
  //bloque verdadero
} else {
  // bloque falso
}


const puntaje = "1000";
// console.log(typeof puntaje);

if (puntaje === 1000) {
  console.log("Es igual");
} else {
  console.log("No es igual");
}


// OPERADORES LÓGICOS
/*

=== Estrictamente igual;
!== No es estrictamente igual;
> Mayor que;
>= Mayor o igual;
< Menor que
<= Menor o igual que
&& AND
|| OR
! NOT
*/

const dinero = 300;
const totalAPagar = 500;
const tarjeta = false;

if (dinero > totalAPagar) {
  console.log("Podemos pagar");
} else if (tarjeta) {
  console.log("Puedo pagar porque tengo tarjeta");
} else {
  console.log("Fondos insuficientes");
}


//SWITCH

const metodoPago = "Cheque";

switch (metodoPago) {
  case "Efectivo":
    console.log("Pagaste en efectivo");
    break;
  case "Cheque":
    console.log("Pagaste con un cheque");
    break;
  case "Tarjeta":
    console.log("Pagaste con tarjeta");
    break;
  default:
    console.log("Metodo de pago no aceptado");
    break;
}

const usuario = false;
const puedePagar = false;

if (usuario && puedePagar) {
    console.log("Puedes comprar");
} else if (usuario) {
    console.log("No puedes comprar");
} else if (puedePagar) {
    console.log("No puedes pagar");
} else {
    console.log("No puedes ingresar ni comprar");
}

const efectivo = 300;
const credito = 500;
const disponible = efectivo + credito;
const totalAPagar = 900;

if (
    efectivo > totalAPagar ||
    credito > totalAPagar ||
    disponible > totalAPagar
    ) {
        console.log("Podemos comprar");
    } else {
        console.log("Fondos insuficientes");
    }
    
    let nombreAlumno = prompt("Ingresa el nombre del alumno");
    
    let apellidoAlumno = prompt("Ingresa el apellido del alumno");
    
    if (nombreAlumno !== "" && apellidoAlumno !== "") {
        alert("Nombre: " + nombreAlumno + " Apellido " + apellidoAlumno);
    } else {
        alert("No ingresó datos");
    }
  