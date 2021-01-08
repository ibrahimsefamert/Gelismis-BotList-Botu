  const Discord = require('discord.js');


  exports.run = function(client, message, args) {
  
  if (!message.member.roles.has("BOT-KONTROL-ROL-İD")) return message.channel.send(`**Bu komutu kullanmnız için yetkiniz yetmiyor.**`);

	let sefamert = args[0]
  let zaman = args[1]
  let kanal = "KANAL-İD" // onaylama reddetme kanalı
	let atlanticode = "KANAL-İD" // bot eklendi / onaylandı / reddedildi kanalı
	
  if (message.channel.id !== kanal) return message.channel.send(`**Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.**`).then(msg => msg.delete(10000))
  if (!sefamert) return message.channel.send(`**Botun idsini yazmalısın.**`).then(msg => msg.delete(10000))
  if (!zaman) return message.channel.send(`**Gün sayısı belirtmelisin.**`).then(msg => msg.delete(10000))
 
  message.delete()

	client.channels.get(atlanticode).send(`<@${sefamert}> **adlı bot kapalıdır.** **__${zaman}__** **günden fazla kapalı kalırsa atılacakdır!** \n **Botun geliştiricisinin durumu düzeltmesi önemle rica olunur.**  \n <a:hyq:794637845255421953> **Botla ilgili bir maruziyetiniz varsa <@794543488808910858>'e yazabilirsiniz.**`);
	message.channel.send(`**Başarıyla botu sahibine bildirdiniz.**`).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-kapalı', 'kapalı','k'],
  permLevel: 0
};

exports.help = {
  name: 'botkapalı', 
  description: "Sunucuya eklenen botu uyarır.",
  usage: 'botkapalı <bot-id> <gün>'
};