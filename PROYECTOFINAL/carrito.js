
const cart = (productoId) => {
  const cartContainter = document.getElementById(`modalcarrito`);
  const MostrarProductosENCarrito = () => {
    let producto = stockProductos.find(
      (producto) => producto.id === productoId
    );
    stockProductos.push(producto);

    let div = document.createElement(`div`);
    div.classList.add(`producInCart`);
    div.innerHTML = `<p>${producto.nombre}</p>
                     <p>Precio: ${producto.marca}</p>
                     <p>Cantidad: ${producto.cantidad}</p>
                     <p id="${producto.id}"</p>CANTIDAD</p>
                     <button class="btn btn-danger btn-sm" id="delete${producto.id}">Eliminar</button>`

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
