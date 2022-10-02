const cartContainter = document.querySelector(`#listado`);

let productosCarro = [];
let CarroLocal = [];


let cart = (productoId) => {
  const MostrarProductosENCarrito = () => {
    cartContainter.textContent = "";
    //esto funciona

    let productos = ArrayLocalStorage.find(
      (producto) => producto.id === productoId
    );

    productosCarro.push(productos);

    localStorage.setItem("productosCarro", JSON.stringify(productosCarro));

    CarroLocal = JSON.parse(localStorage.getItem("productosCarro"));
    localStorage.setItem("productosCarro", JSON.stringify([]));

    CarroLocal.forEach((item) => {
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
  console.log(CarroLocal);
  ProductoELiminar = CarroLocal.indexOf((elementoDelArray) => {
    elementoDelArray.id === e.target.id;
  });

  CarroLocal.splice(ProductoELiminar, 1);

  //PREGUNTAR A OSCAR, POR QUE DA
  let btnClicked = e.target.parentElement.parentElement;
  btnClicked.remove();

  localStorage.setItem("productosCarro", JSON.stringify(CarroLocal));

  MostrarProductosENCarrito();
}
