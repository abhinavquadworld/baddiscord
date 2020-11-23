module.exports = {
    name: 'invite',
    discription: 'me',
    execute(message, args) {
        message.channel.send(`https://discord.com/api/oauth2/authorize?client_id=765119548466135060&permissions=0&scope=bot`);
    },
};
