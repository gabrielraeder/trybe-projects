// Desafio 11
function generatePhoneNumber(array) {
  let tot = 0
  if (array.length > 11 || array.length < 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let value of array) {
    for (let v of array) {
      if (value === v){
        tot += 1;
      }
    }
    if (value < 0 || value > 9 || tot >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    tot = 0
  }
  array.splice(0, 0, '(')
  array.splice(3, 0, ') ')
  array.splice(9, 0, '-')
  let number = array.join('')
  return number
}

// Desafio 12
function triangleCheck(a, b, c) {
  let absA = Math.abs(b-c)
  let absB = Math.abs(a-c)
  let absC = Math.abs(a-b)
  if (a < b+c && b < a+c && c < a+b && a > absA && b > absB && c > absC) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(str) {
  let reg = /\d+/g;
  let num = str.match(reg);
  let result = 0
  for (let value of num) {
    result += Number(value);
  }
  if (result > 1) {
    return result + ' copos de água';
  }
  return result + ' copo de água';
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
