//Funcion constructora para nuestros productos:
function Producto(id, nombre, precio, inventario) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.inventario = inventario

    this.mostrarStock = function () {
        alert(`Tenemos ${this.inventario} unidades disponibles.`)
    }
    this.realizarVenta = function () {
        this.inventario--
        alert(`Venta realizada con éxito.`)
    }
    this.agregarStock = function (cantidad) {
        this.inventario+= cantidad
        alert(`Has agregado ${cantidad} ${this.nombre} al inventario `)
    }
}
// ------>Generando nuevos productos y carrito:

let productos = [
    new Producto(1, 'Monitor', 15000, 10),
    new Producto(2, 'Motherboard', 3000, 10),
    new Producto(3, 'Teclado', 1200, 5),
    new Producto(4, 'Mouse', 500, 5),
]

let carrito = []


//--------> Funcion agregar al carrito por prompt y agregamostres productos:
function addToCart() {
    let productoId = Number(prompt('ID producto:'))
    let cantidad =  Number(prompt('Cantidad:'))
    let producto = productos.find(product => product.id===productoId)
    producto.cantidad = cantidad
    producto.total = producto.precio * cantidad
    carrito.push(producto)
}

// addToCart()
// addToCart()
// addToCart()

// console.log(carrito)


//------> Funcion para calcular el total del carrito:
function calcularTotal(carrito){

    let total = 0;
    carrito.forEach(producto=> {
        total += producto.total
    })
   return total
}
//Usando la función calcularTotal:
// alert(`El total del carrito es: ${calcularTotal(carrito)}`)


//-------> Funcion para crear producto y verificar si existe o  no:
function crearProducto(productos){
    let id = Number(prompt('ID PRODUCTO:'))
    let nombre = prompt('Nombre producto')
    let precio = Number(prompt('precio producto'))
    let inventario = Number(prompt('Inventario inicial'))

    let existeId = productos.find(producto=> producto.id == id) // {}
    let existeNombre = productos.find(producto=> producto.nombre == nombre)

    if(existeId?.id || existeNombre?.id){
        alert('Producto ya existente')
        return //Este return termina la ejecucion de nuestra funcion
    }
    let nuevoProducto = new Producto (id, nombre, precio, inventario)
    productos.push(nuevoProducto)
}

// crearProducto(productos)
// console.log(productos)




//FUncion que elimina todos los productos del carrito que coincidan con un ID
function eliminarCarrito(){
    let idEliminar = Number(prompt('Id del producto a eliminar'))
    let productoBorrar = carrito.find(producto=> producto.id == idEliminar)
    let indexCarrito = carrito?.indexOf(productoBorrar)
    carrito.splice(indexCarrito, 1)
}

// eliminarCarrito()
// console.log(carrito)


//---------->Funcion para modificar la cantidad de un producto en el carrito, y asi tambien calcular nuevo total
function reducirCantidad(){
    let idReducir = Number(prompt('Id a reducir'))
    let cantidadReducir = Number(prompt('Nueva cantidad'))
    let productoReducir = carrito.find(producto=> producto.id == idReducir)
    productoReducir.cantidad = cantidadReducir
    productoReducir.total = productoReducir.precio * cantidadReducir
}




//--------------------------> FIN MINI SIMULADOR


//--------EJEMPLOS VISTOS:

// Recorrer objetos for in:

// let obj = {
//     nombre: 'OScar',
//     edad: 25,
//     lenguaje: 'JS'
// }

// for(let property in obj){
//     console.log(obj[property])
// }



const datos = [
    {
      nombre: "hola",
      precio: 100,
    },
    {
      nombre: "hola1",
      precio: 250,
    },
    {
      nombre: "hola2",
      precio: 350,
    },
    {
      nombre: "hola3",
      precio: 700,
    },
    {
      nombre: "hola4",
      precio: 800,
    },
  ];
  
  
    const filtro = datos.filter(e => e.precio < 600)//.map(elemento=> elemento.nombre)
    const nombres = filtro.map(elemento=> elemento.nombre)
    const nombresAlert = nombres.join('\n')

    alert(nombresAlert)

