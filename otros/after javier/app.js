//Inventario de productos
//Conectarlos a un carrito

class Products {
  constructor(id, name, price, img, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
    this.quantity = quantity;
  }
}

const cartProducts = [];

const prod1 = new Products ("1", "Black Paradox", 1500, "src/img/blackparadox.jpg", 1);
const prod2 = new Products ("2", "Fragmentos del Horror", 1500, 'src/img/fragmentosdelhorror.jpg', 3);
const prod3 = new Products ("3", "Pokemon 1", 750, 'src/img/pokemon1.jpg', 2);
const prod4 = new Products ("4", "Pokemon 2", 750, 'src/img/pokemon2.jpg', 1);
const prod5 = new Products ("5", "Tomie 1", 1500, "src/img/tomie1.jpg", 4);
const prod6 = new Products ("6", "Uzumaki", 1500, "src/img/uzumaki.jpg", 1);


cartProducts.push (prod1,prod2, prod3, prod4, prod5, prod6)

//console.log(cartProducts)

//crear una funcion para mostrar los prodcutos

const showProducts = (products) => 
{
    const productContainer = document.getElementById("product-container");
    console.log(productContainer)
    products.forEach( product => {
        const card = document.createElement('card');
        card.innerHTML += `<div class="card" style="width:18rem;">
                            <img src="${product.img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${product.name}</h5>
                                    <p class="card-text">Price:$ ${product.price}</p>
                                    <p id="quantity" class="card-text">${product.quantity}</p>
                                    <button class="btn btn-primary" id="button${product.id}">Add to Cart</button>
                                </div>
                            </div>`
        productContainer.appendChild(card);
        const button = document.getElementById(`button${product.id}`);
        button.addEventListener('click', () =>{
            cart(`${product.id}`);
            alert(`Agregaste ${product.name}`)
        })
    })
};



showProducts(cartProducts)