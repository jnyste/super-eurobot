const fs = require('fs');

class Config {
    constructor() {
        const config_file = fs.readFileSync("../config/config.json");
        const config = JSON.parse(config_file);
        this.logging_level = config["logging_level"];
        this.command_prefix = config["command_prefix"];
        this.command_directory = config["command_directory"];
    }
}

module.exports = Config;
