const express = require('express');
const router = express.Router();
const awscpmdb = require('../services/awscpmdb');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await awscpmdb.getClientDetails(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;