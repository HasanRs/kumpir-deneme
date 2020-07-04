/* eslint-disable indent */
/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */
/* eslint-disable no-empty */
/* eslint-disable no-var */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const ayarlar = require('../../config.json');

const prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
	var msg = message.author;

	const sahip = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setAuthor(`${msg.tag} | Sahip Yardım`, msg.avatarURL)
		.addField(prefix + 'yetkili-ayarla', 'Moderasyon komutlarını kullanabilecek rolü ayarlar.eçici oda sistemini kurar.')
		.addField(prefix + 'yetkili-sıfırla', 'Moderasyon komutlarını kullanabilecek rolü sıfırlar.')
	//  .addField(prefix + '', '')
		.addField('🔗 Bağlantılar', '[<a:join:710814387098746891> Botu Ekle](https://discord.com/api/oauth2/authorize?client_id=713248439743283271&permissions=8&scope=bot) | [<:onaylicoder:713490825027256351> Yardım Sunucusu](https://discord.gg/qdSCtaB) | [<:galp:727428165965709383> Oy ver]((https://top.gg/bot/713248439743283271/vote) | [<:youtube:727428171351326802> YouTube](https://www.youtube.com/channel/UC6JFZfr2I0gw1UTJpkDS3mw)')
		.setFooter(`${client.user.username} | "Medeni olmayan insanlar, medeni olanların ayakları altında kalmaya mahkumdurlar."`, client.user.avatarURL);
	message.channel.send(sahip);

};
exports.conf = {
	enable: true,
	guildOnly: true,
	aliases: [],
	permLevel: 0,
};
exports.help = {
	name: 'sahip',
	description: 'Sahip kategorisindeki komutları ve açıklamalarını gösterir.',
	usage: 'yardım-sahip',
};
