let body = document.querySelector('body');
const cores = document.querySelectorAll('.cores div')

cores.forEach((cor) => {
  cor.addEventListener('click', bgColor)
})


function bgColor(event) {
  evento = event.target
  console.log(evento.classList.value)
  if (evento.classList.value == 'vermelho') {
    body.classList.remove('blue')
    body.classList.remove('yellow')
    body.classList.add('red')


  }
  else if (evento.classList.value == 'azul') {
    body.classList.add('blue')
    body.classList.remove('red')

    body.classList.remove('yellow')

  }
  else {
    body.classList.add('yellow')
    body.classList.remove('red')
    body.classList.remove('blue')
  }

}



