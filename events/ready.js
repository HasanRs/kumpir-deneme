/* eslint-disable no-var */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const chalk = require('chalk');
const Discord = require('discord.js');
const ayarlar = require('../config.json');

const prefix = ayarlar.prefix;

module.exports = client => {
	var oynuyor = [
		'-yardım',
		'💖 GHS.NET.TR 💖',
		'Developed by Splax#6271',
	];

	setInterval(function() {
		var random = Math.floor(Math.random() * (oynuyor.length - 0 + 1) + 0);
		client.user.setGame(oynuyor[random]);
	}, 2 * 2000);

	console.log('BOT: Aktif, Komutlar yüklendi!');
	console.log(`BOT: ${client.user.username} ismi ile giriş yapıldı!`);
	client.user.setPresence({
		game: {
			type: 'WATCHING',
			// url: 'https://www.twitch.tv/splaxhz'
			// Değerler:
			// PLAYING: Oynuyor
			// WATCHING: İzliyor
			// LISTENING: Dinliyor
			// STREAMING : Yayında
		},
		status: 'online',
		// Değerler:
		// online: Çevrimiçi
		// dnd: Rahatsız Etmeyin
		// idle: Boşta
	});
	console.log('BOT: Oyun ismi ayarlandı!');
	console.log('BOT: Şu an ' + client.channels.size + ' adet kanala, ' + client.guilds.size + ' adet sunucuya ve ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' kullanıcıya hizmet veriliyor!');

};
