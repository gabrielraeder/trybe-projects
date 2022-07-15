const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('localStorage.getItem é executado ao executar a função.', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalled()
    expect.assertions(1)
  })
  it('localStorage.getItem é executado com parametro "cartItems".', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenLastCalledWith('cartItems')
    expect.assertions(1)
  })
});
