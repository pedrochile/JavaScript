let opcion = 0
let subirCategoria = 0

function agregarCarrito() {
    
    carrito.push(eval(`${categoria[subirCategoria]}`)[`${Number(opcion)-1}`])

    }

function pregunta1() {

        opcion = Number(prompt(`${pregunta[0]} \n 1 $ 1.000.- Mediana\n 2 $ 2.000.- Familiar\n 3 $ 3.000.- Extra Grande`))

        if (isNaN(opcion) == true || opcion == "" || opcion > 3) {

            alert(`Haz ingresado una opción no válida...debes empezar nuevamente.`)
           
            pregunta1()

            }  else { 
                agregarCarrito()
            
            } 
            
        


}

pregunta1()

subirCategoria = subirCategoria+1

function pregunta2(){
    
opcion = Number(prompt(`${pregunta[1]} \n 1 Delgada\n 2 Tradicional`))

if (isNaN(opcion) == true || opcion == "" || opcion > 2) {

    alert(`Haz ingresado una opción no válida...debes empezar nuevamente.`)
   
    pregunta1()

    }  else { 
        agregarCarrito()
    
    } 
    



}

pregunta2()

subirCategoria = subirCategoria+1

function pregunta3(){
opcion = Number(prompt(`${pregunta[2]} \n 1 $   500.- Salsa de Tomates\n 2 $   700.- Salsa BBQ\n 3 $   800.- Salsa Alfredo\n 4 Sin Salsa`))

if (isNaN(opcion) == true || opcion == "" || opcion > 4) {

    alert(`Haz ingresado una opción no válida...debes empezar nuevamente.`)
   
    pregunta1()

    }  else { 
        agregarCarrito()
    
    } 
    



}

pregunta3()

subirCategoria = subirCategoria+1

function pregunta4(){
opcion = Number(prompt(`${pregunta[3]} \n 1 Salsa Regular\n 2 Poca Salsa\n 3 $   400 Salsa Extra`))

if (isNaN(opcion) == true || opcion == "" || opcion > 3) {

    alert(`Haz ingresado una opción no válida...debes empezar nuevamente.`)
   
    pregunta1()

    }  else { 
        agregarCarrito()
    
    } 
    



}

pregunta4()
subirCategoria = subirCategoria+1

function pregunta5(){
opcion = Number(prompt(`${pregunta[4]} \n 1 $   500.- Mozzarella Base\n 2 Sin Mozzarella\n 3 $   400.- Poco Mozzarella\n 4 $   700.- Mozzarella Extra`))

if (isNaN(opcion) == true || opcion == "" || opcion > 4) {

    alert(`Haz ingresado una opción no válida...debes empezar nuevamente.`)
   
    pregunta1()

    }  else { 
        agregarCarrito()
    
    } 
    



}

pregunta5()

subirCategoria = subirCategoria+1
function pregunta6(){
opcion = Number(prompt(`${pregunta[5]} \n 1 $ 1.000.- Carne\n 2 $ 1.500.- Tocino\n 3 $ 1.000.- Salchicha Italiana\n 4 $ 1.000.- Pepperoni\n 5 $ 1.000.- Pollo\n 6 $ 2.000.- Lomito Canadiense`))

if (isNaN(opcion) == true || opcion == "" || opcion > 5) {

    alert(`Haz ingresado una opción no válida...debes empezar nuevamente.`)
   
    pregunta1()

    }  else { 
        agregarCarrito()
    
    } 
    



}

pregunta6()
subirCategoria = subirCategoria+1

function pregunta7(){
opcion = Number(prompt(`${pregunta[6]} \n 1 $   500.- Tomates Cherry\n 2 $   300.- Champiñones\n 3 $   300.- Choclos\n 4 $   400.- Piñas\n 5 $  1.000.- Tomates\n 6 $   300.- Pimientos Verdes\n 7 $   250.- Cebollas\n 8 $   250.- Aceitunas Negras`))

if (isNaN(opcion) == true || opcion == "" || opcion > 8) {

    alert(`Haz ingresado una opción no válida...debes empezar nuevamente.`)
   
    pregunta1()

    }  else { 
        agregarCarrito()
    
    } 
    



}

pregunta7()
subirCategoria = 0

mostrar()

cambio()


