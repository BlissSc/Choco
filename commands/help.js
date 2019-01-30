const { RichEmbed } = require('discord.js');
const prefix = "=";
const col = 0xff80c0;
module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands', 'cmds'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args, client) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
      const embed1 = new RichEmbed()
      .setAuthor("Here's a list of all my commands:", client.user.avatarURL)
      .setColor(0xff80c0)
      .addField("Links", "[Support Server](https://discord.gg/p8vyYT2) | [Wiki](https://github.com/BlissSc/Choco/wiki) | [Invite](https://discordapp.com/oauth2/authorize?client_id=538554949471305738&scope=bot&permissions=1543892094)")
      .addField("Owner", `${client.users.get("252864499936133120").tag}`)
      .setDescription("``"+commands.map(command => command.name).join(', ')+"``"+`\n\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`)
      .setFooter(message.author.username, message.author.avatarURL)
			return message.author.send(embed1)
				.then(() => {
					if (message.channel.type === 'dm') return;
        message.react("📬");
        const sent = new RichEmbed()
        .setColor(col)
        .setAuthor('I\'ve sent you a DM with all my commands!')
					message.channel.send(sent);
				})
				.catch(error => {
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
        const dmer = new RichEmbed()
        .setColor(0xff0000)
        .setAuthor('It seems like I can\'t DM you! Please open your DMs...')
				message.channel.send(dmer);
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
      const cmdno = new RichEmbed()
        .setColor(0xff0000)
        .setAuthor('That\'s not a valid command!')
			return message.channel.send(cmdno);
		}

		data.push(`**Name:** ${command.name}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

    const cmde = new RichEmbed()
    .setDescription(data, { split: true })
    .setColor(process.env.PINK)
    .setFooter(message.author.username, client.user.avatarURL)
		message.channel.send(cmde);
	},
};