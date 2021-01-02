  const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:unlem:794638042484441170> **Bu komutu kullanmnız için yetkiniz yetmiyor.**`);
	let botisim = args[0]
  let sahip = args[1]
  let zaman = args[2]
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
	if (!botisim) return message.channel.send(`<a:unlem:794638042484441170> **Botun idsini yazmalısın.**`).then(msg => msg.delete(10000))
    if (!sahip) return message.channel.send(`<a:unlem:794638042484441170> **Botun sahibinin idsini yazmalısın.**`).then(msg => msg.delete(10000))
  if (!zaman) return message.channel.send(`<a:unlem:794638042484441170> **Gün sayısı belirtmelisin.**`).then(msg => msg.delete(10000))
  message.delete()
		client.channels.get(log).send(`**<a:barcode_offline:768558323238567986> <@${botisim}> adlı bot kapalıdır. ${zaman} günden fazla kapalı kalırsa atılacakdır! <@${sahip}> adlı geliştiricinin durumu düzeltmesi önemle rica olunur.** ** \n Not: Botla ilgili bir maruziyetiniz varsa <@794543488808910858>'a yazabilirsiniz.**`);
		message.channel.send(`<a:onay:794638422492315680> **Başarıyla Botu Sahibine Bildirdiniz.**`).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-kapalı', 'kapalı'],
  permLevel: 0
};

exports.help = {
  name: 'botkapalı', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};