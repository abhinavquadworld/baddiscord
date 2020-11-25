const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "ping",
  description: "get bot latency ",
  execute(message, args) {
    
    let embed = new MessageEmbed()
    .setColor(0x663399)
    .setTitle('Bots Latency')
    .setAuthor('made by .Abhinav#1630')
    .setDescription(`🏓 | Latency is: **${Date.now() - message.createdTimestamp}ms.** || requested
    by ${message.author}`)
    .setThumbnail('https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/menu/menu-realms.gif')
    //.setURL('https://discord.js.org/')
    message.channel.send(embed)
  }
};