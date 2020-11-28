const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "support",
  description: "donate to us  ",
  execute(message, args) {
    
    let embed = new MessageEmbed()
    .setColor(0x663399)
    .setTitle('click me')
    .setAuthor('made by .Abhinav#1630')
    .setDescription(`Thanks for thinking to donate . we give 60% of our donation to charity becoz 
    i dont need money `)
    .setThumbnail('https://www.gifandgif.eu/animated_gif/Money/Animated%20Gif%20Money%20%2813%29.GIF')
    .setURL('https://streamlabs.com/atgpikachu1705')
    message.channel.send(embed)
  }
};