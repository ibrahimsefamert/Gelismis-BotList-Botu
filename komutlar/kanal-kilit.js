const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "i/";

  if (!bot.lockit) bot.lockit = [];
  let time = args
    .join(" ")
    .replace(`sn`, `s`)
    .replace(`dk`, `m`)
    .replace(`sa`, `h`)
    .replace(`g`, `d`)
    .replace(`saniye`, `s`)
    .replace(`dakika`, `m`)
    .replace(`saat`, `h`)
  let validUnlocks = ["release", "unlock"];
  if (!time) {
    const embedyazı = new Discord.RichEmbed()
//0x36393E
      .setColor("BLACK")
      .setDescription(
        `Örnek:${prefix} kanal-kilit <Süre>\n**Not: Yazdığınız kanalda bu işlemi yapar!**`
      )
      .setTimestamp()
    .setFooter(bot.user.username, bot.user.avatarURL)
    return message.channel.send(embedyazı);
  }
  if (validUnlocks.includes(time)) {
    message.channel
      .overwritePermissions(message.guild.id, {
        VIEW_CHANNEL: null,
        SEND_MESSAGES: null
      })
      .then(() => {
        const embedyazı = new Discord.RichEmbed()

          .setColor("BLACK")
          .setDescription(`Kanal kilidi açıldı!`)
          .setTimestamp()
        .setFooter(bot.user.username, bot.user.avatarURL)
        return message.channel.send(embedyazı);

        clearTimeout(bot.lockit[message.channel.id]);
        delete bot.lockit[message.channel.id];
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false,
        VIEW_CHANNEL: false
      })
      .then(() => {
        const embedyazı = new Discord.RichEmbed()

          .setColor("BLACK")
          .setDescription(
            `Başarıyla olduğunuz kanal kitlendi!\n**Kilidin açılmasına: ${ms(
              ms(time),
              { long: true }
            )} kadar var!**`
          )
          .setTimestamp()
        .setFooter(bot.user.username, bot.user.avatarURL)

        return message.channel
          .send(embedyazı)
          .then(() => {
            bot.lockit[message.channel.id] = setTimeout(() => {
              message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: null,
                VIEW_CHANNEL: null
              });

              const embedyazı = new Discord.RichEmbed()

                .setColor("BLACK")
                .setDescription(`Başarıyla kanalın kilidi açıldı!`)
                .setTimestamp()
              .setFooter(bot.user.username, bot.user.avatarURL)
              return message.channel
                .send(embedyazı)
                .then()
                .catch(console.error);

              delete bot.lockit[message.channel.id];
            }, ms(time));
          })
          .catch(error => {
            console.log(error);
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kanalkilit"],
  permLevel: 2,
  kategori: "sunucu"
};

exports.help = {
  name: "kanal-kilit",
  description: "Bulunduğunuz kanalı kilitler.",
  usage: "kanal-kilit"
};
