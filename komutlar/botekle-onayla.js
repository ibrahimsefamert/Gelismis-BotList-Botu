const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:unlem:794638042484441170> **Bu komutu kullanmnız için yetkiniz yetmiyor.**`);
	let botid = args[0]
  let sahip = args[1]
  let kanal = "795039723793285160" // onaylama reddetme kanalı
	let log = "795015559921008650" // bot eklendi / onaylandı / reddedildi kanalı
  let log2 = "795019977173893130" // bot sahiplerinin gösterileceği kanal
  
	if (message.channel.id !== kanal) return message.channel.send(`**<a:unlem:794638042484441170> Başvuruda bulunulmuş bir botu yalnızca <#${kanal}> kanalında onaylayabilirsin.**`).then(msg => msg.delete(5000))
	if (!botid) return message.channel.send(`<a:unlem:794638042484441170> **Botun idsini yazmalısın.**`).then(msg => msg.delete(5000))
  if (!sahip) return message.channel.send(`<a:unlem:794638042484441170> **Botun sahibinin idsini yazmalısın.**.`).then(msg => msg.delete(5000))
  message.delete()
	client.channels.get(log).send(`<:tsl_onaylandi:769298286623981590> <@${sahip}> **Adlı Geliştiricinin <@${botid}> Onaylandı.**\n __*Sunucuyu Onaylayan Yetkili:*__ ${message.author} - **${message.author.tag}**`);
		client.channels.get(log2).send(`<:barcode_bilgi:768558132842070037>  **Turkey ServerList | Server Yönetimi** <:barcode_bilgi:768558132842070037>\n __*Botu Onaylayan Yetkili:*__ ${message.author} - **${message.author.tag}**`)
  message.channel.send(`<a:onay:794638422492315680> **Başarıyla Botu Onayladınız.**`).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['server-onayla', 'onayla','onay','o'],
  permLevel: 3
};

exports.help = {
  name: 'serveronayla', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'
};6