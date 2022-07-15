const data = require('../data/zoo_data');

// retorna objeto com animais como valores de chaves de suas localidades.
const noParam = () => data.species.reduce(((acc, curr) => {
  acc[curr.location] = data.species.filter((item) => item.location === curr.location)
    .map((local) => local.name);
  return acc;
}), {});

// retorna um objeto com chave especie e valor sendo os nomes dos animais.
const nomes = (specie, options) => {
  const obj = {};
  if (Object.keys(options).includes('sex')) { // filtra se está recebendo parametro sexo, para retornar objeto somente de um sexo.
    obj[specie.name] = specie.residents
      .filter((item) => item.sex === options.sex).map((it) => it.name);
    return obj;
  }
  obj[specie.name] = specie.residents.map((item) => item.name); // caso não receba parametro sexo retorna todos os nomes.
  return obj;
};

// inclui em cada chave de locais do mapa os objetos de animais criados chamando a função nomes().
const incluiNomes = (options) => data.species.reduce(((acc, curr) => {
  acc[curr.location] = data.species.filter((item) => item.location === curr.location)
    .map((specie) => {
      if (!options.sorted) return nomes(specie, options); // sorted = true, faz a ordenação.
      const animal = nomes(specie, options);
      animal[Object.keys(animal)[0]].sort();
      return animal;
    });
  return acc;
}), {});

const getAnimalMap = (options) => (options === undefined || !options.includeNames ? noParam()
  : incluiNomes(options));

module.exports = getAnimalMap;

// Versão antiga (para comparação)
// // retorna objeto com animais como valores de chaves de suas localidades.
// const noParam = () => data.species.reduce(((acc, curr) => {
//   acc[curr.location] = data.species.filter((item) => item.location === curr.location)
//     .map((local) => local.name);
//   return acc;
// }), {});

// // retorna um objeto com chave especie e valor sendo os nomes dos animais.
// const nomes = (specie, options) => {
//   const obj = {};
//   if (Object.keys(options).includes('sex')) { // filtra se está recebendo parametro sexo, para retornar objeto somente de um sexo.
//     obj[specie.name] = specie.residents
//       .filter((item) => item.sex === options.sex).map((it) => it.name);
//     return obj;
//   }
//   obj[specie.name] = specie.residents.map((item) => item.name); // caso não receba parametro sexo retorna todos os nomes.
//   return obj;
// };

// // inclui em cada chave de locais do mapa os objetos de animais criados chamando a função nomes().
// const incluiNomes = (options) => data.species.reduce(((acc, curr) => {
//   acc[curr.location] = data.species.filter((item) => item.location === curr.location)
//     .map((specie) => nomes(specie, options));
//   return acc;
// }), {});

// // retorna um objeto com chave especie e valor sendo os nomes dos animais ordenado de por ordem alfabética.
// const sortNames = (specie, options) => {
//   const obj = {};
//   if (Object.keys(options).includes('sex')) { // filtra se está recebendo parametro sexo, para retornar objeto somente de um sexo.
//     obj[specie.name] = specie.residents
//       .filter((item) => item.sex === options.sex).map((it) => it.name).sort();
//     return obj;
//   }
//   obj[specie.name] = specie.residents.map((item) => item.name).sort(); // caso não receba parametro sexo retorna todos os nomes.
//   return obj;
// };

// // inclui em cada chave de locais do mapa os objetos de animais criados chamando a função sortNames().
// const sorted = (options) => data.species.reduce(((acc, curr) => {
//   acc[curr.location] = data.species.filter((item) => item.location === curr.location)
//     .map((local) => sortNames(local, options));
//   return acc;
// }), {});

// const getAnimalMap = (options) => {
//   if (options === undefined || !options.includeNames) return noParam();
//   if (options.includeNames && !options.sorted) return incluiNomes(options);
//   return sorted(options);
// };
