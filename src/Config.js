const fs = require('fs');

class Config {
    constructor() {
        const config_file = fs.readFileSync("../config/config.json");
        const config = JSON.parse(config_file);
        this.logging_level = config["logging_level"];
        this.command_prefix = config["command_prefix"];
    }
}

module.exports = Config;
