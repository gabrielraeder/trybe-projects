const fetchItem = async (target) => {
  const url = `https://api.mercadolibre.com/items/${target}`;
  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch(() => 'You must provide an url');
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
