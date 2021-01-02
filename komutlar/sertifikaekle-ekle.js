const Discord = require('discord.js');


exports.run = function(client, message, args) {

	let botid = args[0]
	let prefix = args[1]
  let onaylımı = args[2]
  let basvuru = "795020393827794984"// başvurunun gideceği kanal
	let kanal = "768438272916979744" // başvurunun yapılacağı kanal
  let log = "795015559921008650" // bot eklendi / onaylandı / reddedildi kanalı
	
  if (message.channel.id !== kanal) return message.channel.send(`<a:unlem:794638042484441170> **Botun için sertifika talebini yalnızca <#${kanal}> kanalında yapabilirsin.**`).then(msg => msg.delete(10000))
	if (message.channel.id == kanal) {
  if (!botid) return message.channel.send(`<a:unlem:794638042484441170> **Botunun idsini yazmalısın.**`).then(msg => msg.delete(10000))
  message.delete()
  const embed = new Discord.RichEmbed()
  .setColor("ff0000")
  .setDescription(`[Botu Test Sunucusuna Ekle](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`, true)
  .setTitle("<a:mavi_siren:725103267696214079> Atlantic BotList | Sertifika Talep <a:kirmizisiren:738147932339044383>")
  .addField("Bot Sahibi", message.author.tag )
  .addField("Bot Sahibi İd", message.author.id)
  .addField("Bot ID", botid)
  client.channels.get(basvuru).send(embed)
  client.channels.get(log).send(`<a:barcode_idle:768558340757782548>  ${message.author} **adlı kullanıcının** <@${botid}> **adlı botu için sertifika talebi alındı.**`)
  message.channel.send(`<a:onay:794638422492315680> **Botunuz İçin Olan Sertifika Talebiniz Sıraya Alındı.**`).then(msg => msg.delete(5000))
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sertifika-talep','sertifika-ekle'],
  permLevel: 0
};

exports.help = {
  name: 'sertifika', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};