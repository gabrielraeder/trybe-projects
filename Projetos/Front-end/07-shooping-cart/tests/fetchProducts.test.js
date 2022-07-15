require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('testa se fetchProducts é uma função', () => {
    expect.assertions(1)
    expect(typeof(fetchProducts)).toBe('function')
  })
  it('Se passado parametro testa se fetch é chamado.', async () => {
    await fetchProducts('computador')
    expect.assertions(1)
    expect(fetch).toHaveBeenCalledTimes(1)
  })
  it('testa se parametro computador recebe o endpoint correto.', async () => {
    await fetchProducts('computador')
    expect.assertions(1)
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  })
  it('testa se o retorno de fetchProducts é o esperado', async () => {
    const result = await fetchProducts('computador')
    expect.assertions(1)
    expect(result).toEqual(computadorSearch)
  })
  it('sem parametro retorna erro', async () => {
    expect.assertions(1)
    const result = await fetchProducts()
    expect(result).toBe(('You must provide an url'));
  })

});
