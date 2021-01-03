const Discord = require('discord.js');//Atlantic Code'ye Aittir.


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:unlem:794638042484441170> **Bu komutu kullanmnız için yetkiniz yetmiyor.**`);
	let botid = args[0]
  let sahip = args[1]
  let sebep = args[3]
  let sebepp = args[3]
  let sebeppp = args[3]
  let kanal = "795039723793285160" // onaylama reddetme kanalı
	let log = "795015559921008650" // bot eklendi / onaylandı / reddedildi kanalı
  
	if (message.channel.id !== kanal) return message.channel.send(`**<a:unlem:794638042484441170> Başvuruda bulunulmuş bir botu yalnızca <#${kanal}> kanalında reddetebilirsin.**`).then(msg => msg.delete(5000))
	message.delete()
  if (!botid) return message.channel.send(`<a:unlem:794638042484441170> **Botun idsini yazmalısın.**`).then(msg => msg.delete(5000))
  message.delete()
  if (!sahip) return message.channel.send(`<a:unlem:794638042484441170> **Botun sahibinin idsini yazmalısın.**.`).then(msg => msg.delete(5000))
  message.delete()
if (!sahip) return message.channel.send(`<a:unlem:794638042484441170> **4 kelimelik sebep yazmalısın.**.`).then(msg => msg.delete(5000))
  message.delete()

  client.channels.get(log).send(`<:reddedildi:794990245920637058> <@${sahip}> **adlı geliştiricinin; <@${botid}> adlı, __${botid}__ idli botu reddedildi.** \n <a:up:794990618652442624> **Sebep : ${sebep} ${sebepp} ${sebeppp}**\n <a:hyq:794637845255421953> __**Botu Reddeden Yetkili :**__ ${message.author} - **${message.author.tag}**`)
  
  
  message.channel.send(`<a:onay:794638422492315680> **Başarıyla botu reddettiniz.**`).then(msg => msg.delete(10000))
};//Atlantic Code'ye Aittir.

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-reddet', 'reddet','ret','r','red'],
  permLevel: 3
};//Atlantic Code'ye Aittir.

exports.help = {
  name: 'botreddet', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botonayla <bot ismi>'//Atlantic Code Adına Sefa MERT Tarafından Geliştirilmiştir
};6