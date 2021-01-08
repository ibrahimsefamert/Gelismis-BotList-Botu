  const Discord = require('discord.js');


  exports.run = function(client, message, args) {

  if (!message.member.roles.has("BOT-KONTROL-ROL-İD")) return message.channel.send(`**Bu komutu kullanmnız için yetkiniz yetmiyor.**`);

  let sefamert = args[0]
  let sebep1 = args[1]
  let sebep2 = args[2]
  let sebep3 = args[3]
  let kanal = "KANAL-İD" // onaylama reddetme kanalı
  let atlanticode = "KANAL-İD" // bot eklendi / onaylandı / reddedildi kanalı
  
if (message.channel.id !== kanal) return message.channel.send(`**Bildirilen bir botu sadece <#${kanal}> kanalında uyarabilirsin.**`).then(msg => msg.delete(10000))
if (!sefamert) return message.channel.send(`**Botun idsini yazmalısın.**`).then(msg => msg.delete(10000))
if (!sebep1) return message.channel.send(`**3 kelimelik sebep belirtmelisin.**`).then(msg => msg.delete(10000))

message.delete()

client.channels.get(atlanticode).send(`<@${sefamert}> **adlı bot, __${sebep1}__ __${sebep2}__ __${sebep3}__ sebebiyle uyarılmııştır.** \n **Botun geliştiricisinin konuyla ilgili daha dikkatli olması rica olunur.**`);
message.channel.send(`**Başarıyla botu uyardınız.**`).then(msg => msg.delete(10000))
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['bot-uyar'],
permLevel: 0
};

exports.help = {
name: 'botuyar', 
description: "Sunucuya eklenen botu uyarır.",
usage: 'botkapalı <bot-id> <gün>'
};