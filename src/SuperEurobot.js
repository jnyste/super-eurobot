const { Client } = require("discord.js");
const Config = require("./Config");

class SuperEurobot extends Client {
    
    constructor() {
        super();
        this.loadConfig();
        this.loadCommands();
        this.setupListeners();
    }
    
    loadConfig() {
        this.config = new Config();
        this.config.logging_level > 0 ? console.log("Configuration file loaded.") : null;
    }

    loadCommands() {
        // TODO        
    }

    setupListeners() {
        this.on("message", () => {
            console.log("Received message.");
        });
    }
}

module.exports = SuperEurobot;
