const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "?";
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  if (message.channel.type !== "text") return;
  const limit = args[0] ? args[0] : 0;
  if (!limit) {
    var embed = new Discord.RichEmbed()
      .setDescription(`Lütfen limiti giriniz. Örnek: ${prefix}slowmode 5`)
      .setColor("BLACK")
      .setTimestamp()
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send({ embed });
    return;
  }

  let number = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20"
  ];

  if (!number.some(word => message.content.includes(word))) {
    {
      const embed = new Discord.RichEmbed()
        .setDescription(`Süre limiti sadece **Sayı** olabilir`)
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL);

      message.channel.send(embed);
      return;
    }
  }

  if (limit > 20) {
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setDescription("Süre limiti maksimum **20** saniye olabilir.")
        .setColor("BLACK")
    );
  }
  message.channel.sendEmbed(
    new Discord.RichEmbed()
      .setDescription(
        `Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`
      )
      .setFooter(client.user.username, client.user.avatarURL)
      .setColor("BLACK")
  );
  var request = require("request");
  request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
      rate_limit_per_user: limit
    },
    headers: {
      Authorization: `Bot ${client.token}`
    }
  });
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yavaş-mod"],
  permLevel: 1,
  kategori: "moderasyon"
};

exports.help = {
  name: "slowmode",
  description: "Sohbete yazma sınır (süre) ekler.",
  usage: "slowmode [1/20]"
};
