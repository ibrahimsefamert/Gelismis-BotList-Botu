const Discord = require('discord.js');//Atlantic Code'ye Aittir.


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:unlem:794638042484441170> **Bu komutu kullanmnız için yetkiniz yetmiyor.**`);
	let botid = args[0]
  let sahip = args[1]
  let prefix = args[2]
  let kanal = "795039723793285160" // onaylama reddetme kanalı
	let log = "795015559921008650" // bot eklendi / onaylandı / reddedildi kanalı
  let botsahipleri = "795019977173893130" // bot sahiplerinin gösterileceği kanal
  
	if (message.channel.id !== kanal) return message.channel.send(`**<a:unlem:794638042484441170> Başvuruda bulunulmuş bir botu yalnızca <#${kanal}> kanalında onaylayabilirsin.**`).then(msg => msg.delete(5000))
	if (!botid) return message.channel.send(`<a:unlem:794638042484441170> **Botun idsini yazmalısın.**`).then(msg => msg.delete(5000))
  if (!sahip) return message.channel.send(`<a:unlem:794638042484441170> **Botun sahibinin idsini yazmalısın.**.`).then(msg => msg.delete(5000))
   if (!prefix) return message.channel.send(`<a:unlem:794638042484441170> **Botun prefixini yazmalısın.**.`).then(msg => msg.delete(5000))
  message.delete()
  const embed = new Discord.RichEmbed()
  .setColor("ff0000")
  .setTitle("<a:kirmizitac:794638228782055474>  Atlantic Code & BotList ™")
  
  .addField("<a:parlayandeveloper:794989633385660426> Botun Geliştiricisinin İdsi", sahip)
  .addField("<a:ucgenler:794989953934688296> Botun İdsi", botid)
  .addField("<a:donenelmas:794639977077145602> Botun Prefixi", prefix)
  .addField("<a:down:794990602277093406> Botu Onaylayan Yetkili", message.author.tag )
  .setImage("https://cdn.discordapp.com/attachments/794721957677367356/795212264214233098/20200806_002234.jpg")
  .setThumbnail(message.author.avatarURL)
  .setTimestamp()
  .setFooter("Bu bot, Sefa MERT tarafından geliştirlmiştir.",client.user.avatarURL)
  client.channels.get(botsahipleri).send(embed)

	client.channels.get(log).send(`<:tsl_onaylandi:769298286623981590> <@${sahip}> **adlı geliştiricinin; <@${botid}> adlı, __${botid}__ idli botu onaylandı.**\n __*Botu Onaylayan Yetkili :*__ ${message.author} - **${message.author.tag}**`)
  message.channel.send(`<a:onay:794638422492315680> **Başarıyla botu onayladınız.**`).then(msg => msg.delete(10000))
};//Atlantic Code'ye Aittir.

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-onayla', 'onayla','onay','o'],
  permLevel: 3
};//Atlantic Code'ye Aittir.

exports.help = {
  name: 'botonayla', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'//Atlantic Code Adına Sefa MERT Tarafından Geliştirilmiştir
};6