const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix =("!")

bot.on('ready', function() {
    bot.user.setGame("Command: !help");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "test"){
        message.channel.sendMessage("test");
        
    }(message.content === "Salut"){
        message.reply("Bien le bonjours, comment ça va? moi ça va et les shasses ça avance bien?. :)");
        console.log("Commande Salut effectué");
    }
    
});
