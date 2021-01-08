const Discord = require('discord.js');


exports.run = function(client, message, args) {

  let sefamert = args[0]
  let sebep1 = args[1]
  let sebep2 = args[2]
  let sebep3 = args[3]
  let sebep4 = args[4]
  let sebep5 = args[5]
  let bildirme = "KANAL-İD"// bildirmenin gideceği kanal
  let kanal = "KANAL-İD" // bot bildirme kanalı
  
  if (message.channel.id !== kanal) return message.channel.send(`**Botu sadece <#${kanal}> kanalında bildirebilirsin.**`).then(msg => msg.delete(10000))
  if (message.channel.id == kanal) {
  if (!sefamert) return message.channel.send(`**Botun idsini yazmalısın.** \n **Örnek :** \`\`!botbildir <bot-id> <5-kelimelik-sebep>\`\``).then(msg => msg.delete(10000))
  if (!sebep1) return message.channel.send(`**Botu neden bildirdiğini 5 kelime ile yazmalısın.** \n **Örnek :** \`\`!botbildir <bot-id> <5-kelimelik-sebep>\`\``).then(msg => msg.delete(10000))
  if (!sebep2) return message.channel.send(`**Botu neden bildirdiğini 5 kelime ile yazmalısın.** \n **Örnek :** \`\`!botbildir <bot-id> <5-kelimelik-sebep>\`\``).then(msg => msg.delete(10000))
  if (!sebep3) return message.channel.send(`**Botu neden bildirdiğini 5 kelime ile yazmalısın.** \n **Örnek :** \`\`!botbildir <bot-id> <5-kelimelik-sebep>\`\``).then(msg => msg.delete(10000))
  if (!sebep4) return message.channel.send(`**Botu neden bildirdiğini 5 kelime ile yazmalısın.** \n **Örnek :** \`\`!botbildir <bot-id> <5-kelimelik-sebep>\`\``).then(msg => msg.delete(10000))
  if (!sebep5) return message.channel.send(`**Botu neden bildirdiğini 5 kelime ile yazmalısın.** \n **Örnek :** \`\`!botbildir <bot-id> <5-kelimelik-sebep>\`\``).then(msg => msg.delete(10000))

  message.delete()
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(` [Botu Test İçin Ekle](https://discordapp.com/oauth2/authorize?client_id=${sefamert}&scope=bot&permissions=0)`, true)
  .setTitle("Sefa MERT | Discord Gelişmiş BotList Botu")
  .addField("Botu Bildirenin Adı", message.author.tag )
  .addField("Botun Bildirenin İdsi", message.author.id)
  .addField("Bildirme Sebepleri", sebep1)
  .addField("Sebep 2",sebep2)
  .addField("Sebep 3",sebep3)
  .addField("Sebep 4",sebep4)
  .addField("Sebep",sebep5)
  .addField("Botun İdsi", sefamert)

  client.channels.get(bildirme).send(embed)
  client.channels.get(bildirme).send(`<@BOT-KONTROL-ROLÜ-İD>`)
  message.channel.send(`**${message.author}, Başarıyla <@${sefamert}> adlı botu __${sebep1}__ __${sebep2}__ __${sebep3}__ __${sebep4}__ __${sebep5}__ sebebiyle bildirdiniz.**`).then(msg => msg.delete(10000))
}
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['botbildir'],
permLevel: 0
};

exports.help = {
name: 'bot-bildir', 
description: "Sunucuya eklenmiş botu bildirir.",
usage: 'botbildir <botid> <prefix>'
};