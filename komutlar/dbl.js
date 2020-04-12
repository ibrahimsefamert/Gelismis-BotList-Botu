const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const DBL = require("dblapi.js");
  const dbl = new DBL(
    `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjQzNjIyMzMxNDU1ODk3NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTc2MzIwMDMxfQ.fbbZYB4SuE42yGFuvSASSbiYt6XTYi_VcmmyghLo7Fw
`,
    client
  );
  var botcuk = "";
  let mesaj = args.slice(0).join(" ");
  let botcuk2 = message.mentions.users.first() || client.users.get(args[0]);
  let botcuk3 = client.users.find("username", args.slice(0).join(" "));
  if (!botcuk2) {
    botcuk = botcuk3;
  } else {
    botcuk = botcuk3;
  }
  if (!args[0]) return message.channel.send("Lütfen bir bot adı giriniz.");
  if (!botcuk.bot) return message.channel.send("Böyle bir bot yok.");
  dbl.getBot(botcuk.id).then(async bot => {
    const embed = new Discord.RichEmbed()
      .setAuthor(`${bot.username}`, botcuk.avatarURL)
      .setColor("GREEN")
      .addField("BOT Id", bot.id, true)
      .addField("İsim", bot.username, true)
      .addField("Tag", bot.discriminator, true)
      .addField("Sertifika", `${bot.certifiedBot ? "Evet" : "Hayır"}`, true)
      .addField("Açıklama", bot.shortdesc, true)
      .addField("Kütüphane", bot.lib, true)
      .addField("Prefix", bot.prefix, true)
      .addField("Oylar", bot.points || "0", true)
      .addField("Aylık Oylar", bot.monthlyPoints || "0", true)
      .addField("Sunucu sayısı", bot.server_count || "0", true)
      .addField("Kurucu(lar)", `<@${bot.owners.join(">\n<@")}>`, true)
      .addField("Etiket(ler)", `${bot.tags}`, true)
      .addField(
        "Linkler",
        `[Destek Sunucusu](https://discord.gg/${bot.support}) **||** [Github](${bot.github}) **||** [DBL Sayfası](https://discordbots.org/bot/${bot.id})`,
        true
      )
      .setThumbnail(botcuk.avatarURL);
    message.channel.send(embed);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "dbl",
  description: "dbl",
  usage: "dbl"
};
