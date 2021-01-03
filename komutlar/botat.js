const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:unlem:794638042484441170> **Bu komutu kullanmnız için yetkiniz yetmiyor.**`);
	let botisim = args[1]
  let sahip = args[0]
  let sebep = args[2]
  let sebepp = args[3]
  let sebeppp = args[4]
  let kanal = "795039723793285160" // onaylama reddetme kanalı
	let log = "795015559921008650" // bot eklendi / onaylandı / reddedildi kanalı
	
	if (!botisim) return message.channel.send(`<a:unlem:794638042484441170> **Botun idsini yazmalısın.**`).then(msg => msg.delete(10000))
  message.delete()
  if (!sebep) return message.channel.send(`<a:unlem:794638042484441170> **3 kelimelik sebep yazmalısın.**`).then(msg => msg.delete(10000))
  message.delete()
		client.channels.get(log).send(`<:cop:794637826829713469> <@${sahip}> adlı kişinin <@${botisim}> adlı botu atıldı.Sebep: **${sebep} ${sebepp} ${sebeppp}**. Atan yetkili : ${message.author}`);
		message.channel.send(`<a:onay:794638422492315680> **Başarıyla botu attınız.**`).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-at', 'at'],
  permLevel: 0
};

exports.help = {
  name: 'botat', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'
};6