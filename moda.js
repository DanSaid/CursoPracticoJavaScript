
var lista = []

function moda() {

const listaCount = {}

lista.map(
    function (elemento) {
        if(listaCount[elemento]) {
            listaCount[elemento] += 1
        } else {
            listaCount[elemento] = 1
        }
    }
)

const listaArray = Object.entries(listaCount).sort(
    function (elementoA, elementoB) {
       return elementoA[1] - elementoB[1]
    }
)

const moda = listaArray[listaArray.length - 1]

return moda[0]

}

function calcular() {

    const resultado = moda()

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