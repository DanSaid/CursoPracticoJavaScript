// CODIGO DEL CUADRADO

console.group('CUADRADOS')

/*const LADO_CUADRADO = 5
console.log('Los lados del cuadrado miden: ' + LADO_CUADRADO + 'cm')*/

function perimetroCuadrado(lado) {
    return lado * 4
    //console.log('El perimetro del cuadrado es: ' + lado + 'cm')
}

function areaCuadrado(lado) { 
    return lado * lado
    //console.log('El area del cuadrado es de: ' + AREA_CUADRADO + 'cm cuadrados')
}

console.groupEnd

// CODIGO CUADRADO



//CODIGO TRIANGULO

console.group('TRIANGULOS')

/*const BASE_TRIANGULO = 5
const LADO_TRIANGULO2 = 3
const LADO_TRIANGULO3 = 78
const ALTURA_TRIANGULO = 5.5*/


/*console.log('Los lados del triangulo miden: ' + BASE_TRIANGULO + 'cm '
+ LADO_TRIANGULO2 + 'cm '+
LADO_TRIANGULO2 + 'cm ' +
LADO_TRIANGULO3 + 'cm')*/


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
    //console.log('El perimetro del triangulo es: ' + PERIMETRO_TRIANGULO + 'cm')
}


function areaTriangulo(base, altura) {
    return (base * altura) / 2
    //console.log('El area del triangulo es de: ' + AREA_TRIANGULO + 'cm cuadrados')
}


console.groupEnd

//CODIGO TRIANGULO 



//CODIGO CIRCULO

console.group('CIRCULO')

/*const RADIO = 2
console.log('El radio del circulo es: ' + RADIO + 'cm')

const DIAMETRO = RADIO * 2
console.log('El diametro del circulo es: ' + DIAMETRO + 'cm')*/

function diametroCirculo(radio) {
    return radio * 2
}

const PI = Math.PI

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI
    //console.log('El perimetro del circulo es: ' + PERIMETRO_CIRCULO + 'cm')
}

function areaCirculo(radio) {
    return (radio * radio) * PI
    //console.log('El area del circulo es: ' + AREA_CIRCULO + 'cm cuadrados')
}

console.groupEnd

//CODIGO CIRCULO

//EVENTOS

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado")
    const value = input.value

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado")
    const value = parseInt(input.value)

    const area = areaCuadrado(value)
    alert(area)
}

//--

function calcularPerimetroTriangulo() {
    const input = document.getElementById("inputTriangulo")
    const value = input.value

    const perimetro = perimetroTriangulo(value)
    alert(perimetro)
}

function calcularAreaTriangulo() {
    const input = document.getElementById("inputTriangulo")
    const value = input.value

    const area = areaTriangulo(value)
    alert(area)
}

//--

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo")
    const value = input.value

    const perimetro = perimetroCirculo(value)
    alert(perimetro)
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo")
    const value = input.value

    const area = areaCirculo(value)
    alert(area)
}

//--

