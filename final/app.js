async function fetchProductos() {
  const respuesta = await fetch("./archivo.json");
  return await respuesta.json();
}

let stockProductos =[];

fetchProductos().then(elementos => {
  stockProductos = elementos;
localStorage.setItem("StockProductos", JSON.stringify(stockProductos));
mostrarProductos();
});






let ArrayLocalStorage = JSON.parse(localStorage.getItem("StockProductos"))

//crear una funcion para mostrar los prodcutos

const mostrarProductos = (ArrayLocalStorage) => {
  const productContainer = document.getElementById("contenedor-productos");

  ArrayLocalStorage.forEach((producto) => {
    const card = document.createElement("card");
    card.innerHTML += `<div class="card border-danger mb-3" style="width:12rem;">
                              <img src="${producto.img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                      <h5 class="card-title">${producto.nombre}</h5>
                                      <p class="card-text">Marca: ${producto.marca}</p>
                                      <p class="card-text">Descripcion: ${producto.descripcion}</p>
                                      <p id="quantity" class="card-text"> Cantidad: ${producto.cantidad}</p>
                                      <button class="btn btn-primary" id="button${producto.id}">Agregar al carro</button>
                                  </div>
                              </div>`;
    productContainer.appendChild(card);
    const button = document.getElementById(`button${producto.id}`);
    button.addEventListener("click", () => {
      cart(`${producto.id}`);
      //alert(`Agregaste ${producto.nombre}`);
      Swal.fire(`Agregado ${producto.nombre}!`)



    });
  });
};

mostrarProductos(ArrayLocalStorage);
