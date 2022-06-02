const textColor = document.getElementById('rgb-color');
// gerador de cor rgb

function rgbGen() {
  const o = Math.round;
  const r = Math.random;
  const s = 255;
  const a = o(r() * s);
  const b = o(r() * s);
  const c = o(r() * s);
  const rgb = `rgb(${a}, ${b}, ${c})`;
  return rgb;
}

// cores 6 bolas

function fillBalls() {
  const balls = document.getElementsByClassName('ball');
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = rgbGen();
  }
  const random = Math.floor(Math.random() * 6);
  textColor.innerText = balls[random].style.backgroundColor;
}

fillBalls();

// Conferindo se jogador acertou a cor

function checkColor(event) {
  const select = event.target.style.backgroundColor;
  const rgb = textColor.innerHTML;
  let score = document.getElementById('score').innerHTML;
  const text = document.getElementById('answer');
  if (select === rgb) {
    text.innerText = 'Acertou!';
    score = parseInt(score, 10) + 3;
    document.getElementById('score').innerText = score;
  } else {
    text.innerText = 'Errou! Tente novamente!';
  }
}

document.querySelector('#colors').addEventListener('click', checkColor);

// Botão para reiniciar o jogo

function resetGame() {
  fillBalls();
  document.getElementById('answer').innerHTML = 'Escolha uma cor';
}

document.getElementById('reset-game').addEventListener('click', resetGame);

// Placar
