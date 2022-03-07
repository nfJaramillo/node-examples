const axios = require('axios');
const apiUrl =
  'https://gist.githubusercontent.com/jhonatan89/719f8a95a8dce961597f04b3ce37f97b/raw/4b7f1ac723a14b372ba6899ce63dbd7c2679e345/products-ecommerce';

async function getProducts() {
  const response = await axios.get(apiUrl);
  const products = response.data;
  return products;
}

module.exports = { getProducts };
