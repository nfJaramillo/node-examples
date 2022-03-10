var express = require('express');
var router = express.Router();
const { getAllUsers } = require('./controller');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await getAllUsers();
  res.json(users);
});

/**
 * POST create user
 */

module.exports = router;
