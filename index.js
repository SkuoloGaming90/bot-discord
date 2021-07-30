const Discord = require("discord.js");


const Client = new Discord.Client



const prefix = "LGM!";

    Client.on("ready", async () => {
        Client.user.setStatus("dnd");
        Client.user.setActivity("Développé par SkuoloGaming");
    });

Client.on("message", message => { 
    if(message.author.bot) return;
    if(message.channel.type == "dm")message.channel.send("message privé non autorisé :x:") 
    if(message.channel.type == "dm")return;

    if(message.content == prefix + "ping"){
        message.reply("pong")
    }
    
    if(message.content == prefix + "stat"){
        message.channel.send(message.author.username + " qui a pour identifiant : " + message.author.id + " a posté un message");
    }
    if(message.content == prefix + "mais tu veut quoi toi?"){
        message.channel.send("Non toi tu veut quoi? " + message.author.username)
    }
    if(message.content == prefix + "créateur"){
        message.channel.send("regarde t'es mp")
        message.member.send("J'ai était créé par SkuoloGaming#6951")
    }
   if(message.content == prefix + "1+1=?"){
       message.channel.send("1+1=2")
   }
 
    if(message.content == prefix + "jeux"){
        message.channel.send("Regarde tes messages privés.")
        message.member.send("__**Jeux Google :**__\n__Graphics phone:__\nGraphis est un jeux comme le téléphone Arabe\n__1v1.lol:__\n1v1.lol est un jeux accessible via Google qui copie un petit peut Fortnite") 
    }
    if(message.member.permissions.has("MANAGE_MESSAGES")){
        if(message.content.startsWith(prefix + "clear")){
            let args = message.content.split(" ");
            
            if(args[1] == undefined){
                message.reply("Nombre de message non ou mal défini.");
            }
            else {
                let number = parseInt(args[1])

                if(isNaN(number)){
                    message.reply("Nombre de message non ou mal défini.");
                }
                else {
                    message.channel.bulkDelete(number).then(messages => {
                        console.log("Suppression de " + messages.size + "messages résussi !");
                        message.reply("suppresion de " + messages.size + " messages réussi !");
                    }).catch(err => {
                        console.log("Erreur de clear " + err);
                    })
                }
            }
        }
        
    }   
    if(message.content == prefix + "blague"){
        let tab = [
            "**Quelle mamie fait peur aux voleurs ?**\nMamie Traillette.",
            "**J'ai une blague sur les magasins.**\nMais elle a pas supermarché",
            "**Pourquoi est-ce c'est difficile de conduire dans le Nord ?**\nParce que les voitures arrêtent PAS DE CALER.",
            "**Pourquoi est-ce qu'on met tous les crocos en prison ?**\nParce que les crocos dealent.",
            "**Quel est le bar préféré des espagnols ?**\nLe Bar-celone",
            "**Qu'est-ce qu'un tennisman adore faire ?**\nRendre des services",
            "**Quel est la différence entre un rappeur et un campeur?**\nLe rappeur nique ça mère et le campeur démonte ça tante",
            "**Pourquoi est-ce que les vêtements sont toujours fatigués quand ils sortent de la machine ?**\nParce qu’ils sont léssivés",
            "**Pourquoi est-ce que les livres ont-ils toujours chaud ?**\nParce qu’ils ont une couverture",
            "**Que fait-on aux voleurs de salades**\nOn l'ai tue (laitue)"
        ]
        let index = Math.floor(Math.random() * (tab.length))
        message.channel.send(tab[index])
    }
    if(message.content == prefix + "codes"){
        message.channel.send("Regarde t'es mp!")
        message.member.send("lien mega...");    
    }
    if(message.content == prefix + "prv"){

    }

    });


Client.login("ODcwNTU4NjI4ODE2NTAyODU1.YQOg5w.wbj_oLz2dehCiHXI0SNO3sUy7_w"); 