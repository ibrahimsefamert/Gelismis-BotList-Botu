const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(" ");
  const embed = new Discord.RichEmbed()
    .setAuthor("")
    .setColor("RANDOM")
    .setDescription(`**TAGIMIZ:** YAKINDA`);
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tagne"],
  permLevel: 0
};

exports.help = {
  name: "tag",
  description: "Sunucu tagını gösterir..",
  usage: "tag"
};
