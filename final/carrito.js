const cartContainter = document.querySelector(`#listado`);

const productosCarro = [];

const cart = (productoId) => {
  

  const MostrarProductosENCarrito = () => {
    //esto funciona
    /* let productos = stockProductos.find((producto) => producto.id === productoId);
    productosCarro.push(productos);
 */
    /* function renderizarCarrito() {
  // Vaciamos todo el html
  DOMcarrito.textContent = '';
  // Quitamos los duplicados
  const carritoSinDuplicados = [...new Set(carrito)];
  // Generamos los Nodos a partir de carrito
  carritoSinDuplicados.forEach((item) => {
      // Obtenemos el item que necesitamos de la variable base de datos
      const miItem = stockProductos.filter((itemBaseDatos) => {
          // ¿Coincide las id? Solo puede existir un caso
          return itemBaseDatos.id === parseInt(item);
      });
      // Cuenta el número de veces que se repite el producto
      const numeroUnidadesItem = carrito.reduce((total, itemId) => {
          // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
          return itemId === item ? total += 1 : total;
      }, 0); */

    // esto no funciona
    
    let productos = stockProductos.find((producto) => 
      producto.id === productoId);   
   

    productosCarro.push(productos);
    //LocalStorage.setItem('InfoCarro', JSON.stringify(productosCarro));
    //cartContainter.textContent = ``

    ///oscar preguntar

    const carroFuncional = [...new Set(productosCarro)];
    console.log(carroFuncional);
   
    carroFuncional.forEach((item) => {
      console.log(item);

      const MiItem = stockProductos.filter((ItemProductos) =>{
        return ItemProductos.id===parseInt(item)

      })

      const Unidades = productosCarro.reduce((cantidad,id)=>{
        return id===item ? cantidad+=1: cantidad},0);

      







/*     const buscar = productosCarro.filter((itemcarrito) => {
        return itemcarrito === parseInt(item);
      }); */
      /*   const ItemUnidades = productosCarro.reduce((cantidad, productoId) => {
        return productoId === item ? (cantidad += 1) : cantidad;
      }, 0);
 */
      let lista = document.createElement(`div`);
      lista.classList.add("row");
      //lista.setAttribute("id", productoId)
      let colNombre = document.createElement(`div`);
      colNombre.classList.add("col-3");
      colNombre.innerHTML = `<p> ${item.nombre}</p>`;
      lista.appendChild(colNombre);

      let colPrecio = document.createElement(`div`);
      colPrecio.classList.add("col-3");
      colPrecio.innerHTML = `<p> ${item.precio}</p>`;
      lista.appendChild(colPrecio);

      let colCantidad = document.createElement(`div`);
      colCantidad.classList.add("col-3");
      colCantidad.innerHTML = `<p> ${item.cantidad}</p>`;
      lista.appendChild(colCantidad);

      let colEliminar = document.createElement(`div`);
      colEliminar.classList.add("col-3");
      colEliminar.innerHTML = `<button class="btn btn-danger btn-sm" id="${item.id}">Eliminar</button>`;
      lista.appendChild(colEliminar);

      console.log(lista.childNodes);
      cartContainter.appendChild(lista);

      colEliminar.addEventListener(`click`, deleteProducto);
    });
  }
    MostrarProductosENCarrito();
  
};

function deleteProducto(e) {
  console.log(e.target);
  ProductoELiminar = productosCarro.indexOf((elementoDelArray) => {
    elementoDelArray.id === e.target.id;
  });

  productosCarro.splice(ProductoELiminar, 1);

  console.log(e.target.offsetParent);
  console.log(e.target.parentElement);
  //  console.log(productosCarro)

  //PREGUNTAR A OSCAR, POR QUE DA
  let btnClicked = e.target.parentElement.parentElement;
  console.log(btnClicked);
  btnClicked.remove();
  MostrarProductosENCarrito();
}
