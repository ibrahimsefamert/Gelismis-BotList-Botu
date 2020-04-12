const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "?";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
      .setColor("BLACK");

    message.channel.send(embed);
    return;
  }
let role = await db.fetch(`ototag_${message.guild.id}`);
  if (!role) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(`Ototag zaten ayarlanmamış!`)
        .setColor("BLACK")
    );
  }

  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`Ototag başarıyla sıfırlandı!`);
  message.channel.send(embed);

  db.delete(`ototagk_${message.guild.id}`);
  db.delete(`ototag_${message.guild.id}`);
    db.delete(`ototagmsj_${message.guild.id}`);
};

module.exports.conf = {
  aliases: ["ototag sıfırla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "oto-tag-sıfırla",
  description: "Etiketlenen şahsa etiketlenen rolü alırsınız.",
  usage: "oto-tag"
};
