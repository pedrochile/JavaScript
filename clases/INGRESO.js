let usuario =prompt("ingrese su usuario")
let contraseña = prompt("ingrese su clave")
let dato

if(usuario=="admin" && contraseña=="clave" )
{

alert("bienvenido al Sistema administrador." )
dato=prompt(`Ingrese la opcion a trabajar
1.-Listar productos
2.-Crear un nuevo producto
3.-Eliminar un producto`)


switch(dato){
    case "1": 
        mostrarProducto()
        break
        

    case "2":
        crearProducto()
        break

    case "3":
    eliminarProducto()

    break
}

let productos = []

class producto {

 constructor (id, nombre, precio, inventario) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.inventario = inventario
    }

}

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


    mostrarProducto()
    {
    return this.nombre + " " + "$ " + this.precio
    
    }


    eliminarProducto()
    {
    let idEliminar = Number(prompt('Id del producto a eliminar'))
    let productoBorrar = productos.find(producto=> producto.id == idEliminar)
    let indexProducto = productos?.indexOf(productoBorrar)
    carrito.splice(indexProducto, 1)
}


}





}else{
alert("el usuario y clave son incorrectos")


}