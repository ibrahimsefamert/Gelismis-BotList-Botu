const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;

exports.run = async (client, message) => {

var streamList = {
    damar: [{
        addr: "https://yayin.damarfm.com:8080/;stream/1/",
        name: " Damar Radyo"
    }],
    arabesk: [{
        addr: "https://playerservices.streamtheworld.com/api/livestream-redirect/SC008_SO1_SC?/;",
        name: " Arabesk Radyo"
    }],
    trap: [{
            addr: "https://radyodinle1.turkhosted.com/yayin?uri=95.173.188.166:9984/&tkn=_LDNX_iKT-XUJXbZyEcW_g&tms=1589039843",
            name: " Yabancı Radyo"
        }
    ],
    pop: [{
        addr: "https://playerservices.streamtheworld.com/api/livestream-redirect/SUPER2_SC?/;",
        name: " Türkçe Radyo"
    }]

}
var randarray = function(array) {
    return array[Math.floor(Math.random() * array.length)];
}

        try {
            const connection = await message.member.voiceChannel.join();
            var keyArray = Object.keys(streamList),
                genre = streamList[randarray(keyArray)],
                station = randarray(genre)
            playSong(connection, station.addr)
            
            message.channel.send("<a:radyo:795246499453730867> **Şuanda çalınıyor :**" + station.name)
        } catch (err) {
            message.channel.send("<a:unlem:794638042484441170> **Radyo dinlemek için bir ses kanalında olmalısınız.**")
        }
     

        try {
            if (message.content.split(prefix + "radio ")[1]) {
                var selectedGenre = message.content.split(prefix + "radio ")[1]
                if (streamList[selectedGenre]) {
                    var station = randarray(streamList[selectedGenre])
                    
                    const connection = await message.member.voiceChannel.join();
                    playSong(connection, station.addr)
                    
                    message.channel.send("Şimdi Çalıyo: " + station.name)
                } else if (selectedGenre=="help"){
                  message.channel.send({
  "embed": {
    "title": "Help",
    "description":  `Ways to use this bot: \n\n **Note: You need to be in a voice channel to use these commands. Also, I do not control radio ads.**\n\n **!radio** \n Selects random station\n **!radio [genre]** \nPlay a station from this genre. Currently there are jazz, classical, 80s, rock, dance, gaming, kpop, and news stations.\n**!radio stop** \n Stops radio and exits channel`,
    "color": 16557315,
    "footer": {
      "text": "Bot by zbot473#4857"
    },
    "thumbnail": {
      "url": "https://cdn.discordapp.com/avatars/515741819364048909/e9a955e7d2fab03f7f7d09cf2b7f8961.png"
    },
  }
})
                  
                }
                else if (selectedGenre == "stop"){
                        message.member.voiceChannel.leave();
                        message.channel.send(":white_check_mark: Radio stopped.")
                }
                else{message.channel.send("No station found/Invalid Command")}
            }
        } catch (err) {
            message.channel.send(":x: You need to be in a voice channel to play radio.")
        }
    }

function playSong(connection, song) {
    return new Promise((resolve, reject) => {
        const dispatcher = connection.playArbitraryInput(song);
        dispatcher.on('end', () => {
            resolve();
        });
    });
} //song function


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["radio"],
    permLevel: 0
};

exports.help = {
    name : "radyo",
    usage: "radyo",
    description: "radyo"
};