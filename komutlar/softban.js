module.exports.run = async (bot, message, args) => {
  message.delete();
  let reason = args.slice(1).join(" ");
  let user = message.mentions.users.first();
  if (reason.length < 1)
    return message.reply("Ban sebebini yazmalısın.").then(m => m.delete(3000));
  if (message.mentions.users.size < 1)
    return message
      .reply("Kimi banlayacağını yazmalısın.")
      .catch(console.error)
      .then(m => m.delete(3000));
  if (!message.guild.member(user).bannable)
    return message.reply("Yetkilileri banlayamam.").then(m => m.delete(3000));
  var fetched = await message.channel.fetchMessages({ limit: 99 });
  if (user) {
    var fetched = fetched
      .filter(m => m.author.id === user.id)
      .array()
      .slice(0, 99);
  }
  message.channel.bulkDelete(fetched);
  message.guild.ban(user, 2);
  message.channel
    .send(
      `${user} kullanıcısının son 99 mesajını temizleyerek \`${reason}\` sebebi ile banladım!`
    )
    .then(m => m.delete(3000))
    .catch(error =>
      message.channel.send("14 günden önceki mesajlar silinmemektedir!")
    )
    .then(m => m.delete(3000));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["softban", "sb"],
  permlevel: 2
};
exports.help = {
  name: "softban",
  description:
    "Belirttiğiniz kullanıcının önce mesajlarını siler sonra banlar.",
  usage: "softban <@kulanıcı>"
};
