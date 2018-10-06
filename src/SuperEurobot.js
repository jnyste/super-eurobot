const fs = require('fs');
const { Client } = require("discord.js");
const Config = require("./Config");

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
        this.debugMessages() ? console.log("All commands loaded.") : null;
    }
    
    loadCommand(path) {
        let newCommand = new (require(this.config.command_directory + path));
        this.commands.push(newCommand);
        this.debugMessages() ? console.log("Loaded command: " + newCommand.name) : null;
    }

    setupListeners() {
        this.on("message", (msg) => {
            if (msg.content.startsWith(this.config.command_prefix)) {
                this.handleMessage(msg);
            }
        });
    }

    handleMessage(msg) {
        // TODO
        let commandArgs = msg.content.substr(this.config.command_prefix.length).split(" ");
        this.commands.forEach(function(command) {
            if (commandArgs[0] == command.identifier)
                command.exec(this, commandArgs);
        });
    }

    debugMessages() {
        return this.config.logging_level;
    }

}

module.exports = SuperEurobot;
