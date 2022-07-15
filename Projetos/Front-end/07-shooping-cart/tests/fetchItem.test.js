require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('testa se fetchItem é uma função', () => {
    expect.assertions(1)
    expect(typeof(fetchItem)).toBe('function')
  })
  it('com parametro "MLB1615760527", testa se fetch é chamado.', async () => {
    expect.assertions(1)
    await fetchItem(item.id)
    expect(fetch).toHaveBeenCalled()
  })
  it('testa se parametro "MLB1615760527" recebe o endpoint correto.', async () => {
    expect.assertions(1)
    await fetchItem(item.id)
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527')
  })
  it('testa se o retorno de fetchItem é o esperado', async () => {
    expect.assertions(1)
    const result = await fetchItem(item.id)
    expect(result).toEqual(item)
  })
  it('sem parametro retorna erro', async () => {
    expect.assertions(1)
    const result = await fetchItem()
    expect(result).toBe(('You must provide an url'));
  })
});
