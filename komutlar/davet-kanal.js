  const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "?";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription("```Ne yazık ki bu komutu kullanmaya yetkin yok.```")
    .setFooter(bot.user.username, bot.user.avatarURL)
      .setColor("BLACK");

    message.channel.send(embed);
    return;
  }

  let kanal = message.mentions.channels.first();

  if (!kanal) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription("Lütfen bir kanal belirtiniz!")
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("BLACK")
    );
  }
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
  .setFooter(bot.user.username, bot.user.avatarURL)
    .setDescription(`Davet kanalı; ${kanal} olarak ayarlandı!`);
  message.channel.send(embed);

  db.set(`davetkanal_${message.guild.id}`, kanal.id);
};

module.exports.conf = {
  aliases: ["davetkanal"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-kanal",
  description: "davet-kanal",
  usage: "davet-kanal"
};
