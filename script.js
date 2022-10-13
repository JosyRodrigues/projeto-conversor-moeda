const button = document.getElementById('convert-button')
const selectIn = document.getElementById('currency-select-in')
const select = document.getElementById('currency-select-convert')


const dolar = 5.34
const euro = 5.13
const real = 0.19
const bitcoin = 0.000010


const convertValue = () => {
    const input = document.getElementById('input-number').value
    const currencyConvert = document.getElementById('currency-convert')
    const currencyNew = document.getElementById('currency-new')

    //currencyConvert.innerHTML = input - forma simples

    if (selectIn.value === "US$ Dólar Americano") {
        currencyConvert.innerHTML = new Intl.NumberFormat("en-US", { //formataçãopra mostrar o valor e sigla
            style: "currency",
            currency: "USD",
        }).format(input)
    }

    if (selectIn.value === "€ Euro") {
        currencyConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(input)
    }

    if (selectIn.value === "R$ Real Brasileiro") {
        currencyConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(input)
    }
    if (selectIn.value === "₿ Bitcoin") {
        currencyConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(input)
    }

    if (select.value === "US$ Dólar Americano") { // formatação para fazer o calculo e dá a resposta e a sigla correta
        //currencyNew.innerHTML = input / dolar
        currencyNew.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(input / dolar)
    }

    if (select.value === "€ Euro") {
        currencyNew.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(input / euro)
    }
    if (select.value === "R$ Real Brasileiro") {
        currencyNew.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(input / real)
    }
    if (select.value === "₿ Bitcoin") {
        currencyNew.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(input * bitcoin)
    }
    else if (selectIn.value === select.value) {
        alert('As moedas Não podem ser iguais')
    }
    if (selectIn.value === "US$ Dólar Americano" && select.value === "R$ Real Brasileiro") {
        currencyNew.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(input * 5.34)

    }
    if (selectIn.value === "US$ Dólar Americano" && select.value === "€ Euro") {
        currencyNew.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(input * 1.03)

    }
    if (selectIn.value === "US$ Dólar Americano" && select.value === "₿ Bitcoin") {
        currencyNew.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(input * 0.000055)

    }
    if (selectIn.value === "€ Euro" && select.value === "R$ Real Brasileiro") {
        currencyNew.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(input * 5.16)

    }
    if (selectIn.value === "€ Euro" && select.value === "US$ Dólar Americano") {
        currencyNew.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(input * 0.97)

    }
    if (selectIn.value === "€ Euro" && select.value === "₿ Bitcoin") {
        currencyNew.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(input * 0.000053)

    }
    if (selectIn.value === "₿ Bitcoin" && select.value === "R$ Real Brasileiro") {
        currencyNew.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(input * 98040.76)

    }
    if (selectIn.value === "₿ Bitcoin" && select.value === "US$ Dólar Americano") {
        currencyNew.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(input * 18333.60)

    }
    if (selectIn.value === "₿ Bitcoin" && select.value === "€ Euro") {
        currencyNew.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(input * 18994.16)

    }
    else if (selectIn.value === select.value) {
        alert('As moedas Não podem ser iguais')}
}

changeCurrencyIn = () => {//para alterar a imagem e o nome de acordo a opção escolhida
    const currencyNameIn = document.getElementById("currency-name-in")
    const currencyImgIn = document.getElementById("currency-img-in")

    if (selectIn.value === '€ Euro') {
        currencyNameIn.innerHTML = "Euro"
        currencyImgIn.src = "./assets/euro.jpg"
    }
    if (selectIn.value === 'US$ Dólar Americano') {
        currencyNameIn.innerHTML = "Dólar Americano"
        currencyImgIn.src = "./assets/dolar.jpg"
    }
    if (selectIn.value === 'R$ Real Brasileiro') {
        currencyNameIn.innerHTML = "Real Brasileiro"
        currencyImgIn.src = "./assets/brasil.jpg"
    }
    if (selectIn.value === '₿ Bitcoin') {
        currencyNameIn.innerHTML = "Bitcoin"
        currencyImgIn.src = "./assets/bitcoin.jpg"
    }
    else if (selectIn.value === select.value) {
        alert('As moedas Não podem ser iguais')
    }

}

changeCurrencyConvert = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.jpg"
    }
    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.jpg"
    }
    if (select.value === 'R$ Real Brasileiro') {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImg.src = "./assets/brasil.jpg"
    }
    if (select.value === '₿ Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.jpg"
    }

    else if (selectIn.value === select.value) {
        alert('As moedas Não podem ser iguais')
    }

    convertValue() //p/qndo tiver um evento de change, ele chamar o convert automaticamente

}

button.addEventListener('click', convertValue)
selectIn.addEventListener('change', changeCurrencyIn)
select.addEventListener('change', changeCurrencyConvert)
