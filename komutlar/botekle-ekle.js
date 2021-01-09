  const Discord = require('discord.js');


  exports.run = function(client, message, args) {

	let sefamert = args[0]
	let prefix = args[1]
        let basvuru = "KANAL-İD"// başvurunun yapılacağı kanal
        let basvurulog = "KANAL-İD" // başvurunun gideceği kanal
        let kanal = "KANAL-İD" // bot anaylama reddetme kanalı
        let atlanticode = "KANAL-İD" // bot durum log kanalı
	
  if (message.channel.id !== basvuru) return message.channel.send(`**ℹ ・ Botunuz için sadece <#${basvuru}> kanalında başvuruda bulunabilirsiniz.**`).then(msg => msg.delete(10000))
	if (message.channel.id == basvuru) {
  if (!sefamert) return message.channel.send(`**:exclamation: ・ Botunun idsini yazmalısın.** \n **Örnek :** \`\`!botekle <bot-id> <bot-prefix>\`\``).then(msg => msg.delete(10000))
  if (!prefix) return message.channel.send(`**:exclamation: ・ Botunun prefixini yazmalısın.** \n **Örnek :** \`\`!botekle <bot-id> <bot-prefix>\`\``).then(msg => msg.delete(10000))
  
  message.delete()
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(` [Botu Test İçin Ekle](https://discordapp.com/oauth2/authorize?client_id=${sefamert}&scope=bot&permissions=0)`, true)
  .setTitle("Sefa MERT | Discord Gelişmiş BotList Botu")
  .addField("Botun Geliştiricisinin Adı", message.author.tag )
  .addField("Botun Geliştiricisinin İdsi", message.author.id)
  .addField("Botun İdsi", sefamert)
  .addField("Botun Prefixi",prefix)

  client.channels.get(basvurulog).send(embed)
  client.channels.get(basvurulog).send(`<@BOT-KONTROL-ROLÜ-İD>`)
  client.channels.get(atlanticode).send(`${message.author} **adlı geliştiricinin; <@${sefamert}> adlı, __${sefamert}__ idli botu inceleme sırasına alındı.** \n **Tahmini İncelenme Süresi :** __**1 Saat**__`)
  message.channel.send(`**:white_check_mark: ・ ${message.author}, botunuz başarıyla inceleme sırasına alınmıştır. Bizimle çalıştığınız için teşekkürler.**`).then(msg => msg.delete(10000))
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-ekle','ekle'],
  permLevel: 0
};

exports.help = {
  name: 'botekle', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};
