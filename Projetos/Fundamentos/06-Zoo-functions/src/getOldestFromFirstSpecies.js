const data = require('../data/zoo_data');

// retorna o animal mais velho da primeira especie de responsabilidade do colaborador de ID passada.
function getOldestFromFirstSpecies(id) {
  const [funcionario] = data.employees.filter((item) => item.id === id);
  const animalID = funcionario.responsibleFor[0];
  const [specie] = data.species.filter((item) => item.id === animalID);
  const older = specie.residents.sort((a, b) => b.age - a.age)[0];
  return [older.name, older.sex, older.age];
}

module.exports = getOldestFromFirstSpecies;
