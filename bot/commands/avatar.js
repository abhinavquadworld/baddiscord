const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "avatar",
  description: "get bot latency ",
  execute(message, args) {

const embed = new MessageEmbed()
        .setColor('#FFD700')
        .setTitle('Your Avatar')
        
        
        .setImage(message.author.avatarURL())
        message.channel.send(embed)

        //........................................
}
};