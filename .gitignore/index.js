const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix =("!")

bot.on('ready', function() {
    bot.user.setGame("Command: !aide");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -!help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjours, comment ça va? moi ça va. :)");
        console.log("Commande Salut effectué");
    }
    
    if (message.content === prefix + "aide"){
        var embed = new Discord.RichEmbed()
            .setTitle("Aide")
            .setDescription("Voici la liste des commandes")
            .addField("!regles: affiche les règles du discord","!random: pas encore acitver", true)
            .setColor("0xDF0101")
            .setFooter("En ésperant avoir pu vous aidez.")
        message.channel.sendEmbed(embed);
    }
    
    if (message.content === prefix + "regles"){
        var embed = new Discord.RichEmbed()
            .setTitle("Règles")
            .setDescription("Voici les règles du discord")
            .addField("-PAS DE DESCRIMINATION","-PAS D'INSULTES","-ON EST POLI ET GENTIL ENTRE NOUS", true)
            .setColor("0xDF0101")
            .setFooter("En vous remerciant de suivre ces règles pour la bonne entende sur ce discord.")
        message.channel.sendEmbed(embed);
    }        
    
});


