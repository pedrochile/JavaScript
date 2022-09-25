class Carrito {
    constructor(nombre = "Ayudante") {
        this.lista = []
        this.total = 0
        this.cantidad = 0
        this.nombre = nombre
    }

    add(producto) {



        if (this.lista.find((elm)=> elm.nombre == producto.nombre)) {
            // Si esta en mi carrito
            this.lista.map((elm)=> {
                if (elm.nombre == producto.nombre) {
                    elm.cantidad++
                }
            })

            return
        }

        // Si no esta en mi carrito
        let productoCopia = Object.assign(new Producto(),producto)

        productoCopia.cantidad = 1
        this.lista.push(productoCopia)



        console.log(this.lista);


    }

    quitar(producto) {
        if (this.lista.find((elm)=> elm.nombre == producto.nombre)) {
            let flag = false
            this.lista.map((elm)=> {
                if (elm.nombre == producto.nombre) {
                    
                    if (elm.cantidad >=1) {
                        elm.cantidad--
                    }
                    
                    if (elm.cantidad == 0) {
                        flag = true
                    }
                }
            })
        
            if (flag) {
                this.lista = this.lista.filter((elm)=> {
                    return elm.nombre != producto.nombre
                })
            }

            console.log(this.lista);

            return
        }

        alert("No puedes quitar algo que no esta en tu carrito")

    }














}