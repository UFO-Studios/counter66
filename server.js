let Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", async () => {
  console.log("Running!")
});

client.on("message", async message => {
  if (message.channel.id === "953731286659383349"){
    if (message.author.bot) return;
    if (message.content) {
      var e = parseInt(message.content) + 1;
      if (isNaN(parseFloat(e))) {
        return message.channel.send('you ruined it');
      }
      else if (e !== NaN) {
        return message.channel.send(e);
      }
   }}
})


client.login(process.env.token);
