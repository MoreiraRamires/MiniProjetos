let valorCalculado = document.querySelector('#valor-calculado');
let btnCalcular = document.querySelector('#calcular');
let btnEach = document.querySelector('#each');



valorCalculado.style.display = "none"


function calculateDinner(){
    validarNumeros()
    calcularTaxas()
}

function calcularTaxas(){

    let totalConta = document.querySelector('#total-conta').value;
    let taxaServico = document.querySelector('#taxa-servico').value;
    let numeroPessoas = document.querySelector('#numero-pessoas').value;


    let totalTaxaServico = (totalConta * taxaServico) / numeroPessoas;
    let total = totalTaxaServico + (totalConta/numeroPessoas);
    total = Math.round(total*100)/100
    total= total.toFixed(2)
    total= total.toLocaleString('pt-BR', {style:'currency',currency:'BRL'})
    
    let valorCalculado = document.querySelector('#valor-calculado');
    valorCalculado.style.display="block";

    let valorCabeca = document.querySelector('#valor-por-cabeca');
     valorCabeca.innerHTML=total




}

function validarNumeros(){
    let totalConta = document.querySelector('#total-conta').value;
    let taxaServico = document.querySelector('#taxa-servico').value;
    let numeroPessoas = document.querySelector('#numero-pessoas').value;

    if( totalConta === ""|| taxaServico === 0 ||  isNaN(totalConta) || isNaN(numeroPessoas) ){
        
        alert( Error('digite um simbolo valido'));
        throw new Error('digite um simbolo valido');
        return;
    }
    //o cada nao aparece se só uma pessoa for dividir a conta
    if( numeroPessoas ===""|| numeroPessoas <= 1 ){
        numeroPessoas = 1;
        btnEach.style.display = "none"
    } else {
        btnEach.style.display = "block"
    }
}

btnCalcular.onclick = function(){
    calculateDinner()
}