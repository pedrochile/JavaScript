const iva = 19
let neto = 0
let producto = 0
for (let i = 1;i <= 10; i++) {
    
    
    let valor = Number(prompt(`${producto} Ingrese el valor del producto :

(10 productos máximo y para finalizar ingresar 0)`))
     neto = neto + valor
        if (valor == 0) {
            break
        }
    }

alert(`Totales de la Factura 
====================

Neto : ${neto}

IVA : ${neto*0.19}

Total : ${neto * 1.19}`)


console.log(total)