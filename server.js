let Discord = require("discord.js")
//const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const client = new Discord.Client({ intents: [ 'DIRECT_MESSAGES', 'GUILD_MESSAGES' ] });
const { data } = require('./config.json')


client.on("ready", async () => {
  console.log("Running!")
});

client.on("message", async message => {
    message.channel.send('Pong!')
  })


 command(client, ['ping', 'test'], (message) => {
    message.channel.send('Pong!')
  })


client.login(process.data.botToken);
