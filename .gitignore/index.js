const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix =("!")

bot.on('ready', function() {
    bot.user.setGame("Command: !help");
    console.log("Connectedç");
});

bot.login("NDYwNDQ4ODM0MTYyNzg2MzE0.Dh68GA.-ADHM02TQVTaXjhU2oYKu1cPmIg");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -!help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjours, comment ça va? moi ça va. :)");
        console.log("Commande Salut effectué");
    }
});
