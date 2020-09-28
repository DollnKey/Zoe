const { Command } = require('../../structure')

module.exports = class PingCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'ping',
      aliases: ['latency', 'latência'],
      description: 'Mostra o meu ping',
      usage: '<prefix>ping',
      category: 'Miscellaneous'
    })
  }

 async run ({ channel, author, client, message }) {
    const { MessageEmbed } = require("discord.js")

      const embedB = new MessageEmbed()
      .setColor("RED")
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 4096 }))
      .addField(`📡 Latência Da API é de`, `${Math.round(client.ws.ping)} ms`)
      .setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))

      channel.send(embedB)
  }
}
