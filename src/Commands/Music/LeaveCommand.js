module.exports = {
    config: {
        name: "leave",
        aliases: [],
        description: '',
        category: "Music"
    },
    run: async(client, message, args) => {
   const canalVoz = message.member.voice.channel
   message.react('👋')
   if(!canalVoz) {
        return message.channel.send("Voce não está num canal de voz para fazer isso!")
    }
    const memberChannel = message.member.voice.channel.id
    
    const player = await client.music.leave({
      guild: message.guild.id,
      voiceChannel: memberChannel,
      textChannel: message.channel
    })
   const entrar = player
  }
}