const button = document.querySelector(".button")
const currencySelect = document.querySelector(".currency-select")
const selectConversion = document.querySelector(".select-conversion")



function convertValues(){

const inputCurrencyValue = document.querySelector(".input-valor").value

const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

const currencyValueConverted = document.querySelector(".currency-value")

console.log(currencySelect.value)
const dolarhoje = 5.2
const eurohoje = 6.0
const librahoje = 6.5
const realhoje = 1.0



if(currencySelect.value == "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"

}).format(inputCurrencyValue / dolarhoje)
}

if(currencySelect.value == "euro"){

    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / eurohoje)
}

if(currencySelect.value == "libra"){

    currencyValueConverted.innerHTML = new Intl.NumberFormat("gbp-UK", {
        style: "currency",
        currency: "GBP"
        
     }).format(inputCurrencyValue / librahoje)
}

if(currencySelect.value == "real"){

    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue / realhoje)
    
}

currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"

}).format(inputCurrencyValue)

currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"

}).format(inputCurrencyValue)

currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"

}).format(valorconvertido)


}

function changeCurrency() {
 
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    
    if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar"
    currencyImage.src = "./assets/estados-unidos (1) 1.png"
    }


    if (currencySelect.value == "euro") {

        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"

    }

    if (currencySelect.value == "libra") {

        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    if(currencySelect.value == "real") {

        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/brasil 2.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
button.addEventListener("click", convertValues)

