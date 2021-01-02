const Discord = require('discord.js');
let owner = "79454348880891085"


exports.run = function(client, message, args) {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xD97634)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('<a:unlem:794638042484441170> Uyarı <a:unlem:794638042484441170>', '`sil` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    const botunmesajyonet = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('<a:unlem:794638042484441170> Uyarı <a:unlem:794638042484441170>', 'Mesajları silebilmen için `Mesajları Yönet` yetkisine sahip olmalısın.')
    return message.author.sendEmbed(botunmesajyonet);
  }
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
    const sohbetsilindi = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .addField('**Eylem; **', 'Mesaj silme')
    .addField('**Mesajları Silen Yetkili; **', message.author.username)
    .addField('**Sonuç;**', `Başarılı`)
    .addField('**Silinen Mesaj Sayısı;**', + messagecount)
    .setFooter('Atlantic Code Mesaj Silme')
    return message.channel.sendEmbed(sohbetsilindi).then(msg => msg.delete(5000));
    console.log("**Mesajlar " + message.member + " tarafından silindi! **").then(msg => msg.delete(5000));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil','uçur'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};