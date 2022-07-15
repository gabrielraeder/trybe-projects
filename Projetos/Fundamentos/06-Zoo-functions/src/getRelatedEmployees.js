const data = require('../data/zoo_data');

// confere se a pessoa de ID recebido é um gerente.
function isManager(id) {
  const managerIds = data.employees.map((item) => item.managers);
  return managerIds.some((item) => item[0] === id || item[1] === id);
}

// retorna array com as pessoas que tal gerente é responsável por.
function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!'); // retorna erro se ID não for de um gerente.
  }
  return data.employees.reduce(((acc, curr) => {
    if (curr.managers.includes(managerId)) {
      acc.push(`${curr.firstName} ${curr.lastName}`);
    }
    return acc;
  }), []);
}

module.exports = { isManager, getRelatedEmployees };
