const fs = require('fs');

class Config {
    constructor() {
        const config_file = fs.readFileSync("../config/config.json");
    }
}

module.exports = Config;
