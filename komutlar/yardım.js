const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (bot, message, args, tools) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "?";
  const embed = new Discord.RichEmbed()
    .setDescription(`Bot sürümü; **v0.1**, Prefix: **${prefix}**, Dil: **tr**`)
    .addField(
      `Davetler`,
      `\`davet-kanal\`, \`davet-kanal-sıfırla\`, \`davet-ekle\`, \`davet-sıfırla\`, \`davet-sil\`, \`davet-stokla\`, \`davetlerim\`, \`davet-oluştur\``
    )
    .addField(
      `Bot`,
      `\`bot-bilgi\`, \`yapımcı\`, \`davet\`, \`üye-durum\`, \`ping\`,\`avatar\`,\`top20\``
    )
    .addField(
      `Moderasyon`,
      `\`ban\`, \`kick\`, \`kanal-kilit\`, \`unban\`, \`mute\`, \`takma-ad\`, \`yavaş-mod\`, \`temizle\``
    )
    .addField(
      `Sistem`,
      `\`otorol\`, \`otorol-sıfırla\`, \`otorol-mesaj\`, \`otorol-mesaj-sıfırla\`, \`sayaç\`, \`sayaç-sıfırla\`, \`sayaç-mesaj-hg\`, \`sayaç-mesaj-bb\`, \`ever-engel\`, \`sa-as\`, \`ototag\`, \`ototag-isim\`, \`oto-tag-sıfırla\`, \`hg-bb\``
    )
    .addField(
      `Sistem2`,
      `\`kanal-koruma\`, \`kanal-koruma-sıfırla\``
    )

    .setColor("BLACK")
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y"],
  permLevel: 0
};

exports.help = {
  name: "yardım"
};
