const db = require('./db');
const helper = require('../helper');

async function getClientDetails(){
  const rows = await db.query(
    `SELECT * 
    FROM clientDetails`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

module.exports = {
  getClientDetails
}