const products = [
  {
    name: 'Samnsung A20',
    price: 200,
    currency: { name: 'US Dollar', sign: '$' },
  },
];

function getProducts() {
  return products;
}

module.exports = { getProducts };
