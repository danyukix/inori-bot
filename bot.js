const Discord = require("discord.js");
const prefix = "!";

var bot = new Discord.Client();

bot.login("NDc2ODY5MTA0OTU1ODE4MDA0.Dkz28A.fwZlkDqe_26PQq_yk1ulYWRO8Uw");

bot.on("ready", () => bot.user.setGame("!help"));

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message", (message) => {
    
    message.content.toLowerCase;
    
    msg = message.content.toLowerCase();

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if(!msg.startsWith(prefix)) return;

    if(msg.startsWith (prefix + "avatar")) {
        const target = message.mentions.users.first() || message.author;
        message.channel.send(target.displayAvatarURL);
    }
    
    if(msg.startsWith (prefix + "roll")) {
        var roll = Math.floor(Math.random() * 6) + 1;
        message.channel.send("You rolled a " + roll);
    }

    if(msg.startsWith (prefix + "coinflip")) {
        var answers = [
            "**Heads**", "**Tails**"
        ];
        var answers = answers[Math.floor(Math.random() * answers.length)];
        message.channel.send(answers.toString());
    }

    if(msg.startsWith (prefix + "8ball")) {
        var answers = [
            "**yes**", "**no**", "**definetly**", "**maybe**", "**ask again**", "**ask again**"
        ];
        var answers = answers[Math.floor(Math.random() * answers.length)];
        message.channel.send(answers.toString());
    }

    if(msg.startsWith (prefix + "userinfo")) {
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("This is your user info.")
        .setColor("#9a0000")
        .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID", message.author.id)
        .addField("User Avatar", message.author.defaultAvatarURL)
        .addField("Created On", message.author.createdAt);
        message.channel.sendEmbed(embed);
    }

    if(msg.startsWith (prefix + "ban")) {
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply("Sorry, you don't have permissions to use this!");
        const member = message.mentions.members.first();
        if (!member) return message.reply('Invalid usage, please mention the person in this server!');
        member.ban({
            reason: `Banned by ${message.author.tag}`
        });
        message.reply("THE BAN HAMMER HAS DROPPED! https://giphy.com/gifs/hammer-super-mario-8-bit-qPD4yGsrc0pdm");
        member.guild.channels.find("name", "staff-log").sendMessage(`${member} **has been banned by** ${message.author.tag}`);
    }

    if(msg.startsWith (prefix + "kick")) {
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply("Sorry, you don't have permissions to use this!");
        const member = message.mentions.members.first();
        if (!member) return message.reply('Invalid usage, please mention the person in this server!');
        member.kick({
            reason: `Kicked by ${message.author.tag}`
        });
        member.guild.channels.find("name", "staff-log").sendMessage(`${member} **has been kicked by** ${message.author.tag}`);        
    }

});