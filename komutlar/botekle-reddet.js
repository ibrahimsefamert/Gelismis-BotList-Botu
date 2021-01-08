  const Discord = require('discord.js');


  exports.run = function(client, message, args) {

  if (!message.member.roles.has("BOT-KONTROL-ROL-İD")) return message.channel.send(`**Bu komutu kullanmnız için yetkiniz yetmiyor.**`);

	let sefamert = args[0]
  let sahip = args[1]
  let sebep = args[2]
  let sebepp = args[3]
  let sebeppp = args[4]
  let kanal = "KANAL-İD" // onaylama reddetme kanalı
	let atlanticode = "KANAL-İD" // bot eklendi / onaylandı / reddedildi kanalı
  
	if (message.channel.id !== kanal) return message.channel.send(`**Başvuruda bulunulmuş bir botu yalnızca <#${kanal}> kanalında reddetebilirsin.**`).then(msg => msg.delete(5000))
  if (!sefamert) return message.channel.send(`**Botun idsini yazmalısın.**`).then(msg => msg.delete(5000))
  if (!sahip) return message.channel.send(`**Botun sahibinin idsini yazmalısın.**.`).then(msg => msg.delete(5000))
  if (!sebep) return message.channel.send(`**3 kelimelik sebep yazmalısın.**.`).then(msg => msg.delete(5000))
  message.delete()

  client.channels.get(atlanticode).send(`<@${sahip}> **adlı geliştiricinin; <@${sefamert}> adlı, __${sefamert}__ idli botu reddedildi.** \n **Sebep : ${sebep} ${sebepp} ${sebeppp}**\n  __**Botu Reddeden Yetkili :**__ ${message.author} - **${message.author.tag}**`)
  
  
  message.channel.send(`**Başarıyla botu reddettiniz.**`).then(msg => msg.delete(10000))
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-reddet', 'reddet','ret','r','red'],
  permLevel: 0
};

exports.help = {
  name: 'botreddet', 
  description: "Başvuru yapılan botu reddeder.",
  usage: 'botreddet <bot-id> <bot-sahip-id> <sebep>'
};6