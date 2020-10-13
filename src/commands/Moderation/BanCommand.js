const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'ban',
            aliases: ['banir'],
            category: 'Moderation'
        })
    }
   async run ({ channel, msg, member, guild, mentions, args, author }) {
    const { MessageEmbed } = require('discord.js')
    if(!member.permissions.has("BAN_MEMBERS")) {
    return channel.send("<:xSweet:756989900661850182> | Você não tem a Permissão `Banir Membros`")
  }

  if(!guild.me.permissions.has("BAN_MEMBERS")) {
    return channel.send("<:xSweet:756989900661850182> | Eu não tenho a Permissão `Banir Membros`")
  }

  var membro = mentions.members.first() || guild.members.cache.get(args[0])
  if(!membro) return channel.send("<:xSweet:756989900661850182> | Você precisa mencionar alguem!")
  if(membro.user.id === author.id) {
    return channel.send("<:xSweet:756989900661850182> | Você não pode se banir :v")
  }
  if(membro.user.id === this.client.user.id) {
    return channel.send("<:xSweet:756989900661850182> | Por que você quer me banir?")
  }
  if(!membro.bannable) {
    return channel.send("<:xSweet:756989900661850182> | Eu não posso banir este membro, Ele(a) pode ter um cargo maior que o meu ou eu tenho permissão para banir !")
  }

  let motivo = args.slice(1).join(" ")
  if(!motivo) motivo = "Não Definido"

   const msge = await channel.send(`<@${author.id}>, Você quer mesmo banir ${membro.user.tag}(\`${membro.user.id}\`) permanentemente? Clique em uma das reações abaixo! `)
   await msge.react('✅')
   await msge.react('756989900661850182')

   const sim = (reaction, user) => reaction.emoji.name === '✅' && user.id === author.id
   const no = (reaction, user) => reaction.emoji.id === '756989900661850182' && user.id === author.id
   const collectorDaMsg = msge.createReactionCollector(sim)
   const collectorNo = msge.createReactionCollector(no)

   collectorDaMsg.on('collect', async r => {
    const embedPv = new MessageEmbed()
    .setTitle(`:no_entry_sign: Você foi Banido de ${guild.name}(${guild.id})`)
    .setColor("RED")
    .setThumbnail(author.displayAvatarURL({ dynamic: true, size: 2048 }))
    .addField("👮‍♂️ Quem Puniu:", author.tag, false)
    .addField("📜 Motivo:", motivo, false)
    .setTimestamp()
    membro.send(embedPv).catch(err => {
      channel.send(`<:xSweet:756989900661850182> | Não foi possivel enviar a mensagem para esse ex membro(a) por causa de ${err}`)
    })

    membro.ban({ reason: motivo })
    msge.delete({ timeout: 3000 })
    const embed = new MessageEmbed()
    .setTitle(":fire: Membro(a) Banido(a)! :fire:")
    .setColor("RED")
    .setThumbnail(author.displayAvatarURL({ dynamic: true, size: 2048 }))
    .addField("👤 Banido(a) :", membro.user.tag, false)
    .addField("👮‍♂️ Quem Puniu:", author.tag, false)
    .addField("📜 Motivo:", motivo, false)
    .setTimestamp()
    .setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))

   const messageA = await channel.send(embed)
    await messageA.react('🍪')
    channel.send('<:checkSweet:757016162633646211> | Alguém mais quer ser Banido? Hehehe')
   })

   collectorNo.on('collect', r => {
     msge.delete()
     })
  }
}
