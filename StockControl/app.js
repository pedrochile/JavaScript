class Productos {
  constructor(id, nombre, marca, descripcion, img, precio) {
    this.id = id;
    this.nombre = nombre;
    this.marca = marca;
    this.descripcion = descripcion;
    this.img = img;
    this.precio = precio;
  }
}

const stockProductos = [];

const prod2 = new Productos(
  "2",
  "alcohol Litro",
  "Difem",
  "Alcohol de Litro",
  "img/alcoholLitro.jpg",
  30
);
const prod1 = new Productos(
  "1",
  "Bolsa de basura 80x70",
  "Virutex",
  "bolsa de basura biodegradable",
  "img/bolsa70x90.jpg",
  500
);
const prod3 = new Productos(
  "3",
  "Escobillon",
  "Virutex",
  "Escobillon Basico",
  "img/escobillon.jpg",
  3000
);
const prod4 = new Productos(
  "4",
  "Papel Interfoliado ",
  "Elite",
  "Toallas Interfoliadas",
  `img/Interfoliada.jpg`,
  2900
);
const prod5 = new Productos(
  "5",
  "Limpiador 4L",
  "Virutex",
  "Limpiador de pisos 4L",
  `img/limpiador4L.jpg`,
  3500
);
const prod6 = new Productos(
  "7",
  "Mascarillas",
  "China Transfer",
  "Mascarillas 3 pliegues",
  `img/mascarillas.jpg`,
  1000
);
const prod7 = new Productos(
  "8",
  "Mister Musculo",
  "Musculin",
  "Limpiador superficies",
  `img/musculo.jpg`,
  2500
);
const prod8 = new Productos(
  "9",
  "Papel Higienico",
  "Tork",
  "papel Higienico 4 x 500",
  `./img/papelHigienico.jpg`,
  9900
);
const prod9 = new Productos(
  "10",
  "Papel Toalla",
  "Ovella",
  "Papel Absorvente",
  `img/papelToalla.jpg`,
  2500
);
const prod10 = new Productos(
  "11",
  "Trapero Doble",
  "Virutex",
  "trapero Doble Ojal",
  `img/trapero.jpg`,
  2000
);

stockProductos.push(
  prod1,
  prod2,
  prod3,
  prod4,
  prod5,
  prod6,
  prod7,
  prod8,
  prod9,
  prod10
);

let carrito = [];

const DItems = document.querySelector("#items");
const DCarrito = document.querySelector("#carrito");
const DTotal = document.querySelector("#total");
const DVaciar = document.querySelector("#boton-vaciar");
const LocalS = window.localStorage;

function MostrarProductos() {
  stockProductos.forEach((productodelarray) => {
    const NodoDIV = document.createElement("div");
    NodoDIV.classList.add("card", "col-sm-4");
    console.log(productodelarray);

    const NodoCuerpocard = document.createElement("div");
    NodoCuerpocard.classList.add("card-body");

    const NodoIMG = document.createElement("img");
    NodoIMG.classList.add("img-fluid");
    NodoIMG.setAttribute("src", productodelarray.img);

    const NodoTitulo = document.createElement("h5");
    NodoTitulo.classList.add("card-title");
    NodoTitulo.textContent = productodelarray.nombre;

    const NodoPrecio = document.createElement("p");
    NodoPrecio.classList.add("card-text");
    NodoPrecio.textContent = productodelarray.precio;

    const NodoMarca = document.createElement("h6");
    NodoMarca.classList.add("card-text");
    NodoMarca.textContent = productodelarray.marca;

    const NodoDescripcion = document.createElement("h6");
    NodoDescripcion.classList.add("card-text");
    NodoDescripcion.textContent = productodelarray.descripcion;

    const NodoBoton = document.createElement("button");
    NodoBoton.classList.add("btn", "btn-primary");
    NodoBoton.textContent = "adicionar";
    NodoBoton.setAttribute("marcador", productodelarray.id);
    NodoBoton.addEventListener("click", agregarProductoAlCarro);

    NodoCuerpocard.appendChild(NodoIMG);
    NodoCuerpocard.appendChild(NodoTitulo);
    NodoCuerpocard.appendChild(NodoMarca);
    NodoCuerpocard.appendChild(NodoDescripcion);
    NodoCuerpocard.appendChild(NodoPrecio);
    NodoCuerpocard.appendChild(NodoBoton);
    NodoDIV.appendChild(NodoCuerpocard);
    DItems.appendChild(NodoDIV);
  });
}

function agregarProductoAlCarro(evento) {
  carrito.push(evento.target.getAtribute("marcador"));
  console.log("funcionando");
  mostrarCarrito();
  guardarLocalS();
}

