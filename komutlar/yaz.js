const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın!');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
     .setTitle('**')
    .setDescription(`\`\`\`js${mesaj}\`\`\``)
    .setFooter("Atlantic Code™ | Kod Paylaşım")
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