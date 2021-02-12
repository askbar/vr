
// read certificate for https
const fs = require('fs');
const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');

// create webserver
const express = require('express');
const https = require('https');
const app = express();
const server = https.createServer({ key: key, cert: cert }, app);

// start server
app.get('/', (req, res) => { res.sendFile('/Users/ask/v2/index.html'); });
server.listen(3001, () => { console.log('listening on 3001') });