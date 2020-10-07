const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'yuri',
            aliases: [],
            category: 'NSFW +18',
            nsfwChannelOnly: true
        })
    }
    run ({ channel, author }) {
    const Discord = require('discord.js')
    const superagent = require('superagent')

 superagent.get('https://nekos.life/api/v2/img/yuri')
 .end((err, response) => {
     const embed = new Discord.MessageEmbed()
     .setDescription(`Não consegue ver? [Clique aqui](${response.body.url})`)
     .setImage(response.body.url)
       .setColor('RANDOM')
       .setThumbnail(author.displayAvatarURL({ dynamic: true }))
     .setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))
     channel.send(embed)
    })
    }
}
