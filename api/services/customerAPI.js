const db = require('./db');
const helper = require('../helper');

async function getCustomers(){
  const rows = await db.query(
    `SELECT * 
    FROM clientDetails`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

// POST FUNCTION
async function createCustomer(customer){
  const result = await db.query(
    `INSERT INTO clientDetails 
    (customerID, lastName, firstName, phoneNumber, emailAddress, BSB_accountNumber)
    VALUES
    (${customer.customerID}, ${customer.lastName}, ${customer.firstName}, ${customer.phoneNumber}, ${customer.emailAddress}, ${customer.BSB_accountNumber})`
  );
  

  let message = 'Error in adding customer';

  if (result.affectedRows) {
    message = 'Customer added successfully';
  }

  return {message};
}

// PUT FUNCTION
async function updateCustomer(id, customer){
  const result = await db.query(
    `UPDATE clientDetails 
    SET name="${customer.customerID}", "${customer.lastName}", "${customer.firstName}", ${customer.phoneNumber}, "${customer.emailAddress}", "${customer.BSB_accountNumber}"
    WHERE customerID=${id}` 
  );

  let message = 'Error in updating programming language';

  if (result.affectedRows) {
    message = 'Programming language updated successfully';
  }

  return {message};
}

// DELETE FUNCTION
async function removeCustomer(id){
  const result = await db.query(
    `DELETE FROM clientDetails WHERE customerID=${id}`
  );

  let message = 'Error in removing customer';

  if (result.affectedRows) {
    message = 'Customer removed successfully';
  }

  return {message};
}

module.exports = {
  getCustomers,
  createCustomer,
  updateCustomer,
  removeCustomer
}