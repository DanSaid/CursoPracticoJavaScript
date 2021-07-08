
var lista = []

function calcularMediaAritmetica() {
    let sumaLista = 0

for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i]
} 

/*let sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
        var valor = valorAcumulado + nuevoElemento

        return valor
    }
)*/

const promedioLista = sumaLista / lista.length
    console.log(promedioLista)

return promedioLista
}

function calcular() {

    const resultado = calcularMediaAritmetica()

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


