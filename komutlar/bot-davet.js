const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`Botu Ekleyin!`, `[Buraya Tıkla](https://discord.com/api/oauth2/authorize?client_id=793425183691767828&permissions=8&scope=bot)`)
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
  name: "bot-davet",
  description: "bot-davet",
  usage: "bot-davet"
};
