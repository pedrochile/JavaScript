alert("Bienvenido, ingrese el valor de las bolsas, y luego las cantidades del pedido")

let valor1 = Number(prompt("ingrese el valor de la bolsa 70x90"))
let ped1=Number(prompt("Ingrese la cantidad de bolsas 70x90"))
let valor2 = Number(prompt("ingrese el valor de la bolsa 80x110"))
let ped2=Number(prompt("Ingrese la cantidad de bolsas 80x110"))
let valor3 = Number(prompt("ingrese el valor de la bolsa 120*130"))
let ped3=Number(prompt("Ingrese la cantidad de bolsas 120x130"))
//PIDO POR PROMT LOS VALORES A INGRESAR Y CANTIDADES


//creo los productos, con Nombre y precio.
class Producto{
    constructor(nombre, precio){
        this.nombre=nombre
        this.precio=precio
    }

//Genero un metodo que me mostrara los productos, lo utilizo después    
mostrarProducto(){
    return this.nombre + " " + "$ " + this.precio
    
}
}

//construyop 3 productos, solo con 3 tengo este esjemplo
let p1 = new Producto("Bolsa de basura 70x90", valor1)
let p2 = new Producto("Bolsa Basura 80x110", valor2)
let p3 = new Producto("Bolsa basura 120x130", valor3)

/*
console.log(p1.mostrarProducto())
console.log(p2.mostrarProducto())
console.log(p3.mostrarProducto())
*/


//creo otra objeto llamado detalle pedido, que contiene producto y cantidad
class DetallePedido {
 constructor (producto, cantidad){
 this.producto = producto
 this.cantidad = cantidad
}
//ESTE METODO UNE EL NOMBRE VALOR CANTIDAD PRODUCTO Y PUEDO TOMAR Y USAR LOS VALORES
mostrarDetalle(){
    return this.producto.nombre +" " + " cantidad de "+ this.cantidad + " valor de "+ this.producto.precio  +"($"+ this.calcularMontoDetalle()+")" 
    }

//AQUI CON LA INFORMACIÓN QUE YA TENIA PUEDO CALCULAR EL MONTO DE CADA VALOR MULTIPLICADO POR LA CANTIDAD DE ESTE
calcularMontoDetalle(){
    return this.cantidad*this.producto.precio
}

}



//AQUI LE AGREGO LA CANTIDAD DE CADA PRODUCTO
let detalle1 = new DetallePedido( p1, ped1)
let detalle2 = new DetallePedido( p2, ped2)
let detalle3 = new DetallePedido( p3, ped3)


//SACO POR CONSOLA RESUMEN DE CADA DETALLE Y VALOR
console.log(detalle1.mostrarDetalle()+" "+ "valor total de "+detalle1.calcularMontoDetalle())
console.log(detalle2.mostrarDetalle()+" "+ "valor total de "+detalle2.calcularMontoDetalle())
console.log(detalle3.mostrarDetalle()+" "+ "valor total de "+detalle3.calcularMontoDetalle())

//AQUI GENERO UN PEDIDO, AQUI AGREGAMOS AHORA FECHA Y LO UNIMOS A LOS DETALLES

class Pedido {
    constructor(fecha, detalles){
        this.fecha = fecha
        this.detalles = detalles
    }

//AQUI GENERAMOS EL CALCULO QUE TOMA EL VALOR DEL PRODUCTO, LO MULTIPLICA POR LA CANTIDAD 
calcularTotal(){
let resultado = 0
for (let i=0; i<this.detalles.length; i++){
    let dp = this.detalles[i]
    console.log(i)
    console.log("Acumulado: "+resultado)
    resultado = resultado + dp.calcularMontoDetalle()
    console.log(" Monto del detalle: " + dp.calcularMontoDetalle())
    
}
return resultado
}
//AQUÍ REFLEJAMOS EL RESULTADO DEL CALCULO ANTERIOR
mostrarPedido(){
    let resultado =""
    for (const dp of this.detalles){
       resultado += dp.mostrarDetalle()+"\n " 
}
    resultado += "totallll finalll "+"($"+this.calcularTotal()+")"
    return resultado
}
}

//AQUI GENERAMOS UN ARRAY PARA IR GUARDANDO LOS VALORES DE UN PEDIDO. 
let detalles1 = []
detalles1.push(detalle1)
detalles1.push(detalle2)
detalles1.push(detalle3)
console.log(detalles1)


//AQUI MOSRAMOS EL RESUMEN TOTAL DE LOS CALCULOS
let pedido1 = new Pedido(new Date(), detalles1)
console.log(pedido1.detalles[0])

console.log(pedido1.calcularTotal())

console.log(pedido1.mostrarPedido())
