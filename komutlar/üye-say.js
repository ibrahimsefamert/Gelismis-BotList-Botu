const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  let üyesayi = message.guild.memberCount;
    let botlar = message.guild.members.filter(m => m.user.bot).size;
    let kullanıcılar = üyesayi - botlar;
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`Toplam Kişi`, üyesayi, true)
  .addField(`Toplam Kullanıcı`, kullanıcılar, true)
  .addField(`Botlar`, botlar, true)
  .addField(`Aktif Üyeler`, `${message.guild.members.filter(o => o.presence.status === 'online').size} <a:zap:698820100827906149>`, true)
  .addField(`Boşta Üyeler`, `${message.guild.members.filter(i => i.presence.status === 'idle').size} <a:crescent_moon:698820288707690566>`, true)
  .addField(`Rahatsız Moddaki Üyeler`, `${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size} <a:crossed_swords:698819739744600124>`, true)
  .addField(`Çevrimdışı Üyeler`, `${message.guild.members.filter(off => off.presence.status === 'offline').size} <a:mute:698820700651388958>`, true)
  
  
.setFooter(client.user.username, client.user.avatarURL)

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "üye-say",
  description: "üye-say",
  usage: "üye-say"
};
