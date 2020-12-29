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

  let hedef = args[0];
  let kanal = message.mentions.channels.first();
  if (!hedef) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(`Lütfen bir hedef ve Kanal belirtiniz!`)
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("BLACK")
    );
  }
  
  if(hedef < message.guild.memberCount){
        return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(`Bu hedefi zaten aşmışsınız!`)
          .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("BLACK")
    );
  }
  if (!kanal) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(`Lütfen bir kanal belirtiniz!`)
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("BLACK")
    );
  }
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(
      `Sayaç kanalı; ${kanal}\nHedefi; ${hedef} olarak ayarlandı!`
    )
  .setFooter(bot.user.username, bot.user.avatarURL)
  message.channel.send(embed);

  db.set(`sayaçhedef_${message.guild.id}`, hedef);
  db.set(`sayaçkanal_${message.guild.id}`, kanal.id);
};

module.exports.conf = {
  aliases: ["sayaç-ayarla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "sayaç",
  description: "sayaç",
  usage: "sayaç"
};
