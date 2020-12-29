const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "i/";
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
      .setColor("BLACK");

    message.channel.send(embed);
    return;
  }

  if (!args[0]) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTitle("Hg-Bb sistemi!")
      .setDescription(`Hatalı kullanım! örnek: ${prefix}hg-bb aç veya kapat`);

    message.channel.send(embed);
    return;
  }
  let küfürg = await db.fetch(`dm_${message.guild.id}`);
  if (args[0] == "aç") {
    if (küfürg) {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setTitle("Hg-Bb sistemi!")
        .setDescription("Görünüşe göre hg-bb zaten aktif!");

      message.channel.send(embed);
      return;
    } else {
      db.set(`dm_${message.guild.id}`, "acik");
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setTitle("Hg-Bb sistemi!")
        .setDescription("hg-bb başarıyla açıldı!");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`dm_${message.guild.id}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTitle("Hg-Bb sistemi!")
      .setDescription("hg-bb başarıyla kapandı!");

    message.channel.send(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["hgbb"],
  permLevel: 2,
  kategori: "sunucu"
};

exports.help = {
  name: "hg-bb",
  description: "saasdasds",
  usage: "hg-bb"
};
