const { RichEmbed } = require('discord.js');
const prefix = process.env.PREFIX;
module.exports = {
  name: "8ball",
  args: true,
  description: "Replies to your questions...",
  aliases: ["random"],
  usage: '[random question]',
  guildOnly: true,
  execute(message, args, client) {
    const text = args.join(" ");
    var replies = ["Yes", "No", "YES!", "NO!", "No...", "Absolutely not", "Maybe", "Idk", "kys"]
    const err1 = new RichEmbed().setColor(process.env.PINK).setAuthor("Write a question please!")
    if (!text) return message.channel.send(err1);
    message.channel.send(":8ball: | "+replies[Math.floor(Math.random() * replies.length)]+", **"+message.author.username+"**");
  }
}