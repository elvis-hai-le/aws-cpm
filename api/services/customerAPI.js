const db = require('./db');
const helper = require('../helper');

async function getCustomers() {
    const rows = await db.query(
        `SELECT * 
    FROM clientDetails`
    );
    const data = helper.emptyOrRows(rows);

    return {
        data
    }
}

function convert(json) {
    return {
        lastName: json.name.last,
        firstName: json.name.first,
        phoneNumber: json.phone,
        emailAddress: json.email,
        BSB_accountNumber: `${json.bank.bsb} ${json.bank.account}`,
        assets: json.assets
    }
};

// POST FUNCTION
async function createCustomer(customer) {
    // convert to a more sql friendly format
    sqlData = convert(customer);
    // assign random ID
    sqlData.customerID = `${Math.floor(1000 + Math.random() * 9000)}${sqlData.lastName}`;

    // dont let duplicates happen
    let result1 = await db.query(`SELECT * FROM clientDetails WHERE customerID = '${sqlData.customerID}'`);
    if (result1.length > 0) {
        return { message: 'Customer already exists' }
    }

    // insert into clientDetails
    result1 = await db.query(`INSERT INTO clientDetails (customerID, lastName, firstName, phoneNumber, emailAddress, BSB_accountNumber)
    VALUES ('${sqlData.customerID}', '${sqlData.lastName}', '${sqlData.firstName}', '${sqlData.phoneNumber}', '${sqlData.emailAddress}', '${sqlData.BSB_accountNumber}');`);


    let message = 'Error in adding customer';
    if (result1.affectedRows) {
        message = 'Customer added successfully';
        // insert into assets table
        for (let i = 0; i < sqlData.assets.length; i++) {
            const element = sqlData.assets[i];
            let result2 = await db.query(`INSERT INTO clientAssets (clientID, assetName, purchasePrice$, currentPrice$, QTY, totalValue$, investmentRiskID)
        VALUES ('${sqlData.customerID}', '${element.assetName}', '${element.purchasePrice}', '${element.currentPrice}', '${element.quantity}', '${element.total}', 'N/A');`);

            if (!result2.affectedRows) {
                return { message: 'Error in adding asset' }
            }
        }
    }

    return { message };
}

// PUT FUNCTION
async function updateCustomer(id, customer) {
    const result = await db.query(
        `UPDATE clientDetails 
    SET name="${customer.customerID}", "${customer.lastName}", "${customer.firstName}", ${customer.phoneNumber}, "${customer.emailAddress}", "${customer.BSB_accountNumber}"
    WHERE customerID=${id}`
    );

    let message = 'Error in updating programming language';

    if (result.affectedRows) {
        message = 'Programming language updated successfully';
    }

    return { message };
}

// DELETE FUNCTION
async function removeCustomer(id) {
    const result = await db.query(
        `DELETE FROM clientDetails WHERE customerID=${id}`
    );

    let message = 'Error in removing customer';

    if (result.affectedRows) {
        message = 'Customer removed successfully';
    }

    return { message };
}

module.exports = {
    getCustomers,
    createCustomer,
    updateCustomer,
    removeCustomer
}