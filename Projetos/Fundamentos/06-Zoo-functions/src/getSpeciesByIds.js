const data = require('../data/zoo_data');

// recebe 1 ou mais IDs de animais e retorna suas informações.
function getSpeciesByIds(...ids) {
  if (ids.length === 0) return []; // caso nenhum ID informado, retorna um array vazio.
  return ids.reduce(((acc, curr) => {
    data.species.forEach((item) => {
      if (item.id === curr) {
        acc.push(item);
      }
    });
    return acc;
  }), []);
}

module.exports = getSpeciesByIds;
