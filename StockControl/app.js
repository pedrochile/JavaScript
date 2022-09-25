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
  `img/papelHigienico.jpg`,
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

let carrito=[]

const DItems = document.querySelector("#items");
const DCarrito = documen.querySelector("#carrito");
const DTotal = document.querySelector("#total");
const DVaciar = document.querySelector("#boton-vaciar");

function MostrarProductos() {
  stockProductos.forEach((productodelarray) => {
    const NodoDIV = document.createElement("div");
    NodoDIV.classList.add("card", "col-sm-4");

    const NodoCuerpocard = document.createElement("div");
    NodoCuerpocard.classList.add("card-body");

    const NodoIMG = document.createElement(`img`);
    NodoIMG.classList.add(`img-fluid`);
    NodoIMG.setAttribute(`img`, productodelarray.img);

    const NodoTitulo = document.createElement(`h5`);
    NodoTitulo.classList.add(`card-title`);
    NodoTitulo.textContent = productodelarray.nombre;

    const NodoPrecio = document.createElement(`p`);
    NodoPrecio.classList.add(`card-text`);
    NodoPrecio.textContent = `$ ${productodelarray.precio}`;

    const NodoMarca = document.createElement(`h6`);
    NodoMarca.classList.add(`card-text`);
    NodoMarca.textContent = productodelarray.marca;

    const NodoDescripcion = document.createElement(`h6`);
    NodoDescripcion.classList.add(`card-text`);
    NodoDescripcion.textContent = productodelarray.descripcion;

    const NodoBoton = document.createElement(`button`);
    NodoBoton.classList.add(`btn`, `btn-primary`);
    NodoBoton.textContent = `adicionar`;
    NodoBoton.setAttribute(`marcador`, productodelarray.id);
    NodoBoton.addEventListener(`click`, agregarProductoAlCarro);

    NodoCuerpocard.appendChild(NodoIMG);
    NodoCuerpocard.appendChild(NodoTitulo);
    NodoCuerpocard.appendChild(NodoMarca);
    NodoCuerpocard.appendChild(descripcion);
    NodoCuerpocard.appendChild(precio);
    NodoCuerpocard.appendChild(NodoBoton);
    NodoDIV.appendChild(NodoCuerpocard);
    DItems.appendChild(NodoDIV);
  });
}


MostrarProductos()



function agregarProductoAlCarro(evento) {
  carrito.push(evento.target.getAtribute(`marcador`));

  mostrarCarrito();
}

function mostrarCarrito() {
  DCarrito.textContent = "";
  const QuitarDuplicadosCarrito = [...new Set(stockProductos)];
  QuitarDuplicadosCarrito.forEach((item) => {
    const miItem = stockProductos.filter((ItemStockProductos) => {
      return ItemStockProductos.id === parseInt(item);
    });
    const numeroUnidades = stockProductos.
  }
}



