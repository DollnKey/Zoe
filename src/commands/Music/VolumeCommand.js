const Command = require('../../Util/Command');
const emj = require('../../API/connectEmoji');

module.exports = class VolumeCommand extends Command {
    constructor(client) {
        super(client, {
            name: '',
            aliases: [],
            description: '',
            category: ''
        })
    }
    run(message, args, t) {
        
    }
}