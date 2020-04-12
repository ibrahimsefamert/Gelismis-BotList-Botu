const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "?";

  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`Davetleriniz stoklandı!`)
  .setFooter(bot.user.username, bot.user.avatarURL)
  message.channel.send(embed);
//HAVASI YOK BUNUN
};

module.exports.conf = {
  aliases: ["davetstokla"],
  permLevel: 0,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-stokla",
  description: "davet-stokla",
  usage: "davet-stokla"
};
