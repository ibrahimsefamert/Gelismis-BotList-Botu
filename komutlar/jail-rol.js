const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
   var başarılı = ['**İŞTE BU!** <a:tik1:711758338282749963>', '**SÜPER!** <a:tik1:711758338282749963>', '**NASIL YAPTIN BUNU?!** <a:tik1:711758338282749963>', '**MÜKEMMEL!** <a:tik1:711758338282749963>', '**SEVDİM BUNU!** <a:tik1:711758338282749963>', '**ŞİMDİ OLDU!** <a:tik1:711758338282749963><a:no1:711758342347030558><a:no1:711758342347030558><a:no1:711758342347030558>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['**TÜH!** <a:no1:711758342347030558><a:no1:711758342347030558><a:no1:711758342347030558>', '**OLMADI BU!** <a:no1:711758342347030558><a:no1:711758342347030558>', '**HAY AKSİ!** <a:no1:711758342347030558>', '**HADİ ORADAN!** <a:no1:711758342347030558>', '**OLMADI YA!** <a:no1:711758342347030558>', '**BÖYLE OLMAZ?!** <a:no1:711758342347030558>', '**HADİ YA!** <a:no1:711758342347030558>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**${ayarlar.prefix}jail-rol ayarla/sıfırla** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
if (!args[0]) return message.reply(`Sistemi kullanabilmek için, !mute-rol ayarla/sıfırla @rol yazmalısın.\n`)
   
  
  if (args[0] == 'ayarla') {
  
  let rol = message.mentions.roles.first() || message.guild.roles.find(c => c.name === args[1].join(' '))
  if (!rol) return message.channel.send(x2 + ` Bir rol etiketle.`)
  
  db.set(`jailrol_${message.guild.id}`, rol.id)
  message.channel.send(x + ` Mute rolü ${rol} olarak ayarlandı.`)
  } 
  

  if (args[0] == 'sıfırla') {
    db.delete(`jailrol_${message.guild.id}`)
    message.channel.send(x + ` Mute rolü başarıyla sıfırlandı.`)
  }
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['muterol'],
 permLevel: 0
};

exports.help = {
 name: 'ceza-rol',
 description: 'Birisi jaile atılınca hangi role sahip olacağını ayarlarsınız.',
 usage: 'mute-rol ayarla/sıfırla @rol',
 kategori: '**MODERASYON**',
 permLvl: '**SUNUCUYU YÖNET**'
};