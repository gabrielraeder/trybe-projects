const fetchProducts = async (param) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch(() => 'You must provide an url');
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
