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

	switch (args[0]) {
	case 'yönetici':
	case 'throne':
        let rolthorne = message.mentions.roles.first();
        if(!rolthorne) {
            message.reply('Lütfen geçerli bir **rol** etiketleyiniz!');
            return;
        }
        let rolthornedb = db.set(`yetkili_yönetici.${message.guild.id}`, rolthorne.id);
        message.channel.send(`Yönetici rolünüz **\`${rolthorne.name}\`** olarak belirlenmiştir.`);
		break;

	case 'temizle':
	case 'clear':
        let rolclear = message.mentions.roles.first();
        if(!rolclear) {
            message.reply('Lütfen geçerli bir **rol** etiketleyiniz!');
            return;
        }
        let rolcleardb = db.set(`yetkili_temizle.${message.guild.id}`, rolclear.id);
        message.channel.send(`Temizle rolünüz **\`${rolclear.name}\`** olarak belirlenmiştir.`);

        break;
        /*
	case 'kayıt':
	case 'register':
        let rolregister = message.mentions.roles.first();
        if(!rolregister) {
            message.reply('Lütfen geçerli bir **rol** etiketleyiniz!');
            return;
        }
        let rolregisterdb = db.set(`yetkili_kayıt.${message.guild.id}`, rolregister.id);
        message.channel.send(`Kayıt rolünüz **\`${rolregister.name}\`** olarak belirlenmiştir.`);
        break;
        */
	case 'mute':
        let rolmute = message.mentions.roles.first();
        if(!rolmute) {
            message.reply('Lütfen geçerli bir **rol** etiketleyiniz!');
            return;
        }
        let rolmutedb = db.set(`yetkili_mute.${message.guild.id}`, rolmute.id);
        message.channel.send(`Mute rolünüz **\`${rolmute.name}\`** olarak belirlenmiştir.`);
		break;

	case 'jail':
        let roljail = message.mentions.roles.first();
        if(!roljail) {
            message.reply('Lütfen geçerli bir **rol** etiketleyiniz!');
            return;
        }
        let roljaildb = db.set(`yetkili_jail.${message.guild.id}`, roljail.id);
        message.channel.send(`Yönetici rolünüz **\`${roljail.name}\`** olarak belirlenmiştir.`);
		break;

	case 'kick':
        let rolkick = message.mentions.roles.first();
        if(!rolkick) {
            message.reply('Lütfen geçerli bir **rol** etiketleyiniz!');
            return;
        }
        let rolkickdb = db.set(`yetkili_kick.${message.guild.id}`, rolkick.id);
        message.channel.send(`Yönetici rolünüz **\`${rolkick.name}\`** olarak belirlenmiştir.`);
		break;

	case 'ban':
        let rolban = message.mentions.roles.first();
        if(!rolban) {
            message.reply('Lütfen geçerli bir **rol** etiketleyiniz!');
            return;
        }
        let rolbandb = db.set(`yetkili_ban.${message.guild.id}`, rolban.id);
        message.channel.send(`Yönetici rolünüz **\`${rolban.name}\`** olarak belirlenmiştir.`);
        break;

	default:
		const yetkiler_bilgi = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setThumbnail(client.user.avatarURL)
			.setAuthor(`${msg.tag} | Moderasyon Yetkili Ayarlar`, msg.avatarURL)
			.addField(prefix + 'yetkili-ayarla yönetici @rol', 'Yönetim yetkilisinin rolünü seçer. \nTüm moderasyon komutlarını kullanabilir.')
			.addField(prefix + 'yetkili-ayarla temizle @rol', `Yazı kanallarını temizleme yetkilisinin rolünü seçer. \n${prefix}temizle <1-99>`)
			.addField(prefix + 'yetkili-ayarla mute @rol', `Mute yetkilisinin rolünü seçer. \n${prefix}mute @kullanıcı 1m <sebep>`)
			.addField(prefix + 'yetkili-ayarla jail @rol', `Jail yetkilisinin rolünü seçer. \n${prefix}jail @kullanıcı 1m <sebep>`)
			.addField(prefix + 'yetkili-ayarla kick @rol', `Kick yetkilisinin rolünü seçer. \n${prefix}kick <sebep>`)
			.addField(prefix + 'yetkili-ayarla ban @rol', `Ban yetkilisinin rolünü seçer. \n${prefix}ban @kullanıcı <sebep> \n${prefix}süreli-ban @kullanıcı 1m <sebep>`)
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
	name: 'yetkili-ayarla',
	description: 'Moderasyon komutlarını kullanabilecek rolü ayarlar.',
	usage: 'yetkili-ayarla kayıt @rol',
};
