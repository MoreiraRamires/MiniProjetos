let valorDigitado = document.querySelector("#valorEmReal")

//selecionar os elementos radios (criar um array deles)
let moedaSelecionada = document.getElementsByName('moedaEstrangeira')
let aviso = document.querySelector('#aviso')

// selecionar os botões

let btnConverter = document.querySelector("#btnConverter")
let btnLimpar = document.querySelector("#btnLimpar")

// valores estáticos das moedas
// COTACOES DO DIA 21/09/2021   // 22/09/2021
let valorDoDolar   = 5.31       // 5.28
let valorDoEuro    = 6.23       // 6.20
let valorDaLibra   = 7.26       // 7.20
let valorDoBitcoin = 229762.85  // 224115,01 as 14:16 UTC ou 11:19
let valorEmReal    = 0


let moedaEstrangeira = ""
let moedaConvertida = 0.00

function mensagemFormatada (moedaConvertida) {
    isNaN(valorEmReal) ? valorEmReal = 0 : ""
    console.log("Moeda Convertida 🤑: "+ moedaConvertida )

    aviso.textContent = `O valor ${valorEmReal.toLocaleString('pt-BR', {style: 'currency',
    currency: 'BRL'})} convertido em  ${moedaEstrangeira} é ${moedaConvertida}`
}
function bloquearBotao(){
    if(valorDigitado.value === 0 || valorDigitado===0 || valorDigitado == null ){
        btnConverter.setAttribute('disabled','disabled')
        btnConverter.style.background="#ccc";
        btnConverter.style.cursor = "not-allowed"
    }
}
function ativarBotao() {
    if(valorDigitado.value > 0) {
        btnConverter.removeAttribute('disabled')
        btnConverter.style.background = '#ffc107'
        btnConverter.style.cursor = 'pointer'
    } else {
        console.log('Nao ativou')
    }
}

btnConverter.addEventListener('click',function(){
    valorEmReal = parseFloat(valorDigitado.value)
    console.log('Escolhe a moeda estrangeira')

    for (let i = 0; i <moedaSelecionada.length; i++){
        if(moedaSelecionada[i].checked){
            moedaEstrangeira = moedaSelecionada[i].value
            console.log(moedaEstrangeira+ " Moeda estrangeira")
        }
        console.log( moedaSelecionada[i])
       
    }
    // {moedaConvertida.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    // CONVERSAO DE MOEDAS
    // Operacao basica pegar moedaEstrangeira e dividir pelo valorEmReal
    switch(moedaEstrangeira) {
            
        case 'Dólar':
            moedaConvertida = valorEmReal / valorDoDolar
            mensagemFormatada(moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
        break
    
        case 'Euro':
            moedaConvertida = valorEmReal / valorDoEuro
            mensagemFormatada(moedaConvertida.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }))
        break
    
        case 'Libra':
            moedaConvertida = valorEmReal / valorDaLibra
            mensagemFormatada(moedaConvertida.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }))
        break
    
        case 'Bitcoins':
            moedaConvertida = valorEmReal / valorDoBitcoin
            mensagemFormatada(parseFloat(moedaConvertida).toFixed(5))
        break
    
        default:
            aviso.textContent = 'Escolha uma moeda estrangeira'
    }
    
    isNaN(moedaConvertida) ? moedaConvertida = 0 : ''
})

btnLimpar.addEventListener('click', function() {
valorDigitado.focus()
valorDigitado.value = ''
aviso.textContent = 'Digite o valor, escolha a moeda e converter'

for (let i = 0; i <moedaSelecionada.length; i++){
    moedaSelecionada[i].checked = false 
}
})

