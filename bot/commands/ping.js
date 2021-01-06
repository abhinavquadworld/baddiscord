const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "ping",
  description: "get bot latency ",
  execute(message, args) {
    
    let embed = new MessageEmbed()
    .setColor(0x663399)
    .setTitle('Bots Latency')
    .setAuthor('made by <@735091895818125314> ')
    .setDescription(`🏓 | Latency is: **${Date.now() - message.createdTimestamp}ms.** `)
    .setThumbnail('https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/menu/menu-realms.gif')
    //.setURL('https://discord.js.org/')
    .setTimestamp()
    .addFields(
		{ name: 'Hosted in ', value: '🇮🇳' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'uptime', value: `use !uptime`, inline: true },
		{ name: 'requested by  ', value: `${message.author}`, inline: true },
	)
 
    message.channel.send(embed)
  }
};
