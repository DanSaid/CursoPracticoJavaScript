var lista = []

function calcularMediaAritmetica() {

    /* let sumaLista = 0
 
 for (let i = 0; i < lista.length; i++) {
     sumaLista = sumaLista + lista[i]
 } */
 
 let sumaLista = lista.reduce(
     function (valorAcumulado = 0, nuevoElemento) {
         var valor = valorAcumulado + nuevoElemento
 
         return valor
     }
 )
 
 const promedioLista = sumaLista / lista.length
 
 return promedioLista
 }

// MEDIANA:

function mediana() {

    const mitad = parseInt(lista.length / 2)

    function esPar(numerito) {
        if(numerito % 2 === 0) {
            return true
        } else {
            return false
        }
    }

    let mediana

    if (esPar(lista.length)) {

        const elemento1 = lista[mitad]
        const elemento2 = lista[mitad - 1] 

        const promedioDel1Y2 = calcularMediaAritmetica([elemento1, elemento2]) 
        mediana = promedioDel1Y2
        return mediana
    } else {
        mediana = lista[mitad]
        return mediana
    }
}

function calcular() {

    const resultado = mediana()

    const answer = document.getElementById('answer')
    answer.innerText = 'Resultado: ' + resultado



}
function agregar() {
    const list = document.getElementById('lista')
    const listaValue = parseFloat(list.value)

    const dato = document.getElementById('ahiVa')
    dato.innerText = listaValue
    const p = document.getElementById('elementos')
    p.innerText = 'Tus datos: ' + lista

    lista.push(listaValue)    
    console.log(lista)
}


