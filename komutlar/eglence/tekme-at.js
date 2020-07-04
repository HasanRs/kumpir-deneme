/* eslint-disable prefer-const */
/* eslint-disable indent */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var tekme = [
        'https://media.giphy.com/media/g5JzFSpzWUkgg/giphy.gif',
        'https://media.giphy.com/media/l0GtHKNRABmEA1rTa/giphy.gif',
        'https://media.giphy.com/media/qiiimDJtLj4XK/giphy.gif',
        'https://media.giphy.com/media/xTcnTjeH5rtf6bdlwA/giphy.gif',
        'https://media.giphy.com/media/l1J3AS8RShMebsmgU/giphy.gif',
        'https://media.giphy.com/media/10M6fIkFbwqaEo/giphy.gif',
        'https://media.giphy.com/media/BKqoHeHlbcRvW/giphy.gif',
        'https://media.giphy.com/media/LICtqQ1K8ClIQ/giphy.gif',
        'https://media.giphy.com/media/3oriNOXmaxj8czSHMQ/giphy.gif',
        'https://media.giphy.com/media/Ur7br2RDlMlZQzuwUK/giphy.gif',
        'https://media.giphy.com/media/lT3D3j54UstUs/giphy.gif',
        'https://media.giphy.com/media/63MO9LTRoTXQk/giphy.gif',
        'https://media.giphy.com/media/l0HlSrrMgYyfyv44M/giphy.gif',
        'https://media.giphy.com/media/OQrzlc6o5xPSx1y3Sr/giphy.gif',
        'https://media.giphy.com/media/JVyXdbVZwkY6s/giphy.gif',
    ];
    var random = tekme[Math.floor(Math.random() * tekme.length)];

    let user = message.mentions.users.first();
    if(!user) {
        message.channel.send('Kendine tekme attırmaya mı çalışıyorsun ? Öyleyse `evet` yaz sana sağlam tekme atayım.');
        message.channel.awaitMessages(response => response.content === 'evet', {
            max: 1,
            time: 30000,
            errors: ['time'],
        }).then(() => {
            message.channel.send(
                new Discord.RichEmbed()
                    .setColor('RANDOM')
                    .setTitle('Nasıl vurdum ama?')
                    .setImage(random),
            );
        });
        return;
    }
    message.channel.send(
        new Discord.RichEmbed()
            .setColor('RANDOM')
            .setDescription(`${message.author} sağlam vurdu!`)
            .setImage(random),
    );
};
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0,
};
exports.help = {
	name: 'temke-at',
	description: 'Belirlediğiniz kullanıcıya tokat atar.',
	usage: 'temke-at @user',
};
