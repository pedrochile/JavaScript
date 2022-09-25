
let baseDatos = []
baseDatos.push(new Producto(0,"Clarinetes",300,"Esta caro el clarinete"))
baseDatos.push(new Producto(1,"Zapatilla",100))
baseDatos.push(new Producto(2,"cuchara",200))
baseDatos.push(new Producto(3,"tenedor",150))
baseDatos.push(new Producto(4,"Grapadora",50,"Grapadora que grapa"))



// DOM
let section = document.getElementById("seccion-productos")
let temp = document.querySelector("template")
let card = temp.content.querySelector("div")
renderizar(baseDatos)

let buttonsCompra = document.querySelectorAll("button.compra")
let buttonsQuitar = document.querySelectorAll("button.quitar")




// Trabajando con el carrito
let carrito = new Carrito()
let cont = 0;

baseDatos.forEach((element)=> {

    buttonsCompra[cont].addEventListener("click",()=> {
        carrito.add(element)
        
    })

    buttonsQuitar[cont].addEventListener("click",()=> {
        carrito.quitar(element)
        
    })
    cont++
});













function renderizar(array) {
    section.innerHTML = ""
    array.forEach((producto)=> {
        let cardClonada = card.cloneNode(true)
        section.appendChild(cardClonada)

        cardClonada.children[0].innerText = producto.nombre
        cardClonada.children[1].innerText = producto.precio
        cardClonada.children[2].innerText = producto.detalle
    
        // if (producto.nombre == "cuchara") {
        //     cardClonada.children[3].disabled = "true"
        // }
    
    })
}



































