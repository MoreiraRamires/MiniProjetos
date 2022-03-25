// Selecione todos os elementos que quer manipular

let formulario = document.querySelector('form')
let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxPeso = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')
let cxImc = document.querySelector('#resultadoImc')
let aviso= document.querySelector('#aviso')
let dados = document.querySelectorAll('.pessoa')

let btnLimpar = document.querySelector('#btnLimpar')
let btnEnviar = document.querySelector('#btnEnviar')


/* Para pegar os dados dos inputs use a propriedade .value 
    Antes determine um evento como referencia para pegar os dados
*/

btnEnviar.addEventListener('click',function(e){
    
    //prevenir comportamento padrão 

    e.preventDefault()

    //pegar os values 

    let nome = cxNome.value
    let idade =Number(cxIdade.value)
    let peso = Number(cxPeso.value)
    let altura =Number(cxAltura.value)/100

    let imc = (peso / (altura * altura)).toFixed(2)
   
    console.log([peso,idade,nome,altura,imc])


  

    console.log([imc])

    cxImc.value  = imc
    let sit = situacaoDoPeso(imc)
    aviso.textContent = sit

    cxImc.color='red'

    
let pessoa = {
    nome: nome,
    idade:idade,
    peso:peso,
    altura:altura,
    imc: imc,
    sit : sit 
}

dados[0].textContent = "IMC Legal"
dados[1].textContent = pessoa.nome
dados[2].textContent = pessoa.idade
dados[3].textContent = pessoa.peso
dados[4].textContent = pessoa.altura
dados[5].textContent = pessoa.imc



console.log(pessoa)

})


// criar objeto 

function situacaoDoPeso(imc) {
    let situacao = ''
    if (imc < 18.5) {
        situacao = 'Baixo peso'	
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = 'Peso normal'
    } else if (imc >= 25 && imc <= 29.9) {
        situacao = 'Sobrepeso'
    } else if (imc >= 30 && imc <= 34.9) {
        situacao = 'Obesidade I'
    } else if (imc >= 35 && imc <= 39.9) {
        situacao = 'Obesidade II'
    } else if (imc >= 40) {
        situacao = 'Obesidade III'
    } else {
        situacao = 'Informe seu peso corretamente'
    }
    return situacao
}