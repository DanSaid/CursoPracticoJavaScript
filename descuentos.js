

function calculo(precio, descuento) {
    const porcentageDelPrecioConDescuento = 100 - descuento
    const precioYa = (precio * porcentageDelPrecioConDescuento) / 100
    return precioYa
} 

function calcular() {
    
    const cupon = document.getElementById("cupon")
    const cuponValido = parseInt(cupon.value)

    const inputD = document.getElementById("inputD")
    var dValue = parseInt(inputD.value)

    function repetir() {
        const parrafo = document.getElementById("cupon")
        parrafo.innerText = "Se aumento el descuento 5% mas"
        dValue += 5
    }
    switch (cuponValido) {
        case 1337:
            repetir()
        break;
        case 4356:
            repetir()
        break;
        case 9129:
            repetir()
        break;
        case 4141:
            repetir()
        break;
        case 3393:
            repetir()
        break;
        case 1256:
            repetir()

    }
    /*
    if (cuponValido == 1337) {
        const parrafo = document.getElementById("cupon")
        parrafo.innerText = "Se aumento el descuento 5% mas"
        dValue += 5 
    } else if (cuponValido == 4356) {
        const parrafo = document.getElementById("cupon")
        parrafo.innerText = "Se aumento el descuento 5% mas"
        dValue += 5
    } else if (cuponValido == 9129) {
        const parrafo = document.getElementById("cupon")
        parrafo.innerText = "Se aumento el descuento 5% mas"
        dValue += 5
    }*/
    
    const inputPrice = document.getElementById("inputPrice")
    const priceValue = inputPrice.value

    

    const precioConDescuento = calculo(priceValue, dValue)

    const result = document.getElementById("answer")
    result.innerText = "Tu precio con descuento es de: $" + precioConDescuento 
    }



/*
console.log({
    precioOriginal,
    descuento,
    porcentageDelPrecioConDescuento,
    precio
})
*/