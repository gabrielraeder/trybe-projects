// Adicionar tarefas a lista ordenada:
const listaTarefas = document.getElementById('lista-tarefas');

function addTask() {
  const task = document.getElementById('texto-tarefa');
  const li = document.createElement('li');
  li.className = 'tarefa';
  li.innerText = task.value;
  listaTarefas.appendChild(li);
  task.value = '';
}

document.getElementById('criar-tarefa').addEventListener('click', addTask);

// adicionar cor de fundo cinza ao clique:
// const selected = document.getElementsByClassName('selected');
function addColor(event) {
  const color = event.target;
  const lista = document.getElementsByTagName('li');
  for (let index = 0; index < lista.length; index += 1) {
    lista[index].style.backgroundColor = 'white';
    lista[index].classList.remove('selected');
  }
  color.classList.add('selected');
  color.style.backgroundColor = 'grey';
}

listaTarefas.addEventListener('click', addColor);

// adiciona classe completed e caso possua a classe já, remove o item.

function removeCompleted(event) {
  const completo = event.target;
  if (completo.className.includes('completed')) {
    completo.remove();
  } else {
    completo.className = 'completed';
  }
}

listaTarefas.addEventListener('dblclick', removeCompleted);

// botão para apagar tudo

function clearAll() {
  const lista = document.querySelectorAll('.tarefa');
  for (let index = 0; index < lista.length; index += 1) {
    lista[index].remove();
  }
}

document.getElementById('apaga-tudo').addEventListener('click', clearAll);

// botão para apagar tarefas completas

function clearCompleted() {
  const completed = document.querySelectorAll('.completed');
  for (let index = 0; index < completed.length; index += 1) {
    completed[index].remove();
  }
}

document.getElementById('remover-finalizados').addEventListener('click', clearCompleted);

// botão para salvar tarefas

function saveTasks() {
  const lista = document.getElementsByTagName('li');
  // let array = [];
  let i = 0;
  for (let index = 0; index < lista.length; index += 1) {
    localStorage.setItem(i, lista[index].innerText);
    localStorage.setItem(i + 1, lista[index].classList);
    i += 2;
  }
}

document.getElementById('salvar-tarefas').addEventListener('click', saveTasks);

window.onload = function recoverStorage() {
  let i = 0;
  for (let index = 0; index < localStorage.length / 2; index += 1) {
    addTask();
    const content = (localStorage.getItem(i));
    const classe = (localStorage.getItem(i + 1));
    i += 2;
    listaTarefas.lastElementChild.innerText = content;
    if (classe === 'selected') {
      listaTarefas.lastElementChild.className = '';
    } else {
      listaTarefas.lastElementChild.className = classe;
    }
  }
};

// botão para mover elementos da lista para cima

function moveUp() {
  const selec = document.querySelector('.selected');
  const anterior = selec.previousElementSibling;
  if (anterior !== listaTarefas.firstElementChild) {
    listaTarefas.insertBefore(selec, anterior);
  } else {
    listaTarefas.insertBefore(selec, selec);
  }
}

document.getElementById('mover-cima').addEventListener('click', moveUp);

// botão para mover elementos da lista para baixo

function moveDown() {
  const select = document.querySelector('.selected');
  const seguinte = select.nextElementSibling.nextElementSibling;
  const proximo = select.nextElementSibling;
  if (proximo !== listaTarefas.lastElementChild) {
    listaTarefas.insertBefore(select, seguinte);
  } else {
    listaTarefas.insertBefore(select, select);
  }
}

document.getElementById('mover-baixo').addEventListener('click', moveDown);

// botão de remoção de item selecionado

function removeSelected() {
  const removeIt = document.querySelector('.selected');
  removeIt.remove();
}

document.getElementById('remover-selecionado').addEventListener('click', removeSelected);
