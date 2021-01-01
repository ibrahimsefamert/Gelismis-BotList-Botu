const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (bot, message, args, tools) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "i/";
  const embed = new Discord.RichEmbed()
    .setDescription(`Bot sürümü; **v1.0**, Prefix: **${prefix}**, Dil: **Türkçe**`)
    .addField(
      `Davetler`,
      `\`davet-kanal\`, \`davet-kanal-sıfırla\`, \`davet-oluştur\`, \`bot-davet\``
    )
    .addField(
      `Bot`,
      `\`bot-bilgi\`, \`yapımcı\`,\`say\`, \`ping\`, \`avatar\`, \`top20\`, \`davet-oluştur\`, \`ailemiz\``
    )
    .addField(
      `Moderasyon`,
      `\`ban\`, \`kick\`, \`kanal-kilit\`, \`unban\`, \`mute\`, \`takma-ad\`, \`sil\`, \`yaz\`, \`uyar\``
    )
    
    
  
    .addField(
      `Sistem`,
      `\`otorol\`, \`otorol-sıfırla\`, \`otorol-mesaj\`, \`otorol-mesaj-sıfırla\`, \`sayaç\`, \`sayaç-sıfırla\`, \`ever-engel\`, \`sa-as\`, \`ototag\`, \`ototag-isim\`, \`ototag-sıfırla\`, \`hg-bb\``
    )

    .setColor("BLACK")
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"],
  permLevel: 0
};

exports.help = {
  name: "yardım"
};
