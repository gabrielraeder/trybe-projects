const data = require('../data/zoo_data');

const dias = Object.keys(data.hours);
const animais = data.species.map((item) => item.name);
const infoValida = [...dias, ...animais];

// retorna um objeto com informação da semana caso não haja parametro.
function paramUndefined(schedule) {
  const horarios = Object.keys(data.hours).reduce(((acc, curr) => {
    acc[curr] = {
      officeHour: `Open from ${data.hours[curr].open}am until ${data.hours[curr].close}pm`,
      exhibition: data.species.filter((item) => item.availability.includes(curr))
        .map((item) => item.name),
    };
    return acc;
  }), {});
  horarios.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return horarios;
}

// retorna informações dos dias de acordo com o parametro pedido.
function getSchedule(scheduleTarget) {
  const infos = paramUndefined();
  // retorna info completa da semana caso não haja parametro ou parametro invalido.
  if (scheduleTarget === undefined || !infoValida.includes(scheduleTarget)) {
    return infos;
  }
  // retorna disponibilidade do animal informado como parametro.
  if (data.species.map((item) => item.name).includes(scheduleTarget)) {
    const days = data.species.filter((item) => item.name === scheduleTarget)
      .map((animal) => animal.availability);
    const [dia] = days;
    return dia;
  }
  // retorna animais disponiveis no dia informado como parametro.
  const day = dias.indexOf(scheduleTarget);
  const final = {};
  final[scheduleTarget] = infos[dias[day]];
  return final;
}

module.exports = getSchedule;
