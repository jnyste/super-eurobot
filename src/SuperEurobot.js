const { Client } = require("discord.js");
const Config = require("./Config");

class SuperEurobot extends Client {
    constructor() {
        super();
        // Load the configuration file
        this.config = new Config();
        this.config.logging_level > 0 ? console.log("Configuration file loaded.") : null;
    }
}

module.exports = SuperEurobot;
