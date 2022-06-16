let Discord = require("discord.js")
const client = new Discord.Client()
const { data } = require('./config.json')

client.on("ready", async () => {
  console.log("Running!")
});

client.on("message", async message => {
  if (message.channel.id === ${data.channel}){
    if (message.author.bot) return;
    if (message.content) {
      var e = parseInt(message.content) + 1;
      if (isNaN(parseFloat(e))) {
        return message.reply('you ruined it! Start at 0 again');
      }
      else if (e !== NaN) {
        return message.channel.send(e);
      }
    }
  }
})

client.login(process.data.botToken);
