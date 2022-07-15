const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna indefined para função sem parametro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('retorna 4 para parametro "count"', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('retorna array com nomes incluindo "Jefferson" para parametro "name"', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
    expect(handlerElephants('names')).toContain('Orval');
  });
  it('parametro AverageAge retorna numero proximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('espera um parametro tipo string', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('retorna null para strings erradas', () => {
    expect(handlerElephants('hello')).toBeNull();
    expect(handlerElephants('nomes')).toBeNull();
  });
  it('retorna informação caso parametro igual a uma chave', () => {
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('name')).toBe('elephants');
  });
});
