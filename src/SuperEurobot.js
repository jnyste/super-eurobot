const { Client } = require("discord.js");
const Config = require("./Config");

class SuperEurobot extends Client {
    
    constructor() {
        super();
        this.commands = [];
        this.loadConfig();
        this.loadCommand("./commands/HelpCommand.js");
        this.setupListeners();
    }
    
    loadConfig() {
        this.config = new Config();
        this.debugMessages() ? console.log("Configuration file loaded.") : null;
    }

    debugMessages() {
        return this.config.logging_level;
    }

    loadCommand(path) {
        let req = require(path);
        let command = new req();
        this.commands.push(command);
        this.debugMessages() ? console.log("Loaded command: " + command.name) : null;
    }

    setupListeners() {
        this.on("message", (msg) => {
            console.log("Received message.");
            this.commands[this.commands.length - 1].exec(msg);
        });
    }
}

module.exports = SuperEurobot;
