const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;

module.exports.run = async (client, message, args) => {
let db = require('quick.db')
let botisim = message.guild.members.get(client.user.id).displayName
let data = await db.fetch(`jailrol_${message.guild.id}`)
if(!data)  return message.channel.send(`**Mute rolünü bulamadım.**`)
let data2 = await db.fetch(`jailyetkilisi_${message.guild.id}`)
if(!data2)  return message.channel.send(`**Mute yetkilisi rolünü bulamadım.**`)
let data3 = await db.fetch(`jailkanal_${message.guild.id}`)
if(!data3)  return message.channel.send(`**Mute kanalını bulamadım.**`)
let rol = message.guild.roles.get(data)
if(!rol) return message.channel.send(`**Mute rolü ayarlı değil.**`)
let yetkili = message.guild.roles.get(data2)
if(!yetkili) return message.channel.send(`**Mute yetkilisi ayarlı değil.**`)
let kanal = message.guild.channels.get(data3)
if(!kanal) return message.channel.send(`**Mute log kanalı ayarlı değil.**`)

  if (!message.member.roles.has(`${yetkili.id}`)) return message.channel.send(```${ayarlar.prefix}ceza`` **isimli komutu kullanabilmek için** ${yetkili} **rolüne sahip olman gerekiyor**.`)
  let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kişi) return message.channel.send(`Kimi susturacaksın? Etiketlemeyi unutma.`)
  if(kişi.hasPermission("MANAGE_GUILD")) return message.channel.send(`**Bu kişiyi karantinaya alamam!**`)
  
  let zaman = args[1]
  if(!args[1]) return message.channel.send(`Ne kadar süre karantinalanacağını belirtmelisin.\nÖrnek: a!karantina <etiket> <süre> <sebep>`)

let sebep = args.join(' ').slice(args[1].length+args[0].length + 1)
if(!sebep) sebep = 'Sebep belirtilmemiş.'
  
  const wasted = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setColor(`#f3c7e1`)
  .setDescription(`**Atlantic Code Karantina İşlemi**`)
  .addField(`**Karantinalı kişi:**`, kişi, true)
  .addField(`**Karantinalayan Yetkili:**`, `<@${message.author.id}>`, true)
  .addField(`**Sebep:**`, sebep, true)
  .addField(`**Süre:**`, zaman.replace(/s/, ' __saniye__').replace(/m/, ' __dakika__').replace(/h/, ' __saat__').replace(/d/, ' __gün__'), true)
  .setTimestamp()
  .setFooter(`${message.channel.name} kanalında kullanıldı.`)
  .setThumbnail(message.author.avatarURL)
  
  const bitti = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setDescription(`Birisinin karantina süresi bitti!`)
  .addField(`**Karantinası biten kişi:**`, kişi, true)
  .addField(`**Karantinaya Alan:**`, `<@${message.author.id}>`, true)
  .setTimestamp()
  .setColor(`RED`)
  .setFooter(`Kaarantina süresi bitti. | ${message.channel.name} kanalında kullanıldı.`)
  .setThumbnail(message.author.avatarURL)
  
  kişi.addRole(rol.id);
    kişi.roles.forEach(r => {
kişi.removeRole(r.id)
db.set(`${message.guild.id}.mute.${kişi.id}.roles.${r.id}`, r.id )})
    kanal.send(wasted)
    message.channel.send(`**${kişi} isimli kişi başarıyla karantinaya.** <:kilitlikanal:711735368801583134>`)
    setTimeout(async () =>{
    kişi.removeRole(rol.id)
    kanal.send(bitti)
  }, ms(zaman));
            setTimeout(async () =>{
message.guild.roles.forEach(async r => {
const i = await db.fetch(`${message.guild.id}.mute.${kişi.id}.roles.${r.id}` )
if(i != r.id)  return ;
if(i){kişi.addRole(i)}
})
              }, ms(zaman));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['jail','mute',"ceza"],
    permLevel: 0
  };
  
exports.help = {
 name: 'karantina',
 description: 'Bir kişiyi belirlediğiniz rol ile jaile yollarsınız.',
 usage: 'mute @üye <10s,10m,10h,10d> sebep',
 kategori: '**MODERASYON**',
 permLvl: '**Bulunmuyor.** (+sustur-yetkilisi ayarla)'
};