const Command = require('../../Util/Command');
const emj = require('../../API/connectEmoji');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: '4k',
            aliases: [],
            category: 'Nsfw'
        })
    }
    run(message, args, t) {
        
    }
}