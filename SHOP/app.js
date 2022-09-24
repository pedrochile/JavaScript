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
  
  const stock = [];
  
  const prod1 = new Productos ("1", "Bolsa de basura 80x70", "Virutex", "bolsa de basura biodegradable", "img/bolsa70x90.jpg" , 50)
  const prod2 = new Productos ("2", "alcohol Litro","Difem","Alcohol de Litro",'img/alcoholLitro.jpg', 30)
  const prod3 = new Productos ("3", "Escobillon", "Virutex","Escobillon Basico","img/escobillon.jpg", 60)
  const prod4 = new Productos ("4", "Papel Interfoliado ","Elite","Toallas Interfoliadas", `img/Interfoliada.jpg`, 80)
  const prod5 = new Productos ("5", "Limpiador 4L","Virutex","Limpiador de pisos 4L", `img/limpiador4L.jpg`,56)
  const prod6 = new Productos ("7", "Mascarillas","China Transfer","Mascarillas 3 pliegues",`img/mascarillas.jpg`,180)
  const prod7 = new Productos ("8", "Mister Musculo","Musculin","Limpiador superficies",`img/musculo.jpg`,80)
  const prod8 = new Productos ("9", "Papel Higienico","Tork","papel Higienico 4 x 500",`img/papelHigienico.jpg`,70)
  const prod9 = new Productos ("10", "Papel Toalla","Ovella","Papel Absorvente",`img/papelToalla.jpg`,78)
  const prod10 = new Productos ("11", "Trapero Doble","Virutex","trapero Doble Ojal",`img/trapero.jpg`,26)

  
  
  stock.push (prod1,prod2, prod3, prod4, prod5, prod6,prod7,prod8,prod9,prod10)
  
/*
  let stockAumentado = stock.map((elem)=>{
  console.log((elem))
    elem.cantidad *=(2)
    return elem
}
)


let lista=document.getElementById("listadestock")
stock.forEach((elem) =>{
  const card = document.createElement("li")
  const p = document.createElement("p")
  const btn =document.createElement("button")
  p.innerText= elem.nombre
  btn.innerText= elem.cantidad
  


  card.appendChild(p)
  card.appendChild(btn)
  lista.appendChild(card)




})*/

let lista = document.getElementById("listaDeStock")
let temp = document.querySelector("template")
let card = temp.content.querySelector(".card")

stock.forEach((elm)=>{

    let cardClonada = card.cloneNode(true)
    cardClonada.querySelector("h5").innerText = elm.nombre
    cardClonada.querySelector("p").innerText = elm.cantidad
    cardClonada.querySelector("button").innerText = elm.marca
    
    lista.appendChild(cardClonada)

    cardClonada.querySelector("button").addEventListener("click",()=> {          

    })
})

