const Discord = require('discord.js');
 exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
   message.delete();
   let question = args.join(' ');
   let user = message.author.username
   if (!question) return message.channel.send(
     new Discord.MessageEmbed()
     .addField(`:x: **Yazı Yazman Gerek** :x: `)).then(m => m.delete(5000));
     console.log("oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.send(
       new Discord.MessageEmbed()
       .setColor("RED")
       .setThumbnail(client.user.displayAvatarURL())
       .setTimestamp()
       .setFooter('Rache Oylama Sistemi', client.user.displayAvatarURL())
       .addField(`**Oylama**`, `**${question}**`)).then(function(message) {
         message.react('✅');
         message.react('❌');
       });
     };
     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],
  permLevel: 2
};
exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};