/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../../config.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
    let log = message.mentions.channels.first();
    if (!log) {
        message.reply('Lütfen kayıt log kanalını etiketleyin!');
        return;
    }

    db.set(`kayıt_log.${message.guild.id}`, log.id);
    message.channel.send(`Log kanalı ${log} olarak ayarlandı.`);
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4,
};

exports.help = {
    name: 'kayıt-kanal-log',
    description: 'Kayıt log kanalını ayarlar.',
    usage: 'kayıt-kanal-log #kanal',
};
