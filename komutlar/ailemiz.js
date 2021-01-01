const Discord = require("discord.js")
exports.run = (bot, message) => {
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}** - ÜYE SAYISI : **${guild.memberCount}**`);
      embed.setColor('BLACK')
      embed.setTitle('Ailemiz;')
      embed.setDescription(`Büyük bir ailedeyiz ! Ailemde **${bot.guilds.size}** kadar sunucu var !`)
      embed.setFooter(`**${guild.name}**, ${guild.avatarURL}`)
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['goster', 'g'],
  permLevel: 4
};

exports.help = {
  name: "ailemiz",
  description: "Shows all the servers the bot is in.",
  usage: "ailemiz"
}; 