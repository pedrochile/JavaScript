let categoria = ["sizeMasa" , "tipoMasa" , "tipoSalsa" , "cantidadSalsa" , "queso" , "carne" , "vegetal"]
let carrito = []
let suma = 0
let textoVer = ["Tamaño de Pizza :" , "Tipo de Masa :" , "Tipo de Salsa :" , "Cantidad de Salsa :" , "Cantidad de Queso :" , "Tipo de carne : " , "Tipo de vegetales :"]

function despedida() {

    console.log("Adiós... Gracias por visitarnos.")
    return
    }

function mostrar() {
    console.log("El Detalle de su pedido de pizza es: \n\n")
    for (ver = 0 ; ver <= carrito.length-1 ; ver++){

        console.log(`${ver+1}`,` ${carrito[ver][0]}`,` ${carrito[ver][1]}`,`$ ${carrito[ver][2]} \n`)
        suma = suma+carrito[ver][2]
    }
    console.log(`\n El total de su pedido es: $`, suma)
    suma=0
    
  
 
}

function cambio() {

let modificar = confirm(`Desea cambiar algo de su pedido?`)

if (modificar == true) {

   

    let opcionCambio = Number(prompt("Eliga el item de su pedido que quiere modificar."))

    if (isNaN(opcionCambio) == true || opcionCambio == "" || opcionCambio > 7) {

        alert(`Haz ingresado una opción no válida...debes empezar nuevamente.`)
        let opcion = 0
        let subirCategoria = 0
        let suma = 0
        carrito =[]

        pregunta1()
    
        }  else { 
            
            carrito.splice(opcionCambio-1,1)
        
        } 



    

    console.clear()
subirCategoria=opcionCambio-1
    //subirCategoria=0
  
    eval(`pregunta${opcionCambio}()`);


    mostrar()

      
 } else {

despedida()

}

}

