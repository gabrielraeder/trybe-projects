// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(text) {
  let array = [];
  let arr = [];
  for (let key in text) {
    if (text[key] !== ' ') {
      array.push(text[key]);
    }
    else if (text[key] === ' ') {
      arr.push(array.join(''));
      array = [];
    }
  }
  arr.push(array.join(''));
  return arr;
}

// Desafio 4
function concatName(array) {
  let last = array.length - 1;
  let str = array[last] + ', ' + array[0];
  return str;
}

// Desafio 5
function footballPoints(wins, ties) {
  let win = wins * 3;
  let tie = ties;
  let total = win + tie;
  return total;
}

// Desafio 6
function highestCount(array) {
  let maior = -9999;
  let tot = 0;
  for (let key in array) {
    if (key === 0 || array[key] > maior) {
      maior = array[key];
    }
  }
  for (let value of array) {
    if (value === maior) {
      tot += 1;
    }
  }
  return tot;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = 0;
  let dist2 = 0;
  if (mouse > cat1) {
    dist1 = mouse - cat1;
  } else {
    dist1 = cat1 - mouse;
  }
  if (mouse > cat2) {
    dist2 = mouse - cat2;
  } else {
    dist2 = cat2 - mouse;
  }
  if (dist1 > dist2) {
    return 'cat2';
  } else if (dist2 > dist1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let fb = [];
  for (let value of array) {
    if (value % 3 === 0 && value % 5 === 0) {
      fb.push('fizzBuzz');
    } else if (value % 3 === 0) {
      fb.push('fizz');
    } else if (value % 5 === 0) {
      fb.push('buzz');
    } else {
      fb.push('bug!');
    }
  }
  return fb;
}

// Desafio 9
function encode(text) {
  let code = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let novo = [];
  for (let value of text) {
    novo.push(value);
  }
  for (let ind = 0; ind < novo.length; ind += 1) {
    for (let key in code) {
      if (novo[ind] === key) {
        let valor = code[key];
        novo[ind] = valor;
      }
    }
  }
  let fim = novo.join('');
  return fim;
}

function decode(text) {
  let code = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let novo = [];
  for (let value of text) {
    novo.push(value);
  }
  for (let ind = 0; ind < novo.length; ind += 1) {
    for (let key in code) {
      if (novo[ind] === key) {
        let valor = code[key];
        novo[ind] = valor;
      }
    }
  }
  let fim = novo.join('');
  return fim;
}

// Desafio 10
function techList(tech, name) {
  tech.sort();
  let array = [];
  let obj = {};
  for (let i = 0; i < tech.length; i += 1) {
    obj['tech'] = tech[i];
    obj['name'] = name;
    array.push(obj);
    obj = {};
  }
  if (tech.length === 0) {
    return 'Vazio!';
  }
  return array;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
