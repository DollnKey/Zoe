const { Command } = require('../../structure')

module.exports = class UptimeCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'uptime',
            aliases: ['timeon'],
            description: 'Mostra meu tempo de Atividade',
            usage: '<prefix>uptime',
            category: 'Miscellaneous'
        })
    }
    run ({ channel, client }) {
    const { MessageEmbed } = require('discord.js')

    let totalSeconds = client.uptime / 1000
    let dias = Math.floor(totalSeconds / 86400)
    let horas = Math.floor(totalSeconds / 3600)
    totalSeconds %= 3600
    let minuto = Math.floor(totalSeconds / 60)
    let segundo = totalSeconds % 60

    let uptime = `🗓️ ${dias.toFixed()}D | ${horas.toFixed()}H | ${minuto.toFixed()}M | ${segundo.toFixed()}S `

    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**Estou online há:**${uptime}`)

    channel.send(embed)
    }
}
