const { Listener } = require('../../structure')

module.exports = class GuildMemberRemoveListener extends Listener {
    constructor () {
        super({
            name: 'guildMemberRemove'
        })
    }
   async run (guild) {
        const firebase = require('firebase')
        const database = firebase.database()

      const db = await database.ref(`Servidores/${guild.id}/Configs`).once('value')
      if (db.val() === null) {
         return database.ref(`Servidores/${guild.id}/Configs`).set({
              prefix: "y!",
              BemVindoID: "undefined",
              MensagemBemVindo: `Olá {member}, Seja bem-vindo(a) ao {guild.name}`,
              SaidaID: "undefined",
              SaidaMensagem: `{member} saiu do Servidor :(`,
              LogsID: "undefined"
          })
      }
      if (db.val().SaidaID === "undefined") return;
      const mensagem = db.val().SaidaMensagem
      mensagem.replace('{member}', '${member.user}')

     mensagem.replace('{guild.name}', '${guild.name}')

      this.client.channels.cache.get(`${db.val().SaidaID}`).send(`${mensagem}`).catch(async err => {
        console.log(err)
      })
    }
}
