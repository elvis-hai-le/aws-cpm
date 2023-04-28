const http = require('http');

const postData = JSON.stringify({
    name: {
        first: 'Jane',
        last: 'Doe'
    },
    phone: '0434883737',
    email: 'jane@gmail.com',
    bank: {
        bsb: "067",
        account: "16323193308",
    },
    assets: [
        {
            assetName: 'CBA.ASX',
            quantity: '148238',
            purchasePrice: '0.8',
            currentPrice: '0.43',
            total: '6000'
        }
    ]
});

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/customer-details',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
    },
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// Write data to request body
req.write(postData);
req.end(); 