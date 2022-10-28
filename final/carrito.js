const cartContainter = document.querySelector(`#listado`); 

let productosCarro = JSON.parse(localStorage.getItem("productosCarro")) || []; //obtengo los valores de localStorage de mi carro

let carritoLocalStorage = (productosCarro) => {
  if(productosCarro.length > 0){  //si mi carro tiene mas de 1 elemento se mostrara si no, no hara nada
    productosCarro.forEach((item) => {
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

      cartContainter.appendChild(lista);

      colEliminar.addEventListener(`click`, deleteProducto);
      // console.log('PRODUCTOS CARRO--->',productosCarro)
      // console.log('PRODUCT LOCAL--->',CarroLocal)
    });
  } 
}
carritoLocalStorage(productosCarro); 
let cart = (productoId) => {
  const MostrarProductosENCarrito = () => {
    cartContainter.textContent = "";
    //esto funciona

    let productos = ArrayLocalStorage.find(
      (producto) => producto.id === productoId
    );
    let inCart = productosCarro.find(producto => producto.id === productoId) //undefined o {}
    if(inCart){
      inCart.cantidad++
      localStorage.setItem("productosCarro", JSON.stringify(productosCarro));  //Si el p´roducto existe en el carro, le adiciono 1y cargo el localStorage
    } else {
      productosCarro.push({...productos});   //sino cargo el elemento desde 1 
      localStorage.setItem("productosCarro", JSON.stringify(productosCarro));
    }


    productosCarro.forEach((item) => {
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

      cartContainter.appendChild(lista);

      colEliminar.addEventListener(`click`, deleteProducto);
    });
  };
  MostrarProductosENCarrito();
};

function deleteProducto(e) {
  ProductoELiminar = productosCarro.indexOf((elementoDelArray) => {
    elementoDelArray.id === e.target.id;
  });

  productosCarro.splice(ProductoELiminar, 1);

  //PREGUNTAR A OSCAR, POR QUE DA
  let btnClicked = e.target.parentElement.parentElement;
  btnClicked.remove();


  localStorage.setItem("productosCarro", JSON.stringify(productosCarro));
}

// productosCarro.reduce(
//   (previousValue, currentValue) => previousValue.precio + currentValue.precio
//   0
// )
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce



//operacion para vaciar completamente el carrito, revisar

/* console.log("aunn no se daña ")
  const eliminarTodo=document.querySelector(`#vaciarCarrito`)
  console.log("tomo elemento")
  eliminarTodo.addEventListener(`click`,eliminarTodo)
  
  
  function eliminarTodo(){
  console.log("eliminartodoclicked")
  carritoLocalStorage = []
  productosCarro =[]
  localStorage.setItem ("productosCarro", JSON.stringify([]))

  }
 */
/* 
  const eliminarTodo = document.querySelector("#vaciarCarro")
  eliminarTodo.addEventListener("click",()=>{
    console.log("disteclick")
    productosCarro=[]

  })

 */

