const saveCartItems = (param) => {
  if (param === undefined) {
    return new Error('Nothing to be added.');
  }
  localStorage.setItem('cartItems', param);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
