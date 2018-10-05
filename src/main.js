const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const token = fs.readFileSync('../config/token.txt', 'utf8');

client.on('ready', () => {
   console.log(`Logged in as ${client.user.tag}!`);
});

client.login(token.trim());
