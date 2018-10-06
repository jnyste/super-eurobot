const Command = require('../Command');

class HelpCommand extends Command {
    constructor(client) {
        super(client);
        this.name = "Help Command";
    }

    async exec(msg) {
        console.log("Ran help command!");
    }
}

module.exports = HelpCommand;
