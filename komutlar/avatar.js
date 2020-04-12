const Discord = require('discord.js');
exports.run = function(client, message) {
  
  var user = message.mentions.users.first() || message.author;
  
  const webAttachment = new Discord.Attachment(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`)
  message.channel.send(webAttachment)
};
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};
exports.help = {
  name: 'avatar', 
  description: 'Avatarınızı gönderir.',
  usage: 'avatar'
};
