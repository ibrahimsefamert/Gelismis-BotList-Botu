const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "?";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
      .setColor("BLACK")
.setFooter(bot.user.username, bot.user.avatarURL)
    message.channel.send(embed);
    return;
  }

  let role =
    message.mentions.roles.first() ||
    message.guild.roles.find(rol => rol.name === args[0]);
  let kanal = message.mentions.channels.first();
  if (!role) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(`Lütfen bir rol belirtiniz!`)
        .setColor("BLACK")
      .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }
  if (!kanal) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(`Lütfen bir kanal belirtiniz!`)
        .setColor("BLACK")
      .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`Otorol kanalı; ${kanal}\nRolü; ${role} olarak ayarlandı!`)
  .setFooter(bot.user.username, bot.user.avatarURL)
  message.channel.send(embed);

  db.set(`otokanal_${message.guild.id}`, kanal.id);
  db.set(`otorol_${message.guild.id}`, role.id);
};

module.exports.conf = {
  aliases: ["otorol"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "oto-rol",
  description: "oto-rol",
  usage: "oto-rol"
};
