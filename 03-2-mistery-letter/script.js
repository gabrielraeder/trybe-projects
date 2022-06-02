const carta = document.getElementById('carta-gerada');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const skew = ['skewleft', 'skewright'];

// separando input em varios span

function generateSpan() {
  const span = document.createElement('span');
  span.classList.add(estilo[Math.floor(Math.random() * 3)], size[Math.floor(Math.random() * 3)],
    rotate[Math.floor(Math.random() * 2)], skew[Math.floor(Math.random() * 2)]);
  carta.appendChild(span);
}

function inputSplit() {
  const text = document.getElementById('carta-texto').value;
  const array = text.split(' ');
  return array;
}

function clearSpan() {
  const tamanho = document.getElementsByTagName('span').length;
  for (let index = 0; index < tamanho; index += 1) {
    carta.removeChild(carta.lastChild);
  }
  carta.innerText = '';
}

function checkContent() {
  const input = document.getElementById('carta-texto').value;
  if (input.length === 0 || /^\s*$/.test(input)) {
    carta.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

function spanContent() {
  clearSpan();
  checkContent();
  const array = inputSplit();
  for (let index = 0; index < array.length; index += 1) {
    generateSpan();
    const span = carta.lastChild;
    span.innerText = array[index];
  }
  document.getElementById('carta-contador').innerText = array.length;
}

document.getElementById('criar-carta').addEventListener('click', spanContent);

// trocar classes span

function changeClasses(event) {
  event.target.removeAttribute('class');
  event.target.classList.add(estilo[Math.floor(Math.random() * 3)],
    size[Math.floor(Math.random() * 3)],
    rotate[Math.floor(Math.random() * 2)], skew[Math.floor(Math.random() * 2)]);
}

carta.addEventListener('click', changeClasses);
