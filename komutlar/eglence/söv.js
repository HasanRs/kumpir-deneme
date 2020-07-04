/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    let msg = message.author;
// 1
    var söv = [
        `At yarağına konmuş kelebek gibisin ${msg}`,
        `Sana evin damında bir hafliyat çalışması yaparım, tüm mahalle işi gücü bırakıp seni izler ${msg}`,
        `Ananı atla kaçırayım, böyle pelerin giyeyim Tarkan gibi ${msg}`,
        `${msg} bile anladı millet. Siz nasıl anlamadınız.`,
        `${msg} gibi değilsin yine.`,
        `Çöpe gideceğine sen yersin ${msg}.`,
        `Ben seni arkadaş olarak görüyorum ${msg}`,
        `${msg}, ok`,
        `Evlat olsan eldiven giyip, maşa ile severim seni ${msg}`,
        `Çocuğum olsan cebine madde koyar ihbar ederim lan seni ${msg}`,
        `Knkm sen ıslak tuvalet terliği gibisin ${msg}`,
        `O gece annenin başı ağrısaydı keşke ${msg}`,
        `Seni ilgilendirmez ${msg}`,
        `Bim prezervatifi ${msg}`,
        `Yazık ${msg}`,
    ];
    var random = söv[Math.floor(Math.random() * söv.length)];

    if(random === `Bim prezervatifi ${msg}`) {
        message.channel.send(
            new Discord.RichEmbed()
                .setColor('RANDOM')
                .setDescription(random)
                .setImage('https://pbs.twimg.com/media/C7n59NHW0AANEn_.jpg'),
        );
        return;
    }
    if(random === `Ben seni arkadaş olarak görüyorum ${msg}`) {
        message.channel.send(
            new Discord.RichEmbed()
                .setColor('RANDOM')
                .setDescription(random)
                .setImage('http://www.haberdesiniz.com/images/album/ft1_9743_48588_16052016105938_3.jpg'),
        );
        return;
    }
    if(random === `Knkm sen ıslak tuvalet terliği gibisin ${msg}`) {
        message.channel.send(
            new Discord.RichEmbed()
                .setColor('RANDOM')
                .setDescription(random)
                .setImage('data:image/jpeg;base64,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'),
        );
        return;
    }
    message.channel.send(random);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hükmet', 'göm'],
    permLevel: 0,
};

exports.help = {
    name: 'söv',
    description: 'Bot size hükmeder.',
    usage: 'söv',
};
