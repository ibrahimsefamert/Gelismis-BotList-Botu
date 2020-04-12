const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "?";
  let kanal = await db.fetch(`kkk_${message.guild.id}`)
  if(!kanal){
    const embed = new Discord.RichEmbed()
  .setFooter(client.user.tag, client.user.avatarURL)
  .setDescription(`Kanal koruma log kanalı zaten ayarlanmamış!`)
  message.channel.send(embed)
  return
  }
  db.delete(`kkk_${message.guild.id}`)
  const embed = new Discord.RichEmbed()
  .setFooter(client.user.tag, client.user.avatarURL)
  .setDescription(`Kanal koruma log kanalı sıfırlandı!`)
  message.channel.send(embed)
  return
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kanal-k-s"],
  permLevel: 3,
  kategori: "sunucu"
};

exports.help = {
  name: "kanal-koruma-sıfırla",
  description: "kanal-koruma-sıfırla",
  usage: "kanal-koruma-sıfırla"
};