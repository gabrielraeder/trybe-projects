// input transferido para meme

function inputText() {
  const text = document.getElementById('text-input').value;
  document.getElementById('meme-text').innerText = text.substring(0, 59);
}
document.getElementById('text-input').addEventListener('keyup', inputText);

// input da imagem

const imageInput = document.getElementById('meme-insert');
let upload = '';

function addImage() {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    upload = reader.result;
    document.querySelector('#meme-image').style.backgroundImage = `url(${upload})`;
  });
  reader.readAsDataURL(this.files[0]);
}

imageInput.addEventListener('change', addImage);
