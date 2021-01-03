const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kod = args.slice(0).join(' ');
    if (kod.length < 1) return message.reply('<a:unlem:794638042484441170>**Yanlış kullanım** \n <a:gul:794639948409339914> **Doğru Kullanım :** ``+yaz <yazınız>``');
    let kodadı = args.slice(0).join(' ');
   if (kodadı.length < 1) return message.reply('Lütfen Kodun Adını Giriniz');
   let kodaçk = args.slice(0).join(' ');
  if (kodadı.length < 1) return message.reply('Lütfen Kodun Açıklamasını Giriniz');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor('RED')
    .setDescription(`${kod}`)
    .setTimestamp()
    .setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL)
    
    return message.channel.sendEmbed(embed);
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y', 'yazı'],
  permLevel: 0
};

exports.help = {
  name: "yaz",
  description: "Bot yazı yazar.",
  usage: "yaz"
}; 