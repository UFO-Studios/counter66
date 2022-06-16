let Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", async () => {
  console.log("Running!")
});

client.on("message", async message => {
  // when client detects a message
  if (message.author.bot) return; // if the author of the message is a bot ignore the case
  if (message.content) {
    var e = parseInt(message.content)+1;
    if (isNaN(parseFloat(e))){
      return message.channel.send('you ruined it');
    }
    else if (e !== NaN){
      return message.channel.send(e);
    }
  }
})


client.login(process.env.token);
