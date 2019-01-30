const fs = require('fs');
const Discord = require('discord.js'),
      Util = require('discord.js');
const config = process.env,
      token = config.TOKEN;

const YT = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const queue = new Map();
const moment = require('moment');
const youtube = new YT(config.YT);

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('warn', console.warn);
client.on('error', console.error);
client.on('ready', () => {
	console.log('Ready~ 💟');
  client.user.setPresence({game: {
      name: '=help',
      type: 'PLAYING'
    },
    status: 'dnd'
  });
});

client.login(process.env.TOKEN);

client.on('message', message => {
   let prefix = "=";
  if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;
  
  if (message.channel.type === "dm") { console.log(`${message.author.tag} used ${command} in DM.`) } else {
    
 console.log(`${message.author.tag} used ${command} in ${message.guild.name} (${message.guild.id}) [#${message.channel.name}]`)
  }
  
	try {
		client.commands.get(command).execute(message, args, client);
	} catch (error) {
		console.error(error);
    const err1 = new Discord.RichEmbed()
    .setAuthor('There was an error trying to execute that command!')
    .setColor(0xff0000)
    .setFooter('I\'m sorry, '+message.author.username)
		message.channel.send(err1);
	}
});
