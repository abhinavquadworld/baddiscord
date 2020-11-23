module.exports = {
	name: 'prefix',
	description: 'Display info about this prefix.',
	execute(message) {
		message.channel.send(`you can either ping me or use \`${'!'}\` as my prefix.`);
	},
};
