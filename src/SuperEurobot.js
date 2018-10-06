const { Client } = require("discord.js");
const Config = require("./Config");
const fs = require('fs');

class SuperEurobot extends Client {
    
    constructor() {
        super();
        this.commands = [];
        this.loadConfig();
        this.loadAllCommands();
        this.setupListeners();
    }
    
    loadConfig() {
        this.config = new Config();
        this.debugMessages() ? console.log("Configuration file loaded.") : null;
    }

    loadAllCommands() {
        fs.readdirSync(this.config.command_directory).forEach(path => {
            this.loadCommand(path);
        });
    }

    debugMessages() {
        return this.config.logging_level;
    }

    loadCommand(path) {
        let newCommand = new require(this.config.command_directory + path);
        this.commands.push(newCommand);
        this.debugMessages() ? console.log("Loaded command: " + newCommand.name) : null;
    }

    setupListeners() {
        this.on("message", (msg) => {
            if (msg.startsWith(this.config.command_prefix)) {
                this.handleMessage(msg);
            }
        });
    }

    handleMessage(msg) {
        // TODO
    }
}

module.exports = SuperEurobot;
