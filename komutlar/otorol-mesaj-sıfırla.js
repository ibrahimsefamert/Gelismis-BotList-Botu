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

  let msj = await db.fetch(`otorolmsj_${message.guild.id}`)
  if (!msj) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(
          `Zaten otorol mesajı ayarlanmamış!`
        )
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("BLACK")
    );
  }

  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
  .setFooter(bot.user.username, bot.user.avatarURL)
    .setDescription(`Otorol mesajı sıfırlandı!`);
  message.channel.send(embed);

  db.delete(`otorolmsj_${message.guild.id}`);
};

module.exports.conf = {
  aliases: ["otorol-mesaj-sıfırla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "oto-rol-mesaj-sıfırla",
  description: "otorol-mesaj-sıfırla",
  usage: "oto-rol-mesaj-sıfırla"
};
