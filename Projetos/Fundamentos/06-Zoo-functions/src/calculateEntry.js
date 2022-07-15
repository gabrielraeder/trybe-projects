const data = require('../data/zoo_data');

// retorna um objeto com a quantidade de visitantes de cada faixa etária.
function countEntrants(entrants) {
  return {
    child: entrants.filter((item) => item.age < 18).length,
    adult: entrants.filter((item) => item.age >= 18 && item.age < 50).length,
    senior: entrants.filter((item) => item.age >= 50).length,
  };
}

// retorna o valor total das entradas recebendo o objeto com a quantidade ao chamar a função countEntrants().
function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const clientes = countEntrants(entrants);
  let total = 0;
  total += data.prices.child * clientes.child;
  total += data.prices.adult * clientes.adult;
  total += data.prices.senior * clientes.senior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
