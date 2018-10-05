const fs = require('fs');
const token = fs.readFileSync('../config/token.txt', 'utf8');
const SuperEurobot = require('./SuperEurobot');
const client = new SuperEurobot();

client.login(token.trim());
