const Discord = require('discord.js');//Atlantic Code'ye Aittir.


exports.run = function(client, message, args) {
  
	let botid = args[0]
  let sahip = args[1]
  let prefix = args[2]
  let kanal = "KANAL-İD" // onaylama reddetme kanalı
	let log = "KANAL-İD" // bot eklendi / onaylandı / reddedildi kanalı
  let botsahipleri = "KANAL-İD" // bot sahiplerinin gösterileceği kanal
  
	if (message.channel.id !== kanal) return message.channel.send(`**<a:unlem:794638042484441170> Başvuruda bulunulmuş bir botu yalnızca <#${kanal}> kanalında onaylayabilirsin.**`).then(msg => msg.delete(5000))
	if (!botid) return message.channel.send(`<a:unlem:794638042484441170> **Botun idsini yazmalısın.**`).then(msg => msg.delete(5000))
  if (!sahip) return message.channel.send(`<a:unlem:794638042484441170> **Botun sahibinin idsini yazmalısın.**.`).then(msg => msg.delete(5000))
   if (!prefix) return message.channel.send(`<a:unlem:794638042484441170> **Botun prefixini yazmalısın.**.`).then(msg => msg.delete(5000))
  message.delete()
  const embed = new Discord.RichEmbed()
  .setColor("ff0000")
  .setTitle("<a:kirmizitac:794638228782055474>  Atlantic Code & BotList ™")
  .addField("<a:tik:794989992296054856> Botu Sunucuna Ekle", "[0 Perm Ekle](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0) & [8 Perm Ekle](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8)")
  .addField("<a:parlayandeveloper:794989633385660426> Botun Geliştiricisinin İdsi", sahip)
  .addField("<a:ucgenler:794989953934688296> Botun İdsi", botid)
  .addField("<a:donenelmas:794639977077145602> Botun Prefixi", prefix)
  .addField("<a:down:794990602277093406> Botu Onaylayan Yetkili", message.author.tag )
  .setImage("https://cdn.discordapp.com/attachments/794721957677367356/795212264214233098/20200806_002234.jpg")
  .setThumbnail(message.author.avatarURL)
  .setTimestamp()
  .setFooter("Bu bot, Sefa MERT tarafından geliştirlmiştir.",client.user.avatarURL)
  client.channels.get(botsahipleri).send(embed)
  
  client.channels.get(log).send(`<:onaylandi:794990256537075723> <@${sahip}> **adlı geliştiricinin; <@${botid}> adlı, __${botid}__ idli botu onaylandı.** \n <a:gul:794639948409339914> **Bizimle çalıştığınız için teşekkürler, <@${sahip}>!**\n <a:hyq:794637845255421953> __**Botu Onaylayan Yetkili :**__ ${message.author} - **${message.author.tag}**`)
  
  
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