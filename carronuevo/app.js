const articulos = document.getElementById(`articulos`)
const template = document.getElementById(`template-card`).content
const fragment = document.createDocumentFragment()
const tempFooter = document.getElementById(`template-footer`).content
const tempCarrito=document.getElementById(`template-carrito`).content
const item=document.getElementById(`items`)
const footer=document.getElementById(`footer`)

let carrito ={}



document.addEventListener(`DOMContentLoaded`,() =>{
    fetchData()
    if(localStorage.getItem(`carrito`)){
        carrito = JSON.parse(localStorage.getItem(`carrito`))

    }
articulos.addEventListener(`click`, e=>{
    agregarCarro(e)
})
})

item.addEventListener(`click`, e=> {
btnFuncional(e)


})



const fetchData = async () => {
    try {
    const respuestaJson = await fetch(`archivo.json`)
    const datos = await respuestaJson.json()
    pintoElCarrito()
    
    pintarProductos(datos)
    } catch (error) {
        console.log(error)
    }

}


const pintarProductos = info => {

    info.forEach(products=> {
             
        template.querySelector(`H5`).textContent = products.nombre
        template.querySelectorAll(`p`)[0].textContent = products.precio
        template.querySelectorAll(`p`)[1].textContent = products.descripcion
        template.querySelectorAll(`p`)[2].textContent = products.Marca
        template.querySelector(`img`).setAttribute("src",products.img)
        template.querySelector(`.btn-dark`).dataset.id = products.id
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
        
    });
    articulos.appendChild(fragment)  
}



const agregarCarro = e =>{

    /* console.log(e.target.classList.contains(`btn-dark`)) */
    if(e.target.classList.contains(`btn-dark`)){
       addCarro(e.target.parentElement)
    /*     console.log("fdcsafdsad") */
   /*  console.log("carro--->") */
    }
    Swal.fire("Agregaste un producto")
    e.stopPropagation()

}

const addCarro = objeto =>{
    const producto = {
        id:objeto.querySelector(`.btn-dark`).dataset.id,
        nombre:objeto.querySelector(`h5`).textContent,
        precio: objeto.querySelector(`p`).textContent,
        cantidad: 1
        
    }
    
    /* console.log(producto) */
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad+1
    }
    
    carrito[producto.id] = {...producto}

/*     console.log(carrito) */

    pintoElCarrito()
}

/* console.log("dfsadfas") */
const pintoElCarrito = () =>{
    item.innerHTML=""
   /*  console.log("1111") */
    Object.values(carrito).forEach(producto =>{
        tempCarrito.querySelector('th').textContent = producto.id
        tempCarrito.querySelectorAll(`td`)[0].textContent=producto.nombre
        tempCarrito.querySelectorAll(`td`)[1].textContent=producto.cantidad
        tempCarrito.querySelector(`span`).textContent=producto.precio*producto.cantidad
        tempCarrito.querySelector(`.btn-info`).dataset.id=producto.id
        tempCarrito.querySelector(`.btn-danger`).dataset.id=producto.id

        
        const clone = tempCarrito.cloneNode(true)
        fragment.appendChild(clone)
        
    })


item.appendChild(fragment)
pintarFooter()


    localStorage.setItem(`carrito`, JSON.stringify(carrito))
    
}


const pintarFooter = () =>{
  /*   console.log("estoyaquiii") */
    footer.innerHTML=""
    if (Object.keys(carrito).length === 0){
        footer.innerHTML=`<th scope="row" colspan="5">Carro vacío</th>`
        return
    }

    const sumaCantidades = Object.values(carrito).reduce((acc,{cantidad}) => acc + cantidad, 0)
    const sumaPrecio = Object.values(carrito).reduce((acc, {cantidad,precio})=> acc +cantidad*precio,0)
    console.log(sumaCantidades)
    console.log(sumaPrecio)



    tempFooter.querySelectorAll(`td`)[0].textContent= sumaCantidades
    tempFooter.querySelector(`span`).textContent=sumaPrecio

    const clone = tempFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const vaciarTodo=document.getElementById(`vaciar-carrito`)
    vaciarTodo.addEventListener(`click`,() =>{
        carrito={}
        pintoElCarrito()

    })

}


const btnFuncional = e =>{
    if(e.target.classList.contains(`btn-info`)){
        carrito[e.target.dataset.id]
        const producto = carrito[e.target.dataset.id]
        producto.cantidad = carrito[e.target.dataset.id].cantidad+1

        pintoElCarrito()
    }

    if(e.target.classList.contains(`btn-danger`)){
        const producto =carrito[e.target.dataset.id]
        producto.cantidad--
        if(producto.cantidad===0){
            delete carrito[e.target.dataset.id]
        }
        pintoElCarrito()
    }
    e.stopPropagation()
}




function printDiv(items,productos) {
  
  let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');

  mywindow.document.write(`<html><head><title>>Productos entregados</title>`);
  mywindow.document.write('</head>Estos son los productos entregados el día de hoy.<body>');
  mywindow.document.write(`<br>`)
  mywindow.document.write(`<br>`)
  mywindow.document.write(`<br>`)
  mywindow.document.write(document.getElementById(`items`).innerHTML);
  mywindow.document.write(`<br>`)
  mywindow.document.write(`<br>`)
  mywindow.document.write(`<br>`)
  mywindow.document.write(`<hr>`)
  mywindow.document.write(`<br>`)
  mywindow.document.write(`<br>`)
  mywindow.document.write(document.getElementById(`footer`).innerHTML);
  
  mywindow.document.write('</body></html>');

  mywindow.document.close(); // necessary for IE >= 10
  mywindow.focus(); // necessary for IE >= 10*/

  mywindow.print();
  mywindow.close();

  return true;
}
