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
    let kanal = message.mentions.channels.first();
    if (!kanal) {
        message.reply('Lütfen kayıt kanalını etiketleyin!');
        return;
    }

    db.set(`kayıt_kanal.${message.guild.id}`, kanal.id);
    message.channel.send(`Kayıt kanalı ${kanal} olarak ayarlandı.`);
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4,
};

exports.help = {
    name: 'kayıt-kanal',
    description: 'Kayıt kanalını ayarlar.',
    usage: 'kayıt-kanal #kanal',
};
