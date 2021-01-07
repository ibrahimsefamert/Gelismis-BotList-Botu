const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`**Bu komutu kullanmnız için yetkiniz yetmiyor.**`);
	let botisim = args[0]
  let sahip = args[1]
  let sebep = args[2]
  let sebep1 = args[3]
  let sebep2 = args[4]
  let sebep3 = args[5]
  
  let kanal = "KANAL-İD" // onaylama reddetme kanalı
	let log = "KANAL-İD" // bot eklendi / onaylandı / reddedildi kanalı
	
  if (message.channel.id !== kanal) return message.channel.send(`**Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.**`).then(msg => msg.delete(10000))
	if (!botisim) return message.channel.send(`**Botun idsini yazmalısın.**`).then(msg => msg.delete(10000))
      if (!sahip) return message.channel.send(`**Bot sahibinin idsini yazmalısın.**`).then(msg => msg.delete(10000))
  if (!sebep) return message.channel.send(`**Sertifika talebini neden onaylamadığını yazmalısın.**`).then(msg => msg.delete(10000))

  message.delete()
		client.channels.get(log).send(`<@${sahip}> **Adlı Kişinin <@${botisim}> Adlı Botu İçin Olan Sertifika Talebi Reddedildi.** \n **Sebep : ${sebep} ${sebep1} ${sebep2} ${sebep3}** \n __*Sertifika Talebini Reddeden Yetkili:*__ ${message.author} `);
		message.channel.send(`**Başarıyla Sertifika Talebini Reddettiniz.**`).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sertifika-reddet', 'sreddet'],
  permLevel: 0
};

exports.help = {
  name: 'sertifikareddet', 
  description: "Sert,f,ka talebini reddeder.",
  usage: ''
};