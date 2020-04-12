const Discord = require('discord.js');

exports.run = async (client, message) => {
 
  if (client.guilds.size < 20) return message.reply("Bot `20` tane sunucuda bulunmuyor!")
  
const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
const embed = new Discord.RichEmbed()
			.setDescription(`1. **${top[0].name}**: ${top[0].memberCount} Kişi Bulunuyor.\n2. **${top[1].name}**: ${top[1].memberCount} Kişi Bulunuyor.\n3. **${top[2].name}**: ${top[2].memberCount} Kişi Bulunuyor.\n4. **${top[3].name}**: ${top[3].memberCount} Kişi Bulunuyor.\n5. **${top[4].name}**: ${top[4].memberCount} Kişi Bulunuyor.\n6. **${top[5].name}**: ${top[5].memberCount} Kişi Bulunuyor.\n7. **${top[6].name}**: ${top[6].memberCount} Kişi Bulunuyor.\n8. **${top[7].name}**: ${top[7].memberCount} Kişi Bulunuyor.\n9. **${top[8].name}**: ${top[8].memberCount} Kişi Bulunuyor.\n10. **${top[9].name}**: ${top[9].memberCount} Kişi Bulunuyor. \n11. **${top[10].name}**: ${top[10].memberCount} Kişi Bulunuyor \n12. **${top[11].name}**: ${top[11].memberCount} Kişi Bulunuyor \n13. **${top[12].name}**: ${top[12].memberCount} Kişi Bulunuyor \n14. **${top[13].name}**: ${top[13].memberCount} Kişi Bulunuyor \n15. **${top[14].name}**: ${top[14].memberCount} Kişi Bulunuyor \n16. **${top[15].name}**: ${top[15].memberCount} Kişi Bulunuyor \n17. **${top[16].name}**: ${top[16].memberCount} Kişi Bulunuyor \n18. **${top[17].name}**: ${top[17].memberCount} Kişi Bulunuyor \n19. **${top[18].name}**: ${top[18].memberCount} Kişi Bulunuyor \n20. **${top[19].name}**: ${top[19].memberCount} Kişi Bulunuyor`)
			.setColor("RANDOM")
		message.channel.send({embed})
  
}

exports.conf = {
enabled: true,
aliases: [],
permLevel: 4
};

exports.help = {
name: "top20",
description: "Top20 listesi.",
usage: "top20"
};