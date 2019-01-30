const { RichEmbed } = require('discord.js');
const prefix = process.env.PREFIX;
module.exports = {
  name: "esay",
  args: false,
  description: "Echo but on a embed.",
  aliases: ["echo"],
  usage: '[text]',
  guildOnly: false,
  execute(message, args) {
    const t = args.join(" ");
    if (!t) return message.channel.send("- No text provided -");
    message.delete();
    const embed = new RichEmbed()
    .setDescription(t)
    .setColor(0xff80c0)
    message.channel.send(embed);
  }
}