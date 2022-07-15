const data = require('../data/zoo_data');

// retorna um objeto com informações da pessoa colaboradora.
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const [colaborador] = data.employees
    .filter((item) => item.firstName === employeeName || item.lastName === employeeName);
  return colaborador;
}

module.exports = getEmployeeByName;
