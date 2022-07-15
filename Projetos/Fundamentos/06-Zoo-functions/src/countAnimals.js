const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) { // sem parametro retorna quantidade de todos animais.
    return data.species.reduce(((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }), {});
  }
  if (Object.keys(animal).length === 1) { // recebe 1 parametro, este sendo especie. Retorna quantidade somente de tal especie.
    const especie = data.species.filter((item) => item.name === animal.specie);
    return especie[0].residents.length;
  }
  // recebe parametro especie e sexo retornando quantidade de animais de tal sexo e tal especie.
  const [especie] = data.species.filter((item) => item.name === animal.specie);
  const { residents } = especie;
  return residents.filter((resident) => resident.sex === animal.sex).length;
}

module.exports = countAnimals;
