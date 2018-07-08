const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix =("!")

bot.on('ready', function() {
    bot.user.setGame("Command: !help");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);


bot.on(message.content === "Salut"){
        message.reply("Bien le bonjours, comment ça va? moi ça va et les shasses ça avance bien?. :)");
        console.log("Commande Salut effectué");
    }
    if (message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
            .setTitle ("Liste des Commandes")
            .setDescription ("Voici la liste des commandes disponible pour PoulBot")
            .addField(".Help","Page d'aide", true)
            .addField("!règles : fait apparaitres les règles du discord", true)
            .setColor("0xFF8000")
        message.channel.sendEmbed(embed);
    }            
        
});
