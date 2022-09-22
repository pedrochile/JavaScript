let resultado 

for(i=8;i>=0;i--){

let numero1 = Number(prompt("Ingrese un numero"))
let numero2 = Number(prompt("Ingrese un numero"))
let opcion = prompt(`ingrese una opción
1-Suma
2-Resta
3-Multiplicar
4-Dividir
5- Salir
`)

switch (opcion)
{
     case "1": 
    resultado = numero1+numero2;
    alert(resultado);
    
break;
     case "2":
    resultado = numero1-numero2;   
    alert(resultado);
    
break;
    case "3":
    resultado = numero1*numero2;   
    alert(resultado);
      
break;
    case "4":
    resultado = numero1/numero2;   
    alert(resultado);
       
}
 alert(`quedan ${i} calculos por realizar`);     
}