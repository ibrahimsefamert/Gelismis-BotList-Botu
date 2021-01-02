const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın!');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`${mesaj} `)
    return message.channel.sendEmbed(embed);
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yaz', 'y'],
  permLevel: 0
};

exports.help = {
  name: "yaz",
  description: "Bot yazı yazar.",
  usage: "yaz"
}; 