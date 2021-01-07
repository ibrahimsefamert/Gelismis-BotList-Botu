const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.channel.send(`https://dummyimage.com/300x200/36393f/ffffff.png&text=Ping:`+client.ping)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["ping-ölç"],
 permLevel: 0
};

exports.help = {
 name: 'ping',
 description: 'Botun Pingi Hesaplar V eatar.',
 usage: 'ping'
};