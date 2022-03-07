const products = [
  {
    id: 1,
    name: 'Samnsung A20',
    price: 200,
    currency: { name: 'US Dollar', sign: '$' },
  },
];

function getProducts() {
  return products;
}
function getProductById(id) {
  console.log('log', id);
  return products.find((product) => product.id === Number(id));
}

module.exports = { getProducts, getProductById };
