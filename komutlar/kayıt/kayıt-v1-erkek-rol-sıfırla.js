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
    var msg = message.author;

    const sonuc_sil = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(`${msg.tag} | Kayıt Erkek Sıfırlama`, msg.avatarURL)
            .setDescription('**Kayıt sıfırlanadı!** \nBöyle güzel botu kullanımdan çıkartıyorsan ne diyim, canın sağ olsun.');

    var son_karar = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(`${msg.tag} | Kayıt Erkek Sıfırlama`, msg.avatarURL)
        .setDescription('**Kayıt erkek rolleri sıfırlanacak!** \nKabul ediyorsan 30 saniye içinde **`kumpir`** yazman yeterli. Gerisi Kumpirde.');
    message.channel.send(son_karar);
    message.channel.awaitMessages(response => response.content === 'kumpir', {
        max: 1,
        time: 30000,
        errors: ['time'],
    }).then(() => {
        message.channel.send(sonuc_sil);
        db.delete(`kayıt_erkek.alınacak.${message.guild.id}`);
        db.delete(`kayıt_erkek.verilecek.${message.guild.id}`);
    });
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4,
};

exports.help = {
    name: 'erkek-kayıt-sıfırla',
    description: 'Kayıt sisteminde erkek rolünü sıfırlar.',
    usage: 'erkek-rol-sıfırla @rol',
};
