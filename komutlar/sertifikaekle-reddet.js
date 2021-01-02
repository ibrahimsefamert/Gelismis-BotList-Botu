const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:unlem:794638042484441170> **Bu komutu kullanmnız için yetkiniz yetmiyor.**`);
	let botisim = args[0]
  let sahip = args[1]
  let sebep = args[2]
  let sebep1 = args[3]
  let sebep2 = args[4]
  let sebep3 = args[5]
  let sebep4 = args[6]
  let sebep5 = args[7]
  let sebep6 = args[8]
  let sebep7 = args[9]
  let sebep8 = args[10]
  let sebep9 = args[11]
  let kanal = "768439091452182529" // onaylama reddetme kanalı
	let log = "795015559921008650" // bot eklendi / onaylandı / reddedildi kanalı
	
  if (message.channel.id !== kanal) return message.channel.send(`**<a:unlem:794638042484441170> Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.**`).then(msg => msg.delete(10000))
	if (!botisim) return message.channel.send(`<a:unlem:794638042484441170>**Botun idsini yazmalısın.**`).then(msg => msg.delete(10000))
      if (!sahip) return message.channel.send(`<a:unlem:794638042484441170> Bot sahibinin idsini yazmalısın.`).then(msg => msg.delete(10000))
  if (!sebep) return message.channel.send(`<a:unlem:794638042484441170> **Sertifika talebini neden onaylamadığını yazmalısın.**`).then(msg => msg.delete(10000))

  message.delete()
		client.channels.get(log).send(`<a:barcode_dnd:768558227461373983> <@${sahip}> **Adlı Kişinin <@${botisim}> Adlı Botu İçin Olan Sertifika Talebi Reddedildi.** \n **Sebep : ${sebep} ${sebep1} ${sebep2} ${sebep3}** \n __*Sertifika Talebini Reddeden Yetkili:*__ ${message.author} `);
		message.channel.send(`<a:onay:794638422492315680> **Başarıyla Sertifika Talebini Reddettiniz.**`).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sertifika-reddet', 'sreddet'],
  permLevel: 0
};

exports.help = {
  name: 'sertifikareddet', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};