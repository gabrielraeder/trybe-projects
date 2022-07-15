function prevent() {
  const button = document.getElementById('submit-btn');
  const check = document.getElementById('agreement');
  button.disabled = !check.checked;
}

document.getElementById('agreement').addEventListener('change', prevent);

const email = document.getElementById('email-login');
const pass = document.getElementById('email-pass');
const btn = document.getElementById('enviar');

function checkLogin() {
  if (email.value === 'tryber@teste.com' && pass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btn.addEventListener('click', checkLogin);

const textarea = document.getElementById('textarea');

textarea.addEventListener('input', ({ currentTarget: target }) => {
  const maxLength = target.getAttribute('maxlength');
  const currentLength = target.value.length;
  const counter = document.getElementById('counter');

  counter.innerText = maxLength - currentLength;
});
