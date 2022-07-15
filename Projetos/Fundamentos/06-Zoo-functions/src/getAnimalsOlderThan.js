const data = require('../data/zoo_data');

// retorna se todos animais da especie são de idade maior ou igual à recebida.
function getAnimalsOlderThan(animal, age) {
  const specie = data.species.filter((item) => item.name === animal);
  return specie[0].residents.every((item) => item.age >= age);
}

module.exports = getAnimalsOlderThan;
