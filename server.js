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
  }}}
  })


//TAG
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'tag') 
    msg.reply('<a:kirmizitac:794638228782055474> **Tagımız İşte Bu :** ₳  \n **Tagımızı alarak bize destek olabilirsin** <a:atankalp:794989940207255562>');
  }
);

//DASHBOARD
client.on('message', msg => {
  client.channels.get("795241778009473065").setName(`🎄・Total Member: ${msg.guild.memberCount}`); 
  if (msg.content.toLowerCase() === 'dash') {
  client.channels.get("794721957677367356").setName(`${msg.author.username}`);
}})

//LOG SİSTEMİ

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});


client.on('guildBanAdd', async (guild, member) => {
const kayitk = await db.fetch(`kayitlar_${member.guild.id}`); 
const kayitk2 = member.guild.channels.find('name', kayitk);
  if (!kayitk2) return;
   const embed = new Discord.RichEmbed()
			.setTitle('Üye yasaklandı.')
			.setAuthor(member.user.tag, member.user.avatarURL)
			.setColor("15158332")
			.setDescription(`<@!${member.user.id}>, ${member.user.tag}`)
			.setThumbnail(member.user.avatarURL)
			.setFooter(`ID: ${member.user.id}`)
			.setTimestamp();
			kayitk2.send({embed});
	});
	
	client.on('guildBanRemove', async (guild, member) => {
    const kayitk = await db.fetch(`kayitlar_${member.guild.id}`); 
    const kayitk2 = member.guild.channels.find('name', kayitk);
    if (!kayitk2) return;
			var embed = new Discord.RichEmbed()
			.setTitle('Üyenin yasaklaması kaldırıldı.')
			.setAuthor(member.user.tag, member.user.avatarURL)
			.setColor(3447003)
			.setDescription(`<@!${member.user.id}>, ${member.user.tag}`)
			.setThumbnail(member.user.avatarURL)
			.setFooter(`ID: ${member.user.id}`)
			.setTimestamp();
			kayitk2.send({embed});
		
	})
	
	client.on('messageDelete', async message => {
    const kayitk = await db.fetch(`kayitlar_${message.guild.id}`); 
    const kayitk2 = message.guild.channels.find('name', kayitk);
    if (!kayitk2) return;
			var embed = new Discord.RichEmbed()
			.setAuthor(message.author.tag, message.author.avatarURL)
			.setColor(15158332)
			.setDescription(`<@!${message.author.id}> tarafından <#${message.channel.id}> kanalına gönderilen mesajı silindi.`)
      .addField("Silinen Mesaj", `\`\`\`${message.content}\`\`\``)
			.setFooter(`Mesaj ID: ${message.id}`)
			kayitk2.send({embed});
		
	});

	client.on('channelCreate', async channel => {
	  const kayitk = await db.fetch(`kayitlar_${channel.guild.id}`); 
    const kayitk2 = channel.guild.channels.find('name', kayitk);
    if (!kayitk2) return;
			if (channel.type === "text") {
				var embed = new Discord.RichEmbed()
				.setColor(3066993)
				.setAuthor(channel.guild.name, channel.guild.iconURL)
				.setDescription(`<#${channel.id}> Adında Bir **Metin** Kanalı Oluşturuldu!`)
				.setFooter(`Kanal ID: ${channel.id}`)
				kayitk2.send({embed});
			};
			if (channel.type === "voice") {
				var embed = new Discord.RichEmbed()
				.setColor(3066993)
				.setAuthor(channel.guild.name, channel.guild.iconURL)
				.setDescription(`${channel.name} Adında Bir **Sesli** Kanal Oluşturuldu!`)
				.setFooter(`Kanal ID: ${channel.id}`)
				kayitk2.send({embed});
			}
		
	});

		client.on('channelDelete', async channel => {
    const kayitk = await db.fetch(`kayitlar_${channel.guild.id}`); 
    const kayitk2 = channel.guild.channels.find('name', kayitk);
    if (!kayitk2) return;
			if (channel.type === "text") {
				let embed = new Discord.RichEmbed()
				.setColor(3066993)
				.setAuthor(channel.guild.name, channel.guild.iconURL)
				.setDescription(`${channel.name} Adında Bir **Metin** Kanalı Silindi!`)
				.setFooter(`Kanal ID: ${channel.id}`)
				kayitk2.send({embed});
			};
			if (channel.type === "voice") {
				let embed = new Discord.RichEmbed()
				.setColor(3066993)
				.setAuthor(channel.guild.name, channel.guild.iconURL)
				.setDescription(`${channel.name} Adında Bir **Sesli** Kanal Silindi!`)
				.setFooter(`Kanal ID: ${channel.id}`)
				kayitk2.send({embed});
			}
		
	})




//TAG-ROL SİSTEMİ
client.on("userUpdate", async(eski, yeni) => {
  if(eski.username !== yeni.username) {
  if(!yeni.username.includes("₳") && client.guilds.get("782638735534719026").members.get(yeni.id).roles.has("793980707021258762")) {
     client.guilds.get("782638735534719026").members.get(yeni.id).removeRole("793980707021258762")
     client.channels.get('793981181800611901').send(`<a:up:794990618652442624> **${yeni}, tagımızı çıkardı! Neden be aga:/**.`)
    }
     if(yeni.username.includes("₳") && !client.guilds.get("782638735534719026").members.get(yeni.id).roles.has("793980707021258762")) {
      client.channels.get('793981181800611901').send(`<a:down:794990602277093406> **${yeni}, tagımızı aldı! Teşekkürler ${yeni}.**`)
      client.guilds.get("782638735534719026").members.get(yeni.id).addRole("793980707021258762")
     }
  }
  })

//MESAJ LOG 
  const chatlog = new Discord.WebhookClient('795794347462230016', 'T2PlhDmNmddtukzJ13iYylQnE6JRp7Mw5-M22dmnyri8zCz-pUNcNxWYZSC3sSJ1bVnO');
  
  client.on("message", m => {
    if (m.channel.id !== "794337591755145226") { //buraya o kanalın ID'si yazılacak.
      return;
    }
    if (m.author.id == m.guild.member) return;
    if (m.attachments.size < 1) {
      const mesajjs = new Discord.RichEmbed()
      .setColor("ffff00")
      .setThumbnail(m.author.avatarURL)
      .setTitle(`${m.author.tag}`)
      .setDescription(`**Kişinin Yazdığı Mesaj** \`\`\` ${m.content} \`\`\``)
      .setFooter(`Atlantic Code ™ | Mesaj Log`);
     chatlog.send(mesajjs)
    }
  });


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
