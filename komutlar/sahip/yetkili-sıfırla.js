/* eslint-disable no-trailing-spaces */
/* eslint-disable no-redeclare */
/* eslint-disable indent */
/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */
/* eslint-disable no-empty */
/* eslint-disable no-var */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../../config.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
    var msg = message.author;
    const sonuc_sil = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(`${msg.tag} | Yetki Sıfırlama`, msg.avatarURL)
            .setDescription('**Yetkili sıfırlanadı!** \nBöyle güzel botu kullanımdan çıkartıyorsan ne diyim, canın sağ olsun.');

	switch (args[0]) {
	case 'yönetici':
	case 'throne':
        var son_karar = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(`${msg.tag} | Yetki Sıfırlama`, msg.avatarURL)
            .setDescription('**Yönetici yetkisi sıfırlanacak!** \nKabul ediyorsan 30 saniye içinde **`kumpir`** yazman yeterli. Gerisi Kumpirde.');
        message.channel.send(son_karar);
        message.channel.awaitMessages(response => response.content === 'kumpir', {
            max: 1,
            time: 30000,
            errors: ['time'],
        }).then(() => {
            message.channel.send(sonuc_sil);
            db.delete(`yetkili_yönetici.${message.guild.id}`);
        });
		break;

	case 'temizle':
	case 'clear':
        var son_karar = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(`${msg.tag} | Yetki Sıfırlama`, msg.avatarURL)
            .setDescription('**Temizle yetkisi sıfırlanacak!** \nKabul ediyorsan 30 saniye içinde **`kumpir`** yazman yeterli. Gerisi Kumpirde.');
        message.channel.send(son_karar);
        message.channel.awaitMessages(response => response.content === 'kumpir', {
            max: 1,
            time: 30000,
            errors: ['time'],
        }).then(() => {
            message.channel.send(sonuc_sil);
            db.delete(`yetkili_temizle.${message.guild.id}`);
        });
        break;
        /*
	case 'kayıt':
	case 'register':
        var son_karar = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(`${msg.tag} | Yetki Sıfırlama`, msg.avatarURL)
            .setDescription('**Kayıt yetkisi sıfırlanacak!** \nKabul ediyorsan 30 saniye içinde **`kumpir`** yazman yeterli. Gerisi Kumpirde.');
        message.channel.send(son_karar);
        message.channel.awaitMessages(response => response.content === 'kumpir', {
            max: 1,
            time: 30000,
            errors: ['time'],
        }).then(() => {
            message.channel.send(sonuc_sil);
            db.delete(`yetkili_kayıt.${message.guild.id}`);
        });
        break;
        */
	case 'mute':
        var son_karar = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(`${msg.tag} | Yetki Sıfırlama`, msg.avatarURL)
            .setDescription('**Mute yetkisi sıfırlanacak!** \nKabul ediyorsan 30 saniye içinde **`kumpir`** yazman yeterli. Gerisi Kumpirde.');
        message.channel.send(son_karar);
        message.channel.awaitMessages(response => response.content === 'kumpir', {
            max: 1,
            time: 30000,
            errors: ['time'],
        }).then(() => {
            message.channel.send(sonuc_sil);
            db.delete(`yetkili_mute.${message.guild.id}`);
        });
		break;

	case 'jail':
        var son_karar = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(`${msg.tag} | Yetki Sıfırlama`, msg.avatarURL)
            .setDescription('**Jail yetkisi sıfırlanacak!** \nKabul ediyorsan 30 saniye içinde **`kumpir`** yazman yeterli. Gerisi Kumpirde.');
        message.channel.send(son_karar);
        message.channel.awaitMessages(response => response.content === 'kumpir', {
            max: 1,
            time: 30000,
            errors: ['time'],
        }).then(() => {
            message.channel.send(sonuc_sil);
            db.delete(`yetkili_jail.${message.guild.id}`);
        });
		break;

	case 'kick':
        var son_karar = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(`${msg.tag} | Yetki Sıfırlama`, msg.avatarURL)
            .setDescription('**Kick yetkisi sıfırlanacak!** \nKabul ediyorsan 30 saniye içinde **`kumpir`** yazman yeterli. Gerisi Kumpirde.');
        message.channel.send(son_karar);
        message.channel.awaitMessages(response => response.content === 'kumpir', {
            max: 1,
            time: 30000,
            errors: ['time'],
        }).then(() => {
            message.channel.send(sonuc_sil);
            db.delete(`yetkili_kick.${message.guild.id}`);
        });
		break;

	case 'ban':
        var son_karar = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(`${msg.tag} | Yetki Sıfırlama`, msg.avatarURL)
            .setDescription('**Ban yetkisi sıfırlanacak!** \nKabul ediyorsan 30 saniye içinde **`kumpir`** yazman yeterli. Gerisi Kumpirde.');
        message.channel.send(son_karar);
        message.channel.awaitMessages(response => response.content === 'kumpir', {
            max: 1,
            time: 30000,
            errors: ['time'],
        }).then(() => {
            message.channel.send(sonuc_sil);
            db.delete(`yetkili_ban.${message.guild.id}`);
        });
        break;

	case 'hepsi':
        var son_karar = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(`${msg.tag} | Yetki Sıfırlama`, msg.avatarURL)
            .setDescription('**Yetkililer sıfırlanacak!** \nKabul ediyorsan 30 saniye içinde **`kumpir`** yazman yeterli. Gerisi Kumpirde.');
        message.channel.send(son_karar);
        message.channel.awaitMessages(response => response.content === 'kumpir', {
            max: 1,
            time: 30000,
            errors: ['time'],
        }).then(() => {
            message.channel.send(sonuc_sil);
            db.delete(`yetkili_yönetici.${message.guild.id}`);
            db.delete(`yetkili_temizle.${message.guild.id}`);
            db.delete(`yetkili_mute.${message.guild.id}`);
            db.delete(`yetkili_jail.${message.guild.id}`);
            db.delete(`yetkili_kick.${message.guild.id}`);
            db.delete(`yetkili_ban.${message.guild.id}`);
        });
        break;

	default:
		const yetkiler_bilgi = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setThumbnail(client.user.avatarURL)
			.setAuthor(`${msg.tag} | Moderasyon Yetkili Sıfırlar`, msg.avatarURL)
            .addField(prefix + 'yetkili-sıfırla yönetici', 'Yönetim yetkilisinin rolünü sıfırlar.')
            .addField(prefix + 'yetkili-sıfırla temizle', 'Yazı kanallarını temizleme yetkilisinin rolünü sıfırlar.')
            .addField(prefix + 'yetkili-sıfırla mute', 'Mute yetkilisinin rolünü sıfırlar.')
            .addField(prefix + 'yetkili-sıfırla jail', 'Jail yetkilisinin rolünü sıfırlar.')
            .addField(prefix + 'yetkili-sıfırla kick', 'Kick yetkilisinin rolünü sıfırlar.')
            .addField(prefix + 'yetkili-sıfırla ban', 'Ban yetkilisinin rolünü sıfırlar.')
            .addField(prefix + 'yetkili-sıfırla hepsi', 'Tüm yetkilileri sıfırlar.')
			.addField('🔗 Bağlantılar', '[<a:join:710814387098746891> Botu Ekle](https://discord.com/api/oauth2/authorize?client_id=713248439743283271&permissions=8&scope=bot) | [<:onaylicoder:713490825027256351> Yardım Sunucusu](https://discord.gg/qdSCtaB) | [<:galp:727428165965709383> Oy ver]((https://top.gg/bot/713248439743283271) | [<:youtube:727428171351326802> YouTube](https://www.youtube.com/channel/UC6JFZfr2I0gw1UTJpkDS3mw)')
			.setFooter(`${client.user.username} | Her daim ilerleyeceğiz...`, client.user.avatarURL);
		message.channel.send(yetkiler_bilgi);
	}
};
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 4,
};
exports.help = {
    name: 'yetkili-sıfırla',
    description: 'Moderasyon komutlarını kullanabilecek rolü sıfırlar.',
    usage: 'yetkili-sıfırla kayıt',
};
