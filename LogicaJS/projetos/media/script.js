// Selecione todos os elementos que quer manipular
let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')


let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxMedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')



btnCalcular.addEventListener('click',function(e){
    e.preventDefault()

    let nota1 =  cxNota1.value
    let nota2 = cxNota2.value
    let media = calcularMedia(nota1,nota2)

    console.log(media)
  
    cxMedia.value =media

    if( isNaN(media)|| media < 0){
        aviso.textContent =" Não é um numero válido"
        aviso.classList.add('alerta')
        setTimeout(function(){
            aviso.textContent=""
            aviso.classList.remove('alerta')
        },2000) 
    } else {
        cxSituacao.value = situacaofinal(media)
        formatarSituacao(situacaofinal(media))
    }
    
   
    console.log(situacaofinal(media))
})

btnLimpar.addEventListener('click',function(){
    cxSituacao.classList.remove('aprovado')
    cxSituacao.classList.remove('reprovado')
    cxSituacao.classList.remove('recuperacao')

})

function calcularMedia(n1,n2){
    let resultadoMedia = (Number(n1) + Number(n2))/2
    
    return  resultadoMedia.toFixed(2)
}


function situacaofinal(mediafinal){
    let situacaoFinal= ''

    if( mediafinal >= 7){
        situacaoFinal = 'Aprovado'
    } else if (mediafinal<=4){
        situacaoFinal="Reprovado"
    } else  {
        situacaoFinal = "Recuperacao"
    }

    return situacaoFinal


}

function formatarSituacao(situacaoFinal) {
    console.log("Cheguei aqui em formatar situacao");

    switch (situacaoFinal){
        case 'Aprovado':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('aprovado')
            console.log('adicionar class aprovado')
        break;
        case 'Reprovado':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('reprovado')
            console.log('adicionar class reprovado')
        break;
        case 'Recuperacao':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.add('recuperacao')
            console.log('adicionar class recuperacao')
        break
        default:
            console.log(situacaoFinal)

    }
}

function validarNumero (numero) {
    let num1 = cxNota1.value
    let num2 = cxNota2.value

    if (isNaN(num1)|| num1 < 0 || num1 > 10 || isNaN(num2)|| num2 < 0 || num2 > 10){
        formulario.reset()
        aviso.textContent =" Digite um numero entre 0 e 10"
        aviso.classList.add('alerta')
        setTimeout(function(){
            aviso.textContent=""
            aviso.classList.remove('alerta')
        },2000)
    }
}
