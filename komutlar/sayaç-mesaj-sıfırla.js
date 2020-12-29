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
let seç = args[0]
if(!seç){
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`Lütfen sıfırlanacak mesajı belirtiniz (hg veya bb)!`)
    .setFooter(bot.user.username, bot.user.avatarURL)
  message.channel.send(embed);
    return
}
if(seç == "hg"){
  let msj = await db.fetch(`sayaçmsjhg_${message.guild.id}`)
  if(!msj){
      const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`Hoşgeldin Sayaç Mesajı zaten ayarlanmamış!`)
    .setFooter(bot.user.username, bot.user.avatarURL)
  message.channel.send(embed);
    return
  }
  db.delete(`sayaçmsjhg_${message.guild.id}`)
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`Hoşgeldin Sayaç Mesajı sıfırlandı!`)
    .setFooter(bot.user.username, bot.user.avatarURL)
  message.channel.send(embed);
    return
}
  if(seç == "bb"){
  let msj = await db.fetch(`sayaçmsjbb_${message.guild.id}`)
  if(!msj){
      const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`Görüşürüz Sayaç Mesajı zaten ayarlanmamış!`)
    .setFooter(bot.user.username, bot.user.avatarURL)
  message.channel.send(embed);
    return
  }
  db.delete(`sayaçmsjbb_${message.guild.id}`)
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`Görüşürüz Sayaç Mesajı sıfırlandı!`)
    .setFooter(bot.user.username, bot.user.avatarURL)
  message.channel.send(embed);
    return
}
  
  

};

module.exports.conf = {
  aliases: ["sayaç-mesaj-sıfırla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "sayaç mesaj sıfırla",
  description: "sayaç",
  usage: "sayaç"
};
