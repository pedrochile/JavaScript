let carrito = []
let cart = (productoId) =>{
  let productos = stockProductos.find((producto) => producto.id === productoId);
  carrito.push(productos)
  const QuitarCarrito = [...new Set(carrito)]; //creo un array copiado del stockproductos para no alterarlos usando new set
  QuitarCarrito.forEach((item) => {
    //en cada item del array, aplico filtro para buscar alguna igualdad entre lo que entro y lo que tengo
    const miItem = stockProductos.filter((ItemStockProductos) => {
      return ItemStockProductos.id === parseInt(item); //solo puede existir 1 id
    });
    const numeroUnidades = carrito.reduce((total, itemID) => {
      // si coincide los ID, aumento, o lo mantengo
      //Me devuelve 1 valor con reduce
      return itemID === item ? (total += 1) : total;
    }, 0);
 PintarCarrito(carrito)
})





function PintarCarrito(carritoActual) {
 carritoActual.forEach((producto) =>
 {

  const cartContainter = document.querySelector(`#listado`);
 // const MostrarProductosENCarrito = () => {
    let producto = stockProductos.find((producto) => producto.id === productoId);

    
    stockProductos.push(producto);
    let lista = document.createElement(`div`)
    lista.classList.add('row')
    console.log("sdfgh")
    let colNombre = document.createElement(`div`);
    colNombre.classList.add('col-3')
    colNombre.innerHTML = `<p> ${producto.nombre}</p>`
    lista.appendChild(colNombre)

    let colPrecio = document.createElement(`div`);
    colPrecio.classList.add('col-3')
    colPrecio.innerHTML = `<p> ${producto.precio}</p>`
    lista.appendChild(colPrecio)

    let colCantidad = document.createElement(`div`);
    colCantidad.classList.add('col-3')
    colCantidad.innerHTML = `<p> ${producto.cantidad}</p>`
    lista.appendChild(colCantidad)

    let colEliminar = document.createElement(`div`);
    colEliminar.classList.add('col-3')
    colEliminar.innerHTML = `<button class="btn btn-danger btn-sm" id="delete${producto.id}">Eliminar</button>`
    lista.appendChild(colEliminar)

    // div.innerHTML = `<tr><p>${producto.nombre}</p></tr>
    //                  <tr><p>Precio: ${producto.marca}</p></tr>
    //                  <tr><p>Cantidad: ${producto.cantidad}</p></tr>
    //                  <tr><p id="${producto.id}"</p>id</p></tr>
    //                  <tr><button class="btn btn-danger btn-sm" id="delete${producto.id}">Eliminar</button></tr>`

     cartContainter.appendChild(lista);

    let buttonDelete = document.getElementById(`delete${producto.id}`);
    buttonDelete.addEventListener(`click`, (e) => {
      deleteProducto(e);
    });
    })
  //cartContainter.appendChild(lista)
  MostrarProductosENCarrito();
}



function deleteProducto(e) {
  let btnClicked = e.target;
  btnClicked.parenElement.remove(e);
}
}



