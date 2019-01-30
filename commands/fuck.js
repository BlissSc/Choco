const { RichEmbed } = require('discord.js');
const nekos = require('nekos.life');
const neko = new nekos();
const prefix = process.env.PREFIX;
module.exports = {
  name: "fuck",
  args: true,
  description: "Fuck an user...",
  aliases: ["No aliases"],
  usage: 'none',
  guildOnly: true,
  execute(message, args, client) {
const nsfw = new RichEmbed().setDescription("This channel is not ``NSFW``.").setColor(0xff0000).setFooter(message.author.username)
const nouser = new RichEmbed().setAuthor("Mention an user!").setColor(0xff0000).setFooter(message.author.username)
const user = message.mentions.users.first();
     if (!message.channel.nsfw) return message.channel.send(nsfw);
    if (!user) return message.channel.send(nouser);
if (user.id === message.author.id){
      message.channel.send("You can fuck yourself so...")
      async function m() {
       const url = await neko.nsfw.girlSoloGif();
       const gif = new RichEmbed() 
       .setDescription(`**${message.author.username}** fucked **${user.username}** (What?)`)
       .setFooter(message.author.tag)
       .setColor(process.env.PINK)
       .setImage(url.url)
       message.channel.send(gif);
   }
   return m();
      
    }
    if (user.id === client.user.id) {
      const userid = new RichEmbed()
      .setDescription("Not with me please...")
      .setColor(process.env.PINK)
      message.channel.send(userid);
    } 
        if (user.id !== client.user.id){
      async function fuck() {
       const url = await neko.nsfw.classic();
       const gif = new RichEmbed() 
       .setDescription(`**${message.author.username}** fucked **${user.username}**`)
       .setFooter(message.author.tag)
       .setColor(process.env.PINK)
       .setImage(url.url)
       message.channel.send(gif);
   }
  fuck();
    }  
  }
};