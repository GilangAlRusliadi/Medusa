const {Client, Attachment} = require('discord.js');
const bot = new Client();

const token = 'NTczNTg3NzE3Nzk1ODcyNzg4.XMtDXg.CcexlpoTfZRv4l0isQv8ljhOa1A';

const PREFIX = ',';

var version = '1.0.0';

bot.on('ready', () =>{
    console.log('Bot Medusa sudah Online');
    bot.user.setActivity('Kyonyuu Fantasy 3 if', {type: 'PLAYING'}).catch(console.error);
})

/*
bot.on('guildMemberAdd', member=>{

    const channel = member.guild.channels.find(channel => channel.name === "gateway");
    if(!channel) return;

    channel.send('Selamat datang ${member}')
})
*/

bot.on('message', msg=>{
    if(msg.content === "Halo"){
        msg.reply('Halo jangan cuma jadi tukang nyimak ya');
    }
    if(msg.content === "Yo"){
        msg.reply('Yo Halo');
    }
    if(msg.content === "Clue"){
        const attachment = new Attachment('./clue.txt')
        msg.reply(attachment);
    }
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'logo':
            const attachment = new Attachment('https://cdn.discordapp.com/attachments/565273231301541938/573640483138437120/Medusa_Hide_1.png')
            message.channel.send(message.author, attachment);
            break;
        /*case 'logoLocal':
            const attachment = new Attachment('./Medusa.png')
            message.channel.send(message.author, attachment);
            break;*/
        case 'youtube':
            message.channel.sendMessage('Link YouTube Zeronime: https://www.youtube.com/AnimeSekaiZero');
            break;
        case 'discord':
            message.channel.sendMessage('Link Discord Zeronime: https://discord.io/Zeronime');
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('Versi ' + version);
            }else{
                message.channel.sendMessage('Invalid Args');
            }
        break;
        case 'clear':
            if(!args[1]) return message.reply('Error please define second args')
                message.channel.bulkDelete(args[1]);
            break;
        /*case 'kick':
            if(!args[1]) message.channel.send('Kamu belom mecantumkan nama orangnya')
            const user = message.mentions.users.first();
            if(user){
                const member = member.guild.member(user);
                if(member){
                    member.kick('').then(()=>{
                        message.reply('Sukses kick ${user.tag}');
                    })
                } else {
                    message.reply('User itu udah gak ada di server');
                }
            }*/
    }
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'embed':
        const embed = new Client.RichEmbed()
        .setTitle('User Information')
        .addField('Player Name', message.author.username)
        .addField('Versi', version)
        .addField('Server', message.guild.name)
        .setColor(0xB9f2FF)
        .setThumbnail(message.author.avatarURL)
        message.channel.sendEmbed(embed);
        break;

    }
})

bot.login(token);