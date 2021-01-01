const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args, config) => {

    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Bu Komutu kullanmanız için `Sunucu_Yönet` Yetkisine sahip olmalısınız.")

    if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setAuthor('Hata').setDescription("Lütfen sayı gir 1-12").setColor('RANDOM'))
  if (args[0] > 12) return message.channel.send('**Sayı 12 den büyük olamaz!**')
    if (args[0] < 0) return message.channel.send('**Sayı 0 dan küçük olamaz!**')

      if (args[0] == '12') {
                db.set(`${message.guild.id}.slowmode`, '12000')

                const embed = new Discord.MessageEmbed()
                        .setAuthor("Ayarlanan Hız: 12")
                        .setColor("GREY")
                message.channel.send(embed)
                return
          

    }  
  if (args[0] == '11') {
                db.set(`${message.guild.id}.slowmode`, '11000')

                const embed = new Discord.MessageEmbed()
                        .setAuthor("Ayarlanan Hız: 11")
                        .setColor("GREY")
                message.channel.send(embed)
                return
          

    }
      if (args[0] == '10') {
                db.set(`${message.guild.id}.slowmode`, '10000')

                const embed = new Discord.MessageEmbed()
                        .setAuthor("Ayarlanan Hız: 10")
                        .setColor("GREY")
                message.channel.send(embed)
                return
          

    }
      if (args[0] == '9') {
                db.set(`${message.guild.id}.slowmode`, '9000')

                const embed = new Discord.MessageEmbed()
                        .setAuthor("Ayarlanan Hız: 9")
                        .setColor("GREY")
                message.channel.send(embed)
                return
          

    }
    if (args[0] == '8') {
                db.set(`${message.guild.id}.slowmode`, '8000')

                const embed = new Discord.MessageEmbed()
                        .setAuthor("Ayarlanan Hız: 8")
                        .setColor("GREY")
                message.channel.send(embed)
                return
          

    }
      if (args[0] == '7') {
                db.set(`${message.guild.id}.slowmode`, '7000')

                const embed = new Discord.MessageEmbed()
                        .setAuthor("Ayarlanan Hız: 7")
                        .setColor("GREY")
                message.channel.send(embed)
                return
          

    }
      if (args[0] == '6') {
                db.set(`${message.guild.id}.slowmode`, '6000')

                const embed = new Discord.MessageEmbed()
                        .setAuthor("Ayarlanan Hız: 6")
                        .setColor("GREY")
                message.channel.send(embed)
                return
          

    }
      if (args[0] == '5') {
                db.set(`${message.guild.id}.slowmode`, '5000')

                const embed = new Discord.MessageEmbed()
                        .setAuthor("Ayarlanan Hız: 5")
                        .setColor("GREY")
                message.channel.send(embed)
                return
          

    }
      if (args[0] == '4') {
                db.set(`${message.guild.id}.slowmode`, '4000')

                const embed = new Discord.MessageEmbed()
                        .setAuthor("Ayarlanan Hız: 4")
                        .setColor("GREY")
                message.channel.send(embed)
                return
          

    }
      if (args[0] == '3') {
                db.set(`${message.guild.id}.slowmode`, '3000')

                const embed = new Discord.MessageEmbed()
                        .setAuthor("Ayarlanan Hız: 3")
                        .setColor("GREY")
                message.channel.send(embed)
                return
          

    }
      if (args[0] == '2') {
                db.set(`${message.guild.id}.slowmode`, '2000')

                const embed = new Discord.MessageEmbed()
                        .setAuthor("Ayarlanan Hız: 2")
                        .setColor("GREY")
                message.channel.send(embed)
                return
          

    }
        if (args[0] == '1') {
                db.set(`${message.guild.id}.slowmode`, '1000')

                const embed = new Discord.MessageEmbed()
                        .setAuthor("Ayarlanan Hız: 1")
                        .setColor("GREY")
                message.channel.send(embed)
                return
          

    }
          if (args[0] == '0') {
                db.delete(`${message.guild.id}.slowmode`)

                const embed = new Discord.MessageEmbed()
                        .setAuthor("Ayarlanan Hız: 0")
                        .setColor("GREY")
                message.channel.send(embed)
                return
          }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
   name: 'slowmode',
   description: 'Tüm komutları gösterir.',
  usage: 'panel'
};