const Command = require('../../Util/Command');
const emj = require('../../API/connectEmoji');

module.exports = class EvalCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'eval',
            aliases: ['eval', 'e'],
            category: 'Developer'
        })
    }
    run(message, args, t) {
        console.log('a')
    }
}