/* eslint-disable indent */
/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const { id } = require('common-tags');

exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
    if (!user) {
        message.reply('Birini etiketle ki, onun ağzından yazıyım!').then(msg => msg.delete(3000));
        return;
    }
    if (user.bot === true) {
        message.reply('Botlara hiç bulaşma mevzu çıkarmasınlar.').then(msg => msg.delete(3000));
        return;
    }
    if (user.id === message.author.id) {
        message.reply('Sen kendini niye etiketliyon ki. Istediğini yazarsın zaten.').then(msg => msg.delete(3000));
        return;
    }

    const mesaj = args.join(' ').slice(22);
    if(!mesaj) {
        message.channel.send('Mesaj içeriği yazmadan ne yazdırmamı bekliyon knkm.').then(msg => msg.delete(3000));
        return;
    }

    message.delete();
    message.channel.createWebhook(user.username, user.avatarURL)
        .then(webhook => webhook.edit(user.username, user.avatarURL)
            .then(wb => {
                const hook = new Discord.WebhookClient(wb.id, wb.token);
                hook.send(mesaj);
                hook.delete();
            })
            .catch(console.error))
        .catch(console.error);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['fake-mesaj'],
    permLevel: 0,
};

exports.help = {
    name: 'sahte-mesaj',
    description: 'Istediğiniz kişiyi bir şey yazmış gibi gösterebilirsiniz.',
    usage: 'sahte-mesaj <@kullanıcı> <yazı>',
};
