const Discord = require('discord.js');

const { config } = require("dotenv");

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

config({
    path: __dirname + "/token.env"
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('BardSongs is online@')
});

client.on('message', async message => {
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName);

	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	try {
		if(commandName == "ban" || commandName == "userinfo") {
			command.execute(message, client);
		} else {
			command.execute(message);
		}
	} catch (error) {
		console.error(error);
        message.reply('There was an error trying to execute that command!');
    }
});


client.login(process.env.TOKEN);


