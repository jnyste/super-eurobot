class Command {
    constructor(client) {
        this.client = client;
        this.name = "";
        this.identifier = "";
    }

    exec() {
        throw new Error("Tried to exec() a Command without an exec()!");
    }
}

module.exports = Command;
