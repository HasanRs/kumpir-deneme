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
	const msg = message.author;

	const genelkomut = 0;
	const oyunkomut = 0;
	const eglencekomut = 0;
	const moderasyonkomut = 0;
	const korumakomut = 0;
	const sahipkomut = 2;

	switch (args[0]) {
	case 'genel':
		const genel = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setAuthor(`${msg.tag} | Genel Yardım`, msg.avatarURL)
		//	.addField(prefix + '', '')
			.addField('🔗 Bağlantılar', '[<a:join:710814387098746891> Botu Ekle](https://discord.com/api/oauth2/authorize?client_id=713248439743283271&permissions=8&scope=bot) | [<a:party:710814448427991092> Oy Ver](https://top.gg/bot/713248439743283271/vote) | [<:kumpir:713390823508803614> Destek Sunucusu](https://discord.gg/UVDpCEH)')
			.setFooter(`${client.user.username} | "Bilim, gerçeği bilmektir."`, client.user.avatarURL);
		message.channel.send(genel);
		break;

	case 'oyun':
		const oyun = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setAuthor(`${msg.tag} | Oyun Yardım`, msg.avatarURL)
		//	.addField(prefix + '', '')
			.addField('🔗 Bağlantılar', '[<a:join:710814387098746891> Botu Ekle](https://discord.com/api/oauth2/authorize?client_id=713248439743283271&permissions=8&scope=bot) | [<a:party:710814448427991092> Oy Ver](https://top.gg/bot/713248439743283271/vote) | [<:kumpir:713390823508803614> Destek Sunucusu](https://discord.gg/UVDpCEH)')
			.setFooter(`${client.user.username} | "Hayatta en hakiki mürşit, ilimdir."`, client.user.avatarURL);
		message.channel.send(oyun);
		break;

	case 'eglence':
	case 'eğlence':
		const eglence = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setAuthor(`${msg.tag} | Eğlence Yardım`, msg.avatarURL)
		//	.addField(prefix + '', '')
			.addField('🔗 Bağlantılar', '[<a:join:710814387098746891> Botu Ekle](https://discord.com/api/oauth2/authorize?client_id=713248439743283271&permissions=8&scope=bot) | [<a:party:710814448427991092> Oy Ver](https://top.gg/bot/713248439743283271/vote) | [<:kumpir:713390823508803614> Destek Sunucusu](https://discord.gg/UVDpCEH)')
			.setFooter(`${client.user.username} | "Fikirler zorla ve şiddetle top ve tüfekle asla öldürülemez!"`, client.user.avatarURL);
		message.channel.send(eglence);
		break;

	case 'moderasyon':
		const moderasyon = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setAuthor(`${msg.tag} | Moderasyon Yardım`, msg.avatarURL)
		//	.addField(prefix + '', '')
			.addField('🔗 Bağlantılar', '[<a:join:710814387098746891> Botu Ekle](https://discord.com/api/oauth2/authorize?client_id=713248439743283271&permissions=8&scope=bot) | [<a:party:710814448427991092> Oy Ver](https://top.gg/bot/713248439743283271/vote) | [<:kumpir:713390823508803614> Destek Sunucusu](https://discord.gg/UVDpCEH)')
			.setFooter(`${client.user.username} | "Bağımsızlık, ölmesini toplumların hakkıdır."`, client.user.avatarURL);
		message.channel.send(moderasyon);
		break;

	case 'koruma':
		const koruma = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setAuthor(`${msg.tag} | Koruma Yardım`, msg.avatarURL)
			.setDescription('Merhaba, koruma için sunucuna **yargı sistemi** eklemeyi unutma! **Yargı** sistemi ne bilmiyorsan destek sunucusuna gelebilirsin. Orda sana hazır sunucu şablonları verebiliriz veya **yargı sisteminin** mantığını anlatabiliriz.')
		//	.addField(prefix + '', '')
			.addField('🔗 Bağlantılar', '[<a:join:710814387098746891> Botu Ekle](https://discord.com/api/oauth2/authorize?client_id=713248439743283271&permissions=8&scope=bot) | [<a:party:710814448427991092> Oy Ver](https://top.gg/bot/713248439743283271/vote) | [<:kumpir:713390823508803614> Destek Sunucusu](https://discord.gg/UVDpCEH)')
			.setFooter(`${client.user.username} | "En büyük savaş, cahilliğe karşı yapılan savaştır."`, client.user.avatarURL);
		message.channel.send(koruma);
		break;

	case 'sahip':
		const sahip = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setAuthor(`${msg.tag} | Sahip Yardım`, msg.avatarURL)
			.addField(prefix + 'yetkili-ayarla', 'GModerasyon komutlarını kullanabilecek rolü ayarlar.eçici oda sistemini kurar.')
			.addField(prefix + 'yetkili-sıfırla', 'Moderasyon komutlarını kullanabilecek rolü sıfırlar.')
		//	.addField(prefix + '', '')
			.addField('🔗 Bağlantılar', '[<a:join:710814387098746891> Botu Ekle](https://discord.com/api/oauth2/authorize?client_id=713248439743283271&permissions=8&scope=bot) | [<a:party:710814448427991092> Oy Ver](https://top.gg/bot/713248439743283271/vote) | [<:kumpir:713390823508803614> Destek Sunucusu](https://discord.gg/UVDpCEH)')
			.setFooter(`${client.user.username} | "Medeni olmayan insanlar, medeni olanların ayakları altında kalmaya mahkumdurlar."`, client.user.avatarURL);
		message.channel.send(sahip);
		break;

	default:
		const yardim = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setAuthor(`${msg.tag} | Yardım Kategorileri`, msg.avatarURL)
			.setImage('https://cdn.discordapp.com/attachments/713471460836114539/713480527432253467/image0.jpg')
			.setDescription(`**❀** Selam, daha fazla yardım için aşağıdaki kategorilerden istediğin bir tanesini yazabilirsin. Bir hata ile karşılaştıysan, botun kullanımını bilmiyorsan, bot hakkında yardım istiyorsan **\`${prefix}bağlantılar\`** kısmından destek sunucuma katılabilirsin. Bota eklenmesini istediğin ekstra bir özellik varsa **\`${prefix}eklensin <mesaj>\`** komutunu kullanarak, bana nasıl bir komut olacağını anlatabilirsin. Oylama kararıyla bota eklerim ve sana sunucuda **\`AR-GE of Kumpir\`** rolünüde veririm. Eğer bir komute hata verdiyse, ss alıp hızlıresim tarzı bir siteye yükleyin sonra **\`${prefix}hata <komut> <ss link & mesaj>\`** komutunu kullanıp en kısa sürede botun düzelmesini bekleyin. \nTeşekkürler. \n\n🃏 Kategoriler`)
			.addField(`\
				<a:sekil3:724322841037635675> Genel (${genelkomut})`,
			'**`' + prefix + 'genel`**\nGenel kullanıcıların zaman geçirebilmek için kullanabileceği komutlar yer almaktadır.',
			true)
			.addField(`\
				🎮 Oyun (${oyunkomut})`,
			'**`' + prefix + 'oyun`**\nZaman geçirebilmek için yapılmış oyun komutları yer almaktadır.',
			true)
			.addField(`\
				<a:party:710814448427991092> Eğlence (${eglencekomut})`,
			'**`' + prefix + 'eğlence`**\nHerkes için eğlenerek geçirebilmesi için yapılmış komutlar yer almaktadır.',
			true)
			.addField(`\
				👮‍♂️ Moderasyon (${moderasyonkomut})`,
			'**`' + prefix + 'moderasyon`**\nSunucuda yetkililerin kullanabileceği komutlar yer almaktadır.',
			true)
			.addField(`\
				🛡 Koruma (${korumakomut})`,
			'**`' + prefix + 'koruma`**\nYöneticilerin sunucuyu korumak için kullanabileceği komutlar yer almaktadır.',
			true)
			.addField(`\
				<:tac:710814515473678399> Sahip (${sahipkomut})`,
			'**`' + prefix + 'sahip`**\nSunucu sahibinin kullanabileceği komutlar yer almaktadır.',
			true)
			.addField(
				'🔗 Bağlantılar',
				'[<a:join:710814387098746891> Botu Ekle](https://discord.com/api/oauth2/authorize?client_id=713248439743283271&permissions=8&scope=bot) \
					| \
					[<:onaylicoder:713490825027256351> Yardım Sunucusu](https://discord.gg/qdSCtaB) \
					| \
					[<:galp:727428165965709383> Oy ver](https://top.gg/bot/713248439743283271/vote) \
					| \
					[<:youtube:727428171351326802> YouTube](https://www.youtube.com/channel/UC6JFZfr2I0gw1UTJpkDS3mw) \
				')
			.setFooter(`${client.user.username} | "Büyük şeyleri büyük milletler yapar."`, client.user.avatarURL);
		message.channel.send(yardim);
	}
};
exports.conf = {
	enable: true,
	guildOnly: true,
	aliases: ['yardim', 'help', 'kategoriler'],
	permLevel: 0,
};
exports.help = {
	name: 'yardım',
	description: 'Botta ekli olan kategorileri gösterir.',
	usage: 'yardım',
};
