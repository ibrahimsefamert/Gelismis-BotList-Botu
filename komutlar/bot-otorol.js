const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(` Bu komutu kullanabilmek için "\`Üyeleri Yasakla\`" yetkisine sahip olmalısın.`);
 //FroLnek 
let rol = message.mentions.roles.first()
  
if(!rol) return message.channel.send(` Ayarlamam İçin Bir Rol Etiketlemeilisin. 
 Rolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma**
 Örnek Kullanım : f!otorol-bot @rol  
//FroLenk
 Önemli Not!!: Oto Rol Vermem İçin Verilecek Rolün Üstünde Bir Rolüm Olmalı Yoksa Rolü Veremem.`)  


message.channel.send(` Otorol Bot Aktif Edildi 
 '${rol}' Olarak Güncelledim! `) 
db.set(`csbo_${message.guild.id}`, rol.id)  

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["otorol-bot"]
};

exports.help = {
  name: 'oto-rol-bot',
  description: 'oto-rol-ayarla', 
  usage: 'oto-rol-ayarla'
};