const express = require('express');
const router = express.Router();
const customerAPI = require('../services/customerAPI');

/* GET  */
router.get('/', async function(req, res, next) {
  try {
    res.json(await customerAPI.getCustomers(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

/* POST */
router.post('/', async function(req, res, next) {
  try {
    //res.json(await customerAPI.createCustomer(req.body));
    res.json(await customerAPI.createCustomer(req.body));
  } catch (err) {
    console.error(`Error while adding customer`, err.message);
    next(err);
  }
});

/* PUT */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await customerAPI.updateCustomer(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating customer details`, err.message);
    next(err);
  }
});

/* DELETE customer */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await customerAPI.removeCustomer(req.params.id));
  } catch (err) {
    console.error(`Error while removing customer`, err.message);
    next(err);
  }
});

module.exports = router;