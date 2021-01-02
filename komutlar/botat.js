const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:unlem:794638042484441170> **Bu komutu kullanmnız için yetkiniz yetmiyor.**`);
	let botisim = args[1]
  let sahip = args[0]
  let sebebp = args[2]
  let sebebpp = args[3]
	let log = "795015559921008650" // bot eklendi / onaylandı / reddedildi kanalı
	
	if (!botisim) return message.channel.send(`<a:unlem:794638042484441170> **Botun idsini yazmalısın.**`).then(msg => msg.delete(10000))
  message.delete()
  if (!sebebp) return message.channel.send(`<a:unlem:794638042484441170> **4 kelimelik sebep belirtmelisin.**`).then(msg => msg.delete(10000))
  message.delete()
		client.channels.get(log).send(`<a:cevrimdisi:752170671047573584> <@${sahip}> adlı kişinin <@${botisim}> adlı botu atıldı.Sebep: **${sebebp} ${sebebpp}**. Atan yetkili : ${message.author}`);
		message.channel.send(`<a:onay:794638422492315680> **Başarıyla botu attınız.**`).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-onayla', 'onayla'],
  permLevel: 0
};

exports.help = {
  name: 'botat', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'
};6