
const lamp = document.getElementById('lamp');

function interruptor(acao) {

  if ( acao == 'ligar'){
    lamp.src='./img/ligada.jpg'
  } else(
     lamp.src='./img/desligada.jpg' 
  )
}