const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "embed",
  description: "Get the detailed embed",
  execute(client, message, args) {
    
    let embed = new MessageEmbed()
    .setColor(0x663399)
    .setAuthor('Tupu4545')
    .setDescription("Thank Tupu4545 for this cmd")
    message.channel.send(embed)
  }
};