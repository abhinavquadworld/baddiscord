
//https://discord.com/api/oauth2/authorize?client_id=765119548466135060&permissions=8&scope=bot

const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "invite",
  description: "invite me to servers ",
  execute(message, args) {
    
    let embed = new MessageEmbed()
    .setColor(0x663399)
    .setTitle('click me')
    .setAuthor('made by .Abhinav#1630')
    .setDescription(`invite to have fun also join our server https://discord.gg/5qAgQWTJcN  `)
    .setThumbnail('https://www.gifandgif.eu/animated_gif/Money/Animated%20Gif%20Money%20%2813%29.GIF')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=765119548466135060&permissions=8&scope=bot')

    message.channel.send(embed)
  }
};