const { Client } = require("discord.js"); //makes process easy
const client = new Client({ //makes it so bot runs everywhere(for testing)
  intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"],
  partials: ["CHANNEL"]
});
client.on("ready", () => {
  console.log("bot is running"); //when bot is ready
});
client.on("messageCreate", async message => {
  // when client detects a message
  if (message.author.bot) return; // if the author of the message is a bot ignore the case
  if (!message.content) //when images and stuff get posted
    return message.reply({
      content: "invalid number" //makes the bot reply
    });
}
client.login(process.env.TOKEN); //login using token which doent exists yet
