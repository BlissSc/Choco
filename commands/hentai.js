const { RichEmbed } = require('discord.js');
const nekos = require('nekos.life');
const neko = new nekos();
const prefix = process.env.PREFIX;
module.exports = {
  name: "hentai",
  args: true,
  description: "Ehm... Hentai GIFs.",
  aliases: ["No aliases"],
  usage: 'none',
  guildOnly: true,
  execute(message, args, client) {
    const nsfw = new RichEmbed()
    .setDescription("This channel is not ``NSFW``.")
    .setColor(0xff0000)
    .setFooter(message.author.username)
    if (!message.channel.nsfw) return message.channel.send(nsfw);
    async function nekoss() {
       const ggewe = await neko.nsfw.randomHentaiGif();
       // message.channel.send(ggewe.url);
       const embed = new RichEmbed() 
       .setFooter(message.author.tag)
       .setColor(process.env.PINK)
       .setImage(ggewe.url)
       message.channel.send(embed);
   }
   nekoss();
  }
}