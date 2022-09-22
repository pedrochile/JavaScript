
let valor1 =prompt("ingrese un valor ")
let valor22 =prompt("ingrese un valor ")


const valores = []


valores.push(valor1,valor22)

console.log(valores)


const valoresStr= JSON.stringify(valores)
localStorage.setItem("tarea actual",valoresStr)

const Valores2 = localStorage.getItem("tarea actual")
console.log(Valores2)

