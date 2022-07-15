const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image, price }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__price', price));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// loading indica que a API está carregando. <-REQUISITO 11->
const loading = () => {
  const load = createCustomElement('h4', 'loading', 'carregando...');
  const cart = document.querySelector('.cart');
  cart.appendChild(load);
};

// loaded indica que a API terminou de carregar. <-REQUISITO 11->
const loaded = () => {
  const load = document.querySelector('.loading');
  const cart = document.querySelector('.cart');
  cart.removeChild(load);
};

// função para calcular a soma dos produtos do carrinho <-REQUISITO 09->
const addValue = () => {
  const items = document.querySelectorAll('li');
  const inicio = document.querySelector('.total-price');
  total = 0;
  items.forEach((item) => {
    const numeros = item.innerText.match(/[\d,.]+/g);
    const valor = numeros[numeros.length - 1];
    total += JSON.parse(valor);
  });
  const totalText = document.getElementById('total-text');
  totalText.innerText = `Total: (${items.length} itens)  R$ `;
  const round = (Math.round((total) * 100) / 100);
  inicio.innerText = round;
};

// função que salva o conteúdo do carrinho no localStorage <-REQUISITO 08->
const saveStorage = () => {
  const all = JSON.stringify(document.getElementById('cart__items').innerHTML);
  saveCartItems(all);
};

// evento de clique de cada item do carrinho, atualizado o localStorage e a soma dos produtos.<-REQUISITO 05->
const cartItemClickListener = (event) => {
  event.target.remove();
  saveStorage();
  addValue();
};

// Renderiza na tela os itens do carrinho salvos no localStorage <-REQUISITO 08->
const recoverStorage = () => {
  const cartItems = getSavedCartItems('cartitems');
  const cart = document.querySelector('ol');
  cart.innerHTML = JSON.parse(cartItems);
  const li = document.querySelectorAll('li');
  li.forEach((element) => {
    element.addEventListener('click', cartItemClickListener);
  });
};

// Cria um elemento para ser adicionado no carrinho com evento de clique. <-REQUISITO 05->
const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// Adiciona itens ao carrinho ao clicar no botão adicionar. <-REQUISITO 04->
const addToCart = async (event) => {
  loading();
  const info = getSkuFromProductItem(event.target.parentNode);
  const toAdd = await fetchItem(info);
  const { id: sku, title: name, price: salePrice } = toAdd;
  const item = createCartItemElement({ sku, name, salePrice });
  document.querySelector('.cart__items').appendChild(item);
  saveStorage();
  addValue();
  loaded();
};

// adiciona evento a cada botão "adicionar ao carrinho!". <-REQUISITO 04->
const addCartEventListener = () => {
  const buttons = document.querySelectorAll('.item__add');
  buttons.forEach((btn) => {
    btn.addEventListener('click', addToCart);
  });
};

// Busca info na API e renderiza estes na tela. <-REQUISITO 02->
const setItemsOnWeb = async () => {
  loading();
  const father = document.querySelector('.items');
  const resultado = await fetchProducts('computador');
  // resultado.results.forEach((item) => {
  //   loading();
  // });
  resultado.results.forEach((item) => {
    const { id: sku, title: name, thumbnail: image, price: itemPrice } = item;
    const price = `R$ ${itemPrice.toFixed(2)}`;
    const son = createProductItemElement({ sku, name, image, price });
    father.appendChild(son);
  });
  loaded();
};

// Limpa o carrinho ao clicar no botão "esvaziar carrinho". <-REQUISITO 10->
const emptyCart = () => {
  const cart = document.querySelector('ol');
  while (cart.firstChild) {
    cart.removeChild(cart.lastChild);
  }
  addValue();
  localStorage.clear();
};

document.querySelector('.empty-cart').addEventListener('click', emptyCart);

const orderOfExecution = async () => {
  await setItemsOnWeb();
  addCartEventListener();
  recoverStorage();
  addValue();
};

window.onload = () => { 
  orderOfExecution();
};

// localStorage.clear();