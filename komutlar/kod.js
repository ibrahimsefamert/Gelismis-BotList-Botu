const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kod = args.slice(0).join(' ');
    if (kod.length < 1) return message.reply('<a:unlem:794638042484441170>**Yanlış kullanım** \n <a:gul:794639948409339914> **Doğru Kullanım :** ``+kod <kodunuz>``');
    let kodadı = args.slice(0).join(' ');
   if (kodadı.length < 1) return message.reply('Lütfen Kodun Adını Giriniz');
   let kodaçk = args.slice(0).join(' ');
  if (kodadı.length < 1) return message.reply('Lütfen Kodun Açıklamasını Giriniz');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
     .setTitle('**<a:tr:794638011320107008>  Atlantic Code ™ İyi Kodlamalar Diler | Developed By Sefa MERT  <a:tr:794638011320107008>**')
    .setDescription(`\`\`\`${kod}\`\`\``)
    .setTimestamp()
    .setFooter(`Kod, ${message.author.username} Tarafından Eklendi`, message.author.avatarURL)
    
    return message.channel.sendEmbed(embed);
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k', 'kodpaylaş'],
  permLevel: 0
};

exports.help = {
  name: "kod",
  description: "Bot yazı yazar.",
  usage: "yaz"
}; 