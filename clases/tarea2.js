const IVA = 0.19
let x

function solicitarNombre() {
    let nombre = prompt("Ingrese su nombre de usuario");
    alert(`Bienvenido : ${nombre} 
    ponga atención a los menus que siguen a continuacion`);
  }

solicitarNombre()

/*
    let CantidadTrans = Number(prompt(
    `Ingrese la cantidad 
    de ventas que desea realizar`))
    x= CantidadTrans
*/

function Solicitarcantidad(){
    let Cantidadtrans = Number(prompt(`
    Ingrese la cantidad
    de ventas
    que desea realizar`))
    x=Cantidadtrans
    
}

Solicitarcantidad()

    for(let i=x; i > 0; i--){

        let TipoBolsa = Number(prompt(`Ingrese el tipo de bolsa que desea vender

        1- Bolsa Pequeña
        2.-Bolsa Mediana
        3- Bolsa Grande
        `))

    if(TipoBolsa == 1 || TipoBolsa== 2 || TipoBolsa== 3){
    let PrecioBolsa =Number(prompt("ingrese el valor de venta de la bolsa"))
    let CantidadBolsa= Number(prompt("Ingrese la cantidad que desea vender"))


    let ValorFinal = PrecioBolsa*CantidadBolsa
    let IVAFINAL = ValorFinal*IVA

    alert("usted vendio "+TipoBolsa+" a un precio de "+PrecioBolsa+ 
    " la cantidad de "+CantidadBolsa+" dando como resultado "+ValorFinal+" impuestos fueron "+IVAFINAL)
    }


    else{alert("a ingresado mal un dato")}
    alert(`quedan ${i-1} calculos por realizar`);   
    }


   


