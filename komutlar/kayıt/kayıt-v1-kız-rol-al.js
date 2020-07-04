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
    let rol = message.mentions.roles.first();
    if (!rol) {
        message.reply('Lütfen kız kayıtında alınacak rolü etiketleyin!');
        return;
    }
    let rol1 = db.get(`kayıt_üye.verilecek.${message.guild.id}`);
    let rol2 = db.get(`kayıt_erkek.verilecek.${message.guild.id}`);
    let rol3 = db.get(`kayıt_kız.verilecek.${message.guild.id}`);
    let rol4 = db.get(`yetkili_yönetici.${message.guild.id}`);
    let rol5 = db.get(`yetkili_temizle.${message.guild.id}`);
    let rol6 = db.get(`yetkili_kayıt.${message.guild.id}`);
    let rol7 = db.get(`yetkili_mute.${message.guild.id}`);
    let rol8 = db.get(`yetkili_jail.${message.guild.id}`);
    let rol9 = db.get(`yetkili_kick.${message.guild.id}`);
    let rol10 = db.get(`yetkili_ban.${message.guild.id}`);

    if (
        rol.id === rol10 ||
        rol.id === rol9 ||
        rol.id === rol8 ||
        rol.id === rol7 ||
        rol.id === rol6 ||
        rol.id === rol5 ||
        rol.id === rol4 ||
        rol.id === rol3 ||
        rol.id === rol2 ||
        rol.id === rol1
    ) {
        message.channel.send('Lütfen farklı bir rol seçiniz.');
        return;
    }
    db.set(`kayıt_kız.alınacak.${message.guild.id}`, rol.id);
    message.channel.send(`Alınacak rol **\`${rol.name}\`** olarak ayarlandı.`);
    message.channel.send(`Kayıt görevlisini ayarlamak için **\`${prefix}yetkili-ayarla kayıt @rol\`** yazabilirsiniz. Ekstra olarak \`Üyeleri Engelle\` ve \`Yönetici\` yetkisi olanlar otomatik olarak kayıt görevlisi olurlar.`);
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4,
};

exports.help = {
    name: 'kız-rol-al',
    description: 'Kayıt sisteminde alınacak kız rolünü ayarlar.',
    usage: 'kız-rol-al @rol',
};
