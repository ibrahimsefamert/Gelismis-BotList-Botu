  const Discord = require('discord.js');


  exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu komutu kullanmnız için yetkiniz yetmiyor.**`);
  
  let sefamert = args[0]
  let sebep = args[1]
  let sebepp = args[2]
  let sebeppp = args[3]
  let kanal = "KANAL-İD" // bot anaylama reddetme kanalı
	let atlanticode = "KANAL-İD" // bot durum log kanalı
	
  if (message.channel.id !== kanal) return message.channel.send(`**Sistemimizde bulunan bir botu yalnızca <#${kanal}> kanalında atabilirsin.**`).then(msg => msg.delete(5000))
	if (!sefamert) return message.channel.send(`**Botun idsini yazmalısın.**`).then(msg => msg.delete(10000))
  if (!sebep) return message.channel.send(`**3 kelimelik sebep yazmalısın.**`).then(msg => msg.delete(10000))
  
  client.channels.get(atlanticode).send(`<@${sefamert}> **adlı bot atıldı.** \n **Sebep :** **${sebep} ${sebepp} ${sebeppp}**. \n  __**Botu Atan Yetkili :**__ ${message.author} - **${message.author.tag}**`);
	message.channel.send(`**Başarıyla botu attınız.**`).then(msg => msg.delete(10000))
  
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
  description: "Sunucuya eklenmiş botu atar.",
  usage: 'botat <bot-id> <sebep>'
};6
