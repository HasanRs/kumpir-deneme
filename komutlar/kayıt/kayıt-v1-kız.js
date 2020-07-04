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
    let kayıt = db.get(`yetkili_kayıt${message.guild.id}`);
    let yönetici = db.get(`yetkili_yönetici${message.guild.id}`);
    let verilecek = db.get(`kayıt_kız.verilecek.${message.guild.id}`);
    let alınacak = db.get(`kayıt_kız.alınacak.${message.guild.id}`);

    let kayıtkanal = db.get(`kayıt_kanal.${message.guild.id}`);
    let kayıtlog = db.get(`kayıt_log.${message.guild.id}`);

    if(message.channel.id != kayıtkanal) {
        message.channel.send(`Lütfen bu komutu <#${kayıtkanal}> kanalında kullanın.`);
        return;
    }
    if (
        !message.member.roles.get(kayıt) &&
        !message.member.roles.get(yönetici) &&
        !message.member.hasPermission('BAN_MEMBERS') &&
        !message.member.hasPermission('ADMINISTRATOR')
    ) {
        return message
            .reply('Bunun için gerekli yetkin yok')
            .then(m => m.delete(3000));
    }

    let kullanıcı = message.mentions.users.first() || args[0];
    if (!kullanıcı) {
        return message
            .reply('Kullanıcı belirtilmedi!')
            .then(m => m.delete(5000));
    }

    kullanıcı.addRole(verilecek);
    kullanıcı.removeRole(alınacak);

    const dataerkek = db.fetch(
        `kayıt_erkek.${message.author.id}.${message.guild.id}`,
    );
    const datakiz = db.fetch(
        `kayıt_kiz.${message.author.id}.${message.guild.id}`,
    );
    const datatoplam = db.fetch(
        `kayıt_toplam.${message.author.id}.${message.guild.id}`,
    );

    let erkekteyit = dataerkek ? dataerkek : '0';
    let kadınteyit = datakiz ? datakiz : '0';
    let toplamteyit = erkekteyit + kadınteyit + 1;
    let kadınteyits = kadınteyit + 1;

    const komut = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setThumbnail(client.users.get(kullanıcı.id).avatarURL)
        .addField('Kullanıcı:', kullanıcı, true)
        .addField('ID:', kullanıcı.id, true)
        .addField('Verilen rol:', `${verilecek}`, true)
        .addField('Alınan rol:', `${alınacak}`, true);
    message.channel.send(komut).then(msg => msg.delete(5000));
    db.add(`erkek.${message.author.id}.${message.guild.id}`, 1);
// 0000ff
    if (kayıtlog) {
        const log = new Discord.RichEmbed()
            .setColor('ffc0cb')
            .setAuthor(
                message.author.tag + ' • ' + message.author.id,
                message.author.avatarURL,
            )
            .setThumbnail(kullanıcı.avatarURL)
            .addField('Kullanıcı:', kullanıcı, true)
            .addField('ID:', kullanıcı.id, true)
            .addField(
                `__Toplam Teyit:__ ${toplamteyit}`,
                `**Erkek Teyit:** ${erkekteyit}` +
                '\n' +
                `**Kız Teyit:** ${kadınteyits}` +
                '\n', true)
            .addField('Cinsiyet:', 'Kız', true)
            .setTimestamp();
        message.channel.get(kayıtlog).send(log);
    }
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['k', 'kadın'],
    permLevel: 0,
};

exports.help = {
    name: 'kız',
    description: 'Kullanıcıyı kız olarak kayıt eder.',
    usage: 'kız @user',
};
