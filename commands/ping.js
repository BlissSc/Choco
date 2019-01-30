const { RichEmbed } = require('discord.js');
const prefix = process.env.PREFIX;
module.exports = {
  name: "ping",
  args: false,
  description: "Latency from bot.",
  aliases: ["p", "latency"],
  usage: 'none',
  guildOnly: false,
  execute(message, args) {
    const embed = new RichEmbed()
    .setAuthor("Actual ping: "+Math.floor(message.client.ping)+"ms")
    .setColor(0xff80c0)
    .setFooter(message.author.tag)
    message.channel.send(embed);
  }
}