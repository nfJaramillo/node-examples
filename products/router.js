const express = require('express');
const router = express.Router();
const { getProducts, getProductById } = require('./controller');

/* GET product listing */
router.get('/', async function (req, res, next) {
  const products = await getProducts();
  res.json(products);
});
/* GET product by id */
router.get('/:id', async function (req, res, next) {
  const id = req.params.id;
  console.log(req.params);
  const product = await getProductById(id);
  res.json(product);
});

module.exports = router;
