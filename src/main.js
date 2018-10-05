const fs = require('fs');
const token = fs.readFileSync('../config/token.txt', 'utf8');
const SuperEurobot = require('./SuperEurobot');
const client = new SuperEurobot();

client.on('ready', () => {
   console.log(`Logged in as ${client.user.tag}!`);
});

client.login(token.trim());
