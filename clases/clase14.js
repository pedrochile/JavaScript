const productos = [
    {id: 1, precio: 1000},
    {id: 2 , precio: 2000},
    {id: 3, precio :3000},
    {id: 4, precio:4000}     
]

const encontrar=(id)=>{
    const product = productos.find((itemproducto) => itemproducto.id === id)
    return new Promise((resolve, rejected)=>{
        if (product){
            resolve (product)
            console.log("holaaa  funcionaaaaaaa")
        }else{
            rejected("no esta el produycttotot")
        }

    })

}

encontrar(10)
.then ((product) =>console.log(product))
.catch((asdf)=>console.log(asdf))