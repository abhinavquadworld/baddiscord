module.exports = {
	name: 'user',
	description: 'Display info about this user.',
	execute(message) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};
