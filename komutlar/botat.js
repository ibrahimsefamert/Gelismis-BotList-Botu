const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:unlem:794638042484441170> **Bu komutu kullanmnız için yetkiniz yetmiyor.**`);
	let botid = args[1]
  let sebep = args[2]
  let sebepp = args[3]
  let sebeppp = args[4]
  let kanal = "795039723793285160" // onaylama reddetme kanalı
	let log = "795015559921008650" // bot eklendi / onaylandı / reddedildi kanalı
	
  if (message.channel.id !== kanal) return message.channel.send(`**<a:unlem:794638042484441170> Sitemimizde bulunan bir botu yalnızca <#${kanal}> kanalında atabilirsin.**`).then(msg => msg.delete(5000))
	if (!botid) return message.channel.send(`<a:unlem:794638042484441170> **Botun idsini yazmalısın.**`).then(msg => msg.delete(10000))
  if (!sebep) return message.channel.send(`<a:unlem:794638042484441170> **3 kelimelik sebep yazmalısın.**`).then(msg => msg.delete(10000))
		client.channels.get(log).send(`<:cop:794637826829713469> <@${botid}> **adlı bot atıldı.** \n <a:up:794990618652442624> **Sebep :** **${sebep} ${sebepp} ${sebeppp}**. \n <a:hyq:794637845255421953> __**Botu Atan Yetkili :**__ ${message.author} - **${message.author.tag}**`);
		message.channel.send(`<a:onay:794638422492315680> **Başarıyla botu attınız.**`).then(msg => msg.delete(10000))
  	message.delete()
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