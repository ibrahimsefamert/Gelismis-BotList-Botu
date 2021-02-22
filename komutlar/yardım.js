const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const cmf = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle('⭐ Botumuzun Komutları')
    .setAuthor('⚡ Sefa MERT | Gelişmiş BotList Botu Sizlerle')
    .addField('📍 !botekle', 'Sunucumuza eklenmesi için bot başvurusu yapar.')
    .addField('📍 !bot-onayla', 'Sunucuya eklenmesi için başvuru yapılan botu onaylar.')
    .addField('📍 !bot-reddet', 'Sunucuya eklenmesi için başvuru yapılan botu reddeder.')
    .addField('📍 !bot-bildir', 'Sunucudaki tehlikeli botları bildirmenizi sağlar.')
    .addField('📍 !bot-uyar', 'Bildirilien botların sahibini uyarmanızı sağlar.')
    .addField('📍 !bot-kapalı', 'Sunucuda kapalı olduğu görülen botun sahibini durum hakkında uyarır.')
    .addField('📍 !sertifika', 'Sunucuya eklenen botlar için sertifika başvurusu yapar.')
    .addField('📍 !sertifika-onayla', 'Sertifika başvurusu yapan botun başvurusunu kabul eder.')
    .addField('📍 !sertifika-reddet', 'Sertifika başvurusu yapan botun başvurusunu reddeder.')
    .addField('📍 !bot-at', 'Sunucuda zararlı olduğuna veya sorunları olan botun atıldığını bildirir.')
    .addField('📍 !ping', 'Botumuzun pingini ölçer.')
    .addField('👑 Botumuzun Yapımcısı', 'Sefa MERT#0001')
    .addField(`🌐 Linklerimiz`, `[Discord Sunucumuz](https://discord.gg/dsdRABGYwm) **|** [Youtube Kanalımız](https://youtube.com/SefaMERT)`)
    .setFooter(`Bu bot Sefa MERT tarafından kodlanmıştır.`, message.author.avatarURL)
    .setTimestamp()
    
    message.channel.sendEmbed(cmf);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'Botumuzun yardım sayfasını açar.',
  usage: 'yardım'
};
