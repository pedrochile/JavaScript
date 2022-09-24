
const cart = (productoId) => {
  const cartContainter = document.getElementById(`modalcarrito`);
  const MostrarProductosENCarrito = () => {
    let producto = stockProductos.find(
      (producto) => producto.id === productoId
    );
    stockProductos.push(producto);

    let div = document.createElement(`div`);
    div.classList.add(`table`);
    div.innerHTML = `<tr><p>${producto.nombre}</p></tr>
                     <tr><p>Precio: ${producto.marca}</p></tr>
                     <tr><p>Cantidad: ${producto.cantidad}</p></tr>
                     <tr><p id="${producto.id}"</p>CANTIDAD</p></tr>
                     <tr><button class="btn btn-danger btn-sm" id="delete${producto.id}">Eliminar</button></tr>`

    cartContainter.appendChild(div);

    let buttonDelete = document.getElementById(`delete${producto.id}`);
    buttonDelete.addEventListener(`click`, (e) => {
      deleteProducto(e);
    });
  };

  MostrarProductosENCarrito();
};

function deleteProducto(e) {
  let btnClicked = e.target;
  btnClicked.parenElement.remove();
}
