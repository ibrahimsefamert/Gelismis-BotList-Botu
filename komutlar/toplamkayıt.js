const Discord = require("discord.js");
const db = require('quick.db');


exports.run = async (client, message, args) => {//splashen
  let yetkili = message.author
let erkek = db.fetch(`erkek_${message.author.id}_${message.guild.id}`)
let kız = db.fetch(`kız_${message.author.id}_${message.guild.id}`)
let toplam = erkek+kız
var embed = new Discord.RichEmbed()
.setTitle(`• \`Kayıt Bilgileri\``)

.setDescription(`

• __ **Yetkili :**__  ${yetkili}

• __ **Yetkili :**__  ${yetkili}

• __ **Yetkili :**__  ${kız}

• __ **Yetkili :**__  ${erkek}



`)
.setThumbnail(yetkili.avatarURL)
.setImage('https://cdn.discordapp.com/attachments/620989964104237077/766391664163029012/RDF_Barrinha-1-2-1-1-1-1-1-1.gif')
message.reply(embed)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'toplamkayıt'
};//splashen