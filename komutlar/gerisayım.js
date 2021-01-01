const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async(client, message, args) => {
let okul = new Date('2021-:00:00')
let zaman = ms(okul - Date.now())
message.channel.send(`Doğum günün kutlanmasına kutlanmasına **${zaman.days}** gün **${zaman.hours}** saat **${zaman.minutes}** dakika kaldı!`)
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'gerisayım',
description: '',
usage: "gerisayım"
};