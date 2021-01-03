const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:unlem:794638042484441170> **Bu komutu kullanmnız için yetkiniz yetmiyor.**`);
	let botid = args[0]
  let zaman = args[1]
  let kanal = "795039723793285160" // onaylama reddetme kanalı
	let log = "795015559921008650" // bot eklendi / onaylandı / reddedildi kanalı
	
  if (message.channel.id !== kanal) return message.channel.send(`**<a:unlem:794638042484441170> Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.**`).then(msg => msg.delete(10000))
  if (!botid) return message.channel.send(`<a:unlem:794638042484441170> **Botun idsini yazmalısın.**`).then(msg => msg.delete(10000))
  if (!zaman) return message.channel.send(`<a:unlem:794638042484441170> **Gün sayısı belirtmelisin.**`).then(msg => msg.delete(10000))
  message.delete()
		client.channels.get(log).send(`<a:dikkat:794638320495755334> <@${botid}> **adlı bot kapalıdır.** **__${zaman}__** **günden fazla kapalı kalırsa atılacakdır!** \n <a:up:794990618652442624> **Botun geliştiricisinin durumu düzeltmesi önemle rica olunur.**  \n <a:hyq:794637845255421953> **Botla ilgili bir maruziyetiniz varsa <@794543488808910858>'e yazabilirsiniz.**`);
		message.channel.send(`<a:onay:794638422492315680> **Başarıyla botu sahibine bildirdiniz.**`).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-kapalı', 'kapalı','k'],
  permLevel: 0
};

exports.help = {
  name: 'botkapalı', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};