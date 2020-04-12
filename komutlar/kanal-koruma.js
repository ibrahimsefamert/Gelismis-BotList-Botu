const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "?";
let kanal = message.mentions.channels.first()
if(!kanal){
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
  .setFooter(client.user.username, client.user.avatarURL)
  .setDescription(`Lütfen log kanalını etiketleyiniz!`)
  message.channel.send(embed)
  return
}
  db.set(`kkk_${message.guild.id}`, kanal.id)
  const embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setFooter(client.user.username, client.user.avatarURL)
  .setDescription(`Log kanalı; ${kanal} olarak ayarlandı!`)
  message.channel.send(embed)
  return
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kanal-k"],
  permLevel: 3,
  kategori: "sunucu"
};

exports.help = {
  name: "kanal-koruma",
  description: "Rol koruma",
  usage: "kanal-koruma"
};