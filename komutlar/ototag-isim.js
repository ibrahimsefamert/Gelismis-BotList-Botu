const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "i/";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
      .setColor("BLACK");

    message.channel.send(embed);
    return;
  }

  let msj = args.slice(0).join(" ");
  if (!msj) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(
          `Lütfen bir isim belirtiniz!`
        )
        .setColor("BLACK")
    );
  }

  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`Ototag ismi; ${msj} olarak ayarlandı!`);
  message.channel.send(embed);

  db.set(`ototagmsj_${message.guild.id}`, msj);
};

module.exports.conf = {
  aliases: ["ototag-isim"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "oto-tag-isim",
  description: "Etiketlenen şahsa etiketlenen rolü alırsınız.",
  usage: "oto-tag"
};
