const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('função chamada com parametro <ol><li>Item</li></ol>, localStorage recebe dois parametros.', () => {
    saveCartItems('<ol><li>Item</li></ol>')
    expect(localStorage.setItem).toHaveBeenLastCalledWith('cartItems', '<ol><li>Item</li></ol>')
    expect.assertions(1)
  })
  it('função chamada com parametro <ol><li>Item</li></ol>, localStorage é chamado', () => {
    saveCartItems('<ol><li>Item</li></ol>')
    expect(localStorage.setItem).toHaveBeenCalled()
    expect.assertions(1)
  })
  it('sem parametro retorna erro', () => {
    const result =  saveCartItems()
    expect(result).toEqual(new Error('Nothing to be added.'));
    expect.assertions(1)
  })
});
