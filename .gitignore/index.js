const Discord = require('discord.js');
const bot = new Discord.Client();
const {get} = require ("snekfetch");

var prefix =("!")

bot.on('ready', function() {
    bot.user.setGame("Command: !aide");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "accueil").send(`Bienvenue, et que la PouldoShiny soit avec toi, et passe lire les règles sinon la colére de la Pouldo risque de s'abattre sur toi ${member}`)
})

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
            .addField("!regles: affiche les règles du discord","!shasse: lien vers le doc de shiny hunting", true)
            .setColor("0xDF0101")
            .setFooter("En ésperant avoir pu vous aidez.")
        message.channel.sendEmbed(embed);
    }
    
    if (message.content === prefix + "règles"){
        var embed = new Discord.RichEmbed()
            .setTitle("Règles")
            .setDescription("Voici les règles du discord")
            .addField("PAS DISCRIMINATION","Pas de full MAJ", true)
            .addField("PAS D'INSULTES","PAS DE FLOOD", true)
            .addField("Le @Modo en chef et le @Modo ne sont la que si il y a un soucis","pas de lien 18+ sauf dans le salon autorisé", true)
            .addField("Pas de pub","et surtout prié la Pouldo shiny tout les matins", true)
            .setColor("0xDF0101")
            .setFooter("En ésperant avoir pu vous aidez.")
        message.channel.sendEmbed(embed);
    }
    
     if (message.content === prefix + "shasse"){
        var embed = new Discord.RichEmbed()
            .setTitle("Shasse")
            .setDescription("Voici le document expliquant les différentes méthode de shasse")
            .addField("voila le lien du doc: https://docs.google.com/document/d/1zjfaisk_RC2RMflJHKYfej0Y7uO1kBYIcWeFkyc8gtE/edit?usp=sharing","il est en travaux", true)
            .setColor("0xDF0101")
            .setFooter("En ésperant qu'il vous sois utile .")
        message.channel.sendEmbed(embed);
        }     
        case "random":
        try {
            get('https://aws.random.cat/meow').then(res => {
                const embed = new Discord.RichEmbed()
                .setDescription(`:cat: Image de chat ${message.author.username}`)
                .setImage(res.body.file)
                .setColor("0x201f1f")
                return message.channel.send({embed});
        });
         catch(err) {
         return message.channel.send(error.stack):
           
});


