const express = require('express');
const router = express.Router();
const { getProducts } = require('./controller');

/* GET product listing */
router.get('/', async function (req, res, next) {
  const products = await getProducts();
  res.json(products);
});

module.exports = router;
