module.exports = {
    name: 'ping',
    discription: 'discription',
    execute(message, args) {
        message.channel.send(`🏓 | Latency is: **${Date.now() - message.createdTimestamp}ms.**`);
    },
};
