const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:unlem:794638042484441170> **Bu komutu kullanmnız için yetkiniz yetmiyor.**`);
	let botisim = args[0]
  let sahip = args[1]
  let kanal = "KANAL-İD" // onaylama reddetme kanalı
	let log = "KANAL-İD" // bot eklendi / onaylandı / reddedildi kanalı
  
	if (message.channel.id !== kanal) return message.channel.send(`**<a:unlem:794638042484441170> Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.**`).then(msg => msg.delete(10000))
	if (!botisim) return message.channel.send(`<a:unlem:794638042484441170> **Botun idsini yazmalısın.**`).then(msg => msg.delete(10000))

  message.delete()
	client.channels.get(log).send(`<a:barcode_online:768557982610882621> <@${sahip}> **Adlı Kişinin <@${botisim}> Adlı Botuna Sertifika Verildi.** \n __*Bota Sertifika Veren Yetkili:*__ ${message.author}`);
		message.channel.send(`<a:onay:794638422492315680> **Başarıyla Bota Sertifika Verdiniz**`).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sertifika-onayla','sonay','sver'],
  permLevel: 3
};

exports.help = {
  name: 'sertifikaonayla', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'
};6