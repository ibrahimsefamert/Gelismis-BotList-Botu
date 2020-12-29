const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "i/";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
      .setColor("BLACK")
    .setFooter(bot.user.username, bot.user.avatarURL)

    message.channel.send(embed);
    return;
  }

  let kontrol = await db.fetch(`otokanal_${message.guild.id}`);

  if (!kontrol) {
    const embed = new Discord.RichEmbed()
        .setDescription(`Otorol zaten ayarlanmamış!`)
        .setColor("BLACK")
    .setFooter(bot.user.username, bot.user.avatarURL)
     message.channel.send(embed);
    return
  }
else{
  message.channel.send(
    new Discord.RichEmbed()
      .setDescription(`Otorol başarıyla sıfırlandı!`)
      .setColor("BLACK")
    .setFooter(bot.user.username, bot.user.avatarURL)
  );
  db.delete(`otorol_${message.guild.id}`);
  db.delete(`otokanal_${message.guild.id}`);
}
};

module.exports.conf = {
  aliases: ["otorol-sıfırla", "otorol sıfırla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "oto-rol-sıfırla",
  description: "otorol-sıfırla",
  usage: "oto-rol-sıfırla"
};
