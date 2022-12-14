class Productos {
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
  
  const prod1 = new Productos ("1", "Bolsa de basura 80x70", "Virutex", "bolsa de basura biodegradable", "src/img/bolsa70x90.jpg" , 50)
  const prod2 = new Productos ("2", "alcohol Litro","Difem","Alcohol de Litro",'src/img/alcoholLitro.jpg', 30)
  const prod3 = new Productos ("3", "Escobillon", "Virutex","Escobillon Basico","src/img/escobillon.jpg", 60)
  const prod4 = new Productos ("4", "Papel Interfoliado ","Elite","Toallas Interfoliadas", `src/img/Interfoliada.jpg`, 80)
  const prod5 = new Productos ("5", "Limpiador 4L","Virutex","Limpiador de pisos 4L", `src/img/limpiador4L.jpg`,56)
  const prod6 = new Productos ("7", "Mascarillas","China Transfer","Mascarillas 3 pliegues",`src/img/mascarillas.jpg`,180)
  const prod7 = new Productos ("8", "Mister Musculo","Musculin","Limpiador superficies",`src/img/musculo.jpg`,80)
  const prod8 = new Productos ("9", "Papel Higienico","Tork","papel Higienico 4 x 500",`src/img/papelHigienico.jpg`,70)
  const prod9 = new Productos ("10", "Papel Toalla","Ovella","Papel Absorvente",`src/img/papelToalla.jpg`,78)
  const prod10 = new Productos ("11", "Trapero Doble","Virutex","trapero Doble Ojal",`src/img/trapero.jpg`,26)

  
  
  stockProductos.push (prod1,prod2, prod3, prod4, prod5, prod6,prod7,prod8,prod9,prod10)
  
  //console.log(stockProductos)
  
  //crear una funcion para mostrar los prodcutos

  const mostrarProductos = (productos) =>   {
      const productContainer = document.getElementById("product-container");
      //console.log(productContainer)
      productos.forEach( producto => {
          const card = document.createElement('card');
          card.innerHTML += `<div class="card" style="width:18rem;">
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
          })
      })
  };
  

 mostrarProductos(stockProductos)