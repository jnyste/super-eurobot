const fs = require('fs');

class Config {
    constructor() {
        const config_file = fs.readFileSync("../config/config.json");
        const token = fs.readFileSync("../config/token.txt", "utf8");
        const owner_file = fs.readFileSync("../config/owner.txt", "utf8");
        const config = JSON.parse(config_file);
        this.logging_level = config["logging_level"];
        this.command_prefix = config["command_prefix"];
        this.command_directory = config["command_directory"];
        this.owner = owner_file.trim();
        this.token = token.trim();
    }
}

module.exports = Config;
