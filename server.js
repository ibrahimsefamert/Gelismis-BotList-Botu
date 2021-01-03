const keep_alive = require("./keep_alive.js"); //index.js Const Kısımlarına

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log("Botu açık tutmak için yeniden bağlandım!");
  response.sendStatus(200);
});
app.listen(8000);
setInterval(() => {
  http.get(``);//Buraya glitch linkinizi doğru şekilde giriniz. ve Botunuz 7/24 olacaktır!
}, 280000)




http
  .createServer(function(req, res) {
    res.write("sa");
    res.end();
  })
  .listen(8080);

///////////////////////////////////////////////////////////////////////////////

const Discord = require("discord.js");
const { Client, Util } = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const ayarlar = require("./ayarlar.json");
const { promisify } = require("util");
const chalk = require("chalk");
require("./util/eventLoader")(client);
const moment = require("moment");
const db = require("quick.db");
const ms = require("parse-ms");

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Komut - ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

//////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  const a = message.content.toLowerCase();
  if (
    a === "slam" ||
    a === "sa" ||
    a === "selamun aleyküm" ||
    a === "selamın aleyküm" ||
    a === "selamün aleyküm" ||
    a === "selam" ||
    a === "sea" ||
    a === "slm"
  ) {
    let i = await db.fetch(`saas_${message.guild.id}`);
    if (i === "acik") {
      const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(
          "<a:gul:794639948409339914> **Aleyküm Selam, Hoşgeldin!**"
        )
        .setFooter(client.user.username, client.user.avatarURL);

      message.channel.send(embed).then(msg => msg.delete(10000));
    }
  }
});

//SESTE AFK KALMA
client.on("ready", () => {
  client.channels.get('794926659266150411').join();
})


//DDOS KORUMA
client.on("message", msg => {
  if (client.ping > 2500) {
    let bölgeler = [
      "singapore",
      "eu-central",
      "india",
      "us-central",
      "london",
      "eu-west",
      "amsterdam",
      "brazil",
      "us-west",
      "hongkong",
      "us-south",
      "southafrica",
      "us-east",
      "sydney",
      "frankfurt",
      "russia"
    ];
    let yenibölge = bölgeler[Math.floor(Math.random() * bölgeler.length)];
    let sChannel = msg.guild.channels.find(c => c.name === "ddos-system");

    sChannel.send(
      `Sunucu'ya Vuruyorlar \nSunucu Bölgesini Değiştirdim \n __**${yenibölge}**__ :tik: __**Sunucu Pingimiz**__ :` +
        client.ping
    );
    msg.guild
      .setRegion(yenibölge)
      .then(g => console.log(" bölge:" + g.region))
      .then(g => msg.channel.send("bölge **" + g.region + " olarak değişti"))
      .catch(console.error);
  }
});

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: '🎄 Atlantic Code & BotList ™',
            type: "STREAMING",
            url: "https://www.twitch.tv/sefamert60"
        }
    });
});

//BOT OTOROL
client.on("guildMemberAdd", async member => {
  let veri = db.fetch(`csbo_${member.guild.id}`)  
  if (veri){
  if (member.user.bot) {
  let csr = member.guild.roles.cache.get(veri)
  if(csr){
  member.roles.add(csr)
  }}}//FroLenk
  })


//TAG
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'tag') 
    msg.reply('<a:kirmizitac:794638228782055474> **Tagımız İşte Bu :** ₳  \n **Tagımızı alarak sunucumuzdaki kodlara erişim sağlayabilirsiniz.**');
  }
);

//DASHBOARD
client.on('message', msg => {
  client.channels.cache.get("710291379959365712").setName(` Toplam Üye  ${msg.guild.memberCount}`); 
  client.channels.cache.get("710291392735215676").setName(` Çevrimiçi Üye  ${msg.guild.members.cache.filter(m => m.presence.status != "offline").size}`); 
  client.channels.cache.get("710296888146002021").setName(` Bot Sayısı  ${msg.guild.members.cache.filter(m => m.user.bot).size}`); 
  client.channels.cache.get("710304997992038401").setName(` Ses Sayısı  ${msg.guild.members.cache.filter(m => m.voice.channel).size}`); 
  client.channels.cache.get("710298475694260254").setName(` Ping Sayısı  ${client.ws.ws.ping}`); 
  client.channels.cache.get("710300170738335796").setName(` Toplam Kanal  ${client.channels.size.toLocaleString()}`);
  client.channels.cache.get("710300435608633404").setName(` K.RAM  ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);
  client.channels.cache.get("710300893136027739").setName(`${msg.author.username}`);
  if (msg.content.toLowerCase() === 'sa') {
  client.channels.cache.get("710301583111487608").setName(`${msg.author.username}`);
}})

client.elevation = message => {
  if (!message.guild) {
    return;
  }

  let permlvl = 0;
  if (message.member.hasPermission("KICK_MEMBERS")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(process.env.token);
