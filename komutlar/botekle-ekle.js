const Discord = require('discord.js');


exports.run = function(client, message, args) {

	let botid = args[0]
	let prefix = args[1]
  let basvuru = "795020393827794984"// başvurunun gideceği kanal
	let kanal = "795015414379839488" // başvurunun yapılacağı kanal
  let log = "795015559921008650" // bot eklendi / onaylandı / reddedildi kanalı
	
  if (message.channel.id !== kanal) return message.channel.send(`<a:unlem:794638042484441170> **Botunuz için sadece <#${kanal}> kanalında başvuruda bulunabilirsiniz.**`).then(msg => msg.delete(10000))
	if (message.channel.id == kanal) {
  if (!botid) return message.channel.send(`<a:unlem:794638042484441170>  **Botunun idsini yazmalısın.** \n **Örnek :** \`\`!botekle <bot-id> <bot-prefix>\`\``).then(msg => msg.delete(10000))
  if (!prefix) return message.channel.send(`<a:unlem:794638042484441170>  **Botunun prefixini yazmalısın.** \n **Örnek :** \`\`!botekle <bot-id> <bot-prefix>\`\``).then(msg => msg.delete(10000))
  
  message.delete()
  const embed = new Discord.RichEmbed()
  .setColor("ff0000")
  .setDescription(`<a:tik:794989992296054856> [Botu Test İçin Ekle](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`, true)
  .setTitle("<a:kirmizitac:794638228782055474>  Atlantic BotList ™  <a:kirmizitac:794638228782055474>")
  .addField("<a:parlayandeveloper:794989633385660426> Botun Geliştiricisinin Adı", message.author.tag )
  .addField("<a:ucgenler:794989953934688296> Botun Geliştiricisinin İdsi", message.author.id)
  .addField("<a:donenelmas:794639977077145602> Botun İdsi", botid)
  .addField("<a:loading:794639886862516244> Botun Prefixi",prefix)

  client.channels.get(basvuru).send(embed)
 client.channels.get(basvuru).send(`<@795284915553304596>`)
  client.channels.get(log).send(`<:bekliyor:794990233036783657>  ${message.author} **adlı geliştiricinin; <@${botid}> adlı, __${botid}__ idli botu inceleme sırasına alındı.** \n <a:yukleniyor:794639903669092372> **Tahmini İncelenme Süresi :** __**1-2 saat**__`)
  message.channel.send(`<a:onay:794638422492315680> **${message.author}, botunuz başarıyla inceleme sırasına alınmıştır. Bizimle çalıştığınız için teşekkürler.**`).then(msg => msg.delete(10000))
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-ekle','ekle'],
  permLevel: 0
};

exports.help = {
  name: 'botekle', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};