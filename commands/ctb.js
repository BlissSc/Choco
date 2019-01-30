const { RichEmbed } = require('discord.js');
const prefix = process.env.PREFIX;
const Nodesu = require('nodesu');
const api = new Nodesu.Client(process.env.OSU);
const moment = require('moment');
const momentDuration = require('moment-duration-format');

'use strict';
module.exports = {
  name: "ctb",
  args: true,
  description: "Get an osu user (CTB/Catch the Beat). ",
  aliases: ["catchthebeat"],
  usage: '[user]',
  guildOnly: true,
  execute(message, args) {
    const user = args.join(" ")
    if (!user) return message.channel.send("Example: ``=ctb -Azunix-``")
    api
    .user.get(user, Nodesu.Mode.ctb)
    .then(user => {
      const sec = parseInt(user.total_seconds_played);
      const embed = new RichEmbed()
      .setAuthor(`${user.username}'s stats`, `https://raw.githubusercontent.com/emcrisostomo/flags/master/png/256/${user.pp_country}.png`)
      .setURL(`https://osu.ppy.sh/u/${user.user_id}`)
      .setThumbnail(`https://a.ppy.sh/${user.user_id}?.png`)
      .setDescription(`**- Accuracy:** ${Math.round(user.accuracy)}%
**- PP:** ${Math.floor(user.pp_raw)}
**- Rank:** #${user.pp_rank} (${user.country}#${user.pp_country_rank})
**- Plays:** ${user.playcount} 
**- Ranked Score:** ${user.ranked_score}
**- Level:** ${Math.floor(user.level)}
**- Seconds Played:** ${moment.duration(sec, "seconds").format()}
`)
      .setFooter("User joined at: "+user.join_date, 'https://vignette.wikia.nocookie.net/logopedia/images/d/d3/Osu%21Logo_%282015%29.png/revision/latest?cb=20180326010029')
      .setColor(process.env.PINK)
      message.channel.send(embed);
          })
  }
}