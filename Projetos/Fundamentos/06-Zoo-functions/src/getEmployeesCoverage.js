const data = require('../data/zoo_data');

// retorna infos de todos colaboradores formatado dentro de um array.
const getEmployeeInfos = () => {
  const all = data.employees.map((item) => {
    const animais = item.responsibleFor.reduce(((acc, curr) => {
      acc.push(data.species.find((specie) => specie.id === curr));
      return acc;
    }), []);
    return {
      id: item.id,
      fullName: `${item.firstName} ${item.lastName}`,
      species: animais.map((animal) => animal.name),
      locations: animais.map((local) => local.location),
    };
  });
  return all;
};

// confere se o parametro recebido inclui ID, nome ou sobrenome.
const checkEmployee = (param) => {
  if (Object.keys(param).includes('id')) {
    return data.employees.some((item) => item.id === param.id);
  }
  return data.employees
    .some((item) => item.firstName === param.name || item.lastName === param.name);
};

function getEmployeesCoverage(param) {
  const employees = getEmployeeInfos();
  if (param === undefined) return employees; // sem parametro retorna array com todos colaboradores.
  if (!checkEmployee(param)) throw new Error('Informações inválidas'); // retorna erro caso não exista o colaborador.
  if (param.name) {
    return employees.find((employee) => employee.fullName.includes(param.name)); // recebe parametro com nome e retorna o colaborador.
  }
  return employees.find((employee) => employee.id === param.id); // recebe parametro com ID e retorna o colaborador.
}

module.exports = getEmployeesCoverage;
