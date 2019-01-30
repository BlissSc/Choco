const base64 = require('base-64');
const utf8 = require('utf8');
const { RichEmbed } = require('discord.js');
const prefix = process.env.PREFIX;
module.exports = {
  name: "base64",
  args: true,
  description: "Encoding/Decoding in Base64.",
  aliases: ["b64"],
  usage: '<encode/decode> [Text/Encoded]',
  guildOnly: false,
  execute(message, args) {
    
    var text2c = args.slice(1).join(" ");
    
     if (!args[0]) {
      const help = new RichEmbed()
      .setAuthor("About: Base64")
      .setDescription("``=base64 encode:``\n**Example:** =base64 encode Hide Text\n\n``=base64 decode:``\n**Example:** =base64 decode SGlkZSBUZXh0")
      .setFooter("Requested by "+message.author.tag)
      .setColor(process.env.ERR)
      message.channel.send(help);
    }
    else if (args[0] === "encode"){
      if(!text2c) return message.channel.send(":warning: Give me some text.");
   var bytes = utf8.encode(text2c);
   var encoded = base64.encode(bytes);
    message.channel.send("```"+encoded+"```");
    } else if (args[0] === "decode"){
      if(!text2c) return message.channel.send(":warning: Give me some text.");
var encoded = text2c;
var bytes = base64.decode(encoded)
var textdecoded = utf8.decode(bytes);
message.channel.send("```"+textdecoded+"```")            
    }
  }
}