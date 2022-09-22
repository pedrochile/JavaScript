let usuario = prompt("ingrese su usuario"); //ingreso dato y guardo como usuario
let contraseña = prompt("ingrese su clave"); // ingreso dato y guardo como contraseña
let dato; //este valor lo uso en el switch, para poder cambiar de opcion
let productos = []; //este sera mi array, guardado en minuscula
let flag = true; //esta bandera es la que me genera el control de la consulta, hasta que cambie a false
let nuevoProducto; //esta variable esta en la funcion crear producto , sirve para ingresar valor al array
let mproductos = [];


if (usuario == "admin" && contraseña == "clave") {
  alert("Bienvenido al Sistema Administrador."); //damos mensaje de bienvenida al usuario que se registro como administrador
  //comparo el usuario con admin y clave, yo seleccione esos usuarios, pero podrían estar en un array
  while (flag) {
    //Este while permite, repetir el menú, hasta que el usuario ingrese 0, donde cambiara el boleano de true a false
    dato = Number(
      //tomamos la variable de entrada como dato. y la usaremos en el switch
      prompt(`Ingrese la opcion a trabajar
       1.-Listar productos
        2.-Crear un nuevo producto
        3.-Eliminar un producto
        0.-Salir`)
    );

    switch (
      dato //segun la entrada *numerica* que ingrese , seleccionara que función realizar.
    ) {
      case 1:
        mostrarProducto();

        break;

      case 2:
        crearProducto();

        break;

      case 3:
        eliminarProducto();

        break;
      case 0:
        flag = false;

        break;
    }
  }
} else {
  alert("el usuario y clave son incorrectos"); //si al logearse da error, no funcionara. nada de lo anterior
}

function crearProducto() {
  //creo funcion que genera el constructor, el molde de nuestros objetos
  class Producto {
    constructor(id, nombre, precio, inventario) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.inventario = inventario;
    }
  }
  let id = Number(prompt("ID PRODUCTO:")); //leo las variables, en el mismo orden que las guardo.
  let nombre = prompt("Nombre producto");
  let precio = Number(prompt("precio producto"));
  let inventario = Number(prompt("Inventario inicial"));

  //esta parte es para poder verificar si ya existe el elemento y poder guardarlo en caso que no exista, por id.
  /*
    let existeId = productos.find(producto=> producto.id == id) // {}
    let existeNombre = productos.find(producto=> producto.nombre == nombre)

  if(existeId?.id || existeNombre?.id){
      alert('Producto ya existente')
      return //Este return termina la ejecucion de nuestra funcion
  }
  */

  let nuevoProducto = new Producto(id, nombre, precio, inventario); //aqui es donde tomo las variables que ingresaron, y las envio al array
  console.log(nuevoProducto); //este mensaje para depurar solamente
  productos.push(nuevoProducto); ///aqui con el metodo push, ingresa los datos obtenidos a array
}

function eliminarProducto() {
  //creo la funcion para eliminar productos
  let idDeleted = Number(prompt("Ingrese ID para eliminar")); //ingreso la id a eliminar, la guardo como idDeleted
  let proDeleted = productos.find((producto) => producto.id == idDeleted); //busco en productos, la misma id comparandola con == idDeleted
  let indexProducto = productos.indexOf(proDeleted); //tomo el valor del indice que genero en el array este objeto en el array
  productos.splice(indexProducto, 1); //lo elimino
}

function mostrarProducto() {
  // creo funcion para mostrar todo
  let total = ""; //genero una variable vacia
  productos.forEach((producto) => {
    //para cada producto en el array productos hago lo siguiente.-....
    total +=
      producto.id +
      " " +
      producto.nombre +
      " " +
      producto.precio +
      " " +
      producto.inventario; //mconvierto la información a variable total

    console.log(total); //muestro todo el contenido
  });
  return total;
}










/////Mi idea de proyecto es un control de inventario, con user, password, diferentes vistas de usuarios, y que registre cuantos items
//le paso a cada usuario, es para pasar productos a personas en un trabajo y saber cuantos recursos usan.