function mostrarCarrito() {
  DCarrito.textContent = ""; // elimino todo del html, para poder cargar lo que sigue
  const QuitarDuplicadosCarrito = [...new Set(carrito)]; //creo un array copiado del stockproductos para no alterarlos usando new set
  QuitarDuplicadosCarrito.forEach((item) => {
    //en cada item del array, aplico filtro para buscar alguna igualdad entre lo que entro y lo que tengo
    const miItem = stockProductos.filter((ItemStockProductos) => {
      return ItemStockProductos.id === parseInt(item); //solo puede existir 1 id
    });
    const numeroUnidades = carrito.reduce((total, itemID) => {
      // si coincide los ID, aumento, o lo mantengo
      //Me devuelve 1 valor con reduce
      return itemID === item ? (total += 1) : total;
    }, 0);

    const NodoDIV = document.createElement(`li`); // creo elemento que va en el carro li , y se carga ina información en el carrito separado por x -
    NodoDIV.classList.add(`list-group-item`, `text-right`, `mx-2`);
    NodoDIV.textContent = `${numeroUnidades}x${miItem[0].nombre} - ${miItem[0].precio}`;

    const miBoton = document.createElement("button");
    miBoton.classList.add("btn", "btn-danger", "mx-5");
    miBoton.textContent = "Eliminar";
    miBoton.style.marginLeft = "1rem";
    miBoton.dataset.item = item;
    miBoton.addEventListener("click", borrarDelCarrito);

    NodoDIV.appendChild(miBoton);class Productos {
    constructor(id, nombre, marca, descripcion, img, cantidad, ) {
      this.id = id
      this.nombre = nombre
      this.marca = marca
      this.descripcion= descripcion
      this.img=img
      this.cantidad = cantidad
    }
  }
  
  const stockProductos = [];
  
  const prod2 = new Productos ("2", "alcohol Litro","Difem","Alcohol de Litro",'img/alcoholLitro.jpg', 30)
  const prod1 = new Productos ("1", "Bolsa de basura 80x70", "Virutex", "bolsa de basura biodegradable", "img/bolsa70x90.jpg" , 50)
  const prod3 = new Productos ("3", "Escobillon", "Virutex","Escobillon Basico","img/escobillon.jpg", 60)
  const prod4 = new Productos ("4", "Papel Interfoliado ","Elite","Toallas Interfoliadas", `img/Interfoliada.jpg`, 80)
  const prod5 = new Productos ("5", "Limpiador 4L","Virutex","Limpiador de pisos 4L", `img/limpiador4L.jpg`,56)
  const prod6 = new Productos ("7", "Mascarillas","China Transfer","Mascarillas 3 pliegues",`img/mascarillas.jpg`,180)
  const prod7 = new Productos ("8", "Mister Musculo","Musculin","Limpiador superficies",`img/musculo.jpg`,80)
  const prod8 = new Productos ("9", "Papel Higienico","Tork","papel Higienico 4 x 500",`img/papelHigienico.jpg`,70)
  const prod9 = new Productos ("10", "Papel Toalla","Ovella","Papel Absorvente",`img/papelToalla.jpg`,78)
  const prod10 = new Productos ("11", "Trapero Doble","Virutex","trapero Doble Ojal",`img/trapero.jpg`,26)

 
  
  stockProductos.push (prod1,prod2, prod3, prod4, prod5, prod6,prod7,prod8,prod9,prod10)
  
  //console.log(stockProductos)
  
  //crear una funcion para mostrar los prodcutos

  const mostrarProductos = (productos) =>   {
      const productContainer = document.getElementById("contenedor-productos");
      //console.log(productContainer)
      productos.forEach( producto => {
          const card = document.createElement('card');
          card.innerHTML += `<div class="card border-danger mb-3" style="width:12rem;">
                              <img src="${producto.img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                      <h5 class="card-title">${producto.nombre}</h5>
                                      <p class="card-text">Marca: ${producto.marca}</p>
                                      <p class="card-text">Descripcion: ${producto.descripcion}</p>
                                      <p id="quantity" class="card-text"> Cantidad: ${producto.cantidad}</p>
                                      <button class="btn btn-primary" id="button${producto.id}">Agregar al carro</button>
                                  </div>
                              </div>`
          productContainer.appendChild(card);
          const button = document.getElementById(`button${producto.id}`);
          button.addEventListener('click', () =>{
              cart(`${producto.id}`);
              alert(`Agregaste ${producto.nombre}`)
              console.log(`button${producto.id}`)
         
             

              



          })
      })
  };
  




 mostrarProductos(stockProductos)

    DCarrito.appendChild(NodoDIV);
  });

  DTotal.textContent = calcularTotal();
}

function borrarDelCarrito(evento) {
  const id = evento.target.dataset.item;
  carrito = carrito.filter((carritoId) => {
    return carritoId !== id;
  });
  mostrarCarrito();
  guardarLocalS();
}

function calcularTotal() {
  return carrito
    .reduce((total, item) => {
      const miItem = stockProductos.filter((ItemStock) => {
        return ItemStock.id === parseInt(item);
      });
      return total + miItem[0].precio;
    }, 0)
    .toFixed(2);
}

function vaciarCarrito() {
  carrito = [];

  mostrarCarrito();
}
DVaciar.addEventListener("click", vaciarCarrito);

MostrarProductos();
mostrarCarrito();
