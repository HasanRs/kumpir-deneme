/* eslint-disable prefer-const */
/* eslint-disable indent */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var tokat = [
        'https://media.giphy.com/media/4Nphcg0CCOfba/giphy.gif',
        'https://media.giphy.com/media/3rgXBKd9uAx7S8z2JG/giphy.gif',
        'https://media.giphy.com/media/deKWTyMOYLkje/giphy.gif',
        'https://media.giphy.com/media/3XlEk2RxPS1m8/giphy.gif',
        'https://media.giphy.com/media/vxvNnIYFcYqEE/giphy.gif',
        'https://media.giphy.com/media/Ql5voX2wAVUYw/giphy.gif',
        'https://media.giphy.com/media/gSIz6gGLhguOY/giphy.gif',
        'https://media.giphy.com/media/IAAXyr5GU73xK/giphy.gif',
        'https://media.giphy.com/media/Qs0I2VdbIqNkk/giphy.gif',
        'https://media.giphy.com/media/j3iGKfXRKlLqw/giphy.gif',
        'https://media.giphy.com/media/Qumf2QovTD4QxHPjy5/giphy.gif',
    ];
    var random = tokat[Math.floor(Math.random() * tokat.length)];

    let user = message.mentions.users.first();
    if(!user) {
        message.channel.send('Kendine tokat attırmaya mı çalışıyorsun ? Öyleyse `evet` yaz sana sağlam tokat atayım.');
        message.channel.awaitMessages(response => response.content === 'evet', {
            max: 1,
            time: 30000,
            errors: ['time'],
        }).then(() => {
            message.channel.send(
                new Discord.RichEmbed()
                    .setColor('RANDOM')
                    .setTitle('Gel hele gel')
                    .setImage(random)
                    .setFooter('Bir daha attıramazsın herhalde.'),
            );
        });
        return;
    }
    message.channel.send(
        new Discord.RichEmbed()
            .setColor('RANDOM')
            .setDescription(`${message.author} dediğine göre sen bana laf atmışsın kardeş! ${user} hayırdır sen?`)
            .setImage(random)
            .setFooter(`${message.author.tag} nasıl vurdum ?`),
    );
};
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0,
};
exports.help = {
	name: 'tokat-at',
	description: 'Belirlediğiniz kullanıcıya tokat atar.',
	usage: 'tokat-at @user',
};
