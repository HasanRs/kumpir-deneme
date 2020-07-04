/* eslint-disable indent */
/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */
/* eslint-disable no-empty */
/* eslint-disable no-var */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const Discord = require('discord.js');

// ----- Modül Bölümü ----- \\
const fs = require('fs');

// ----- Client Bölümü ----- \\
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

// ----- Util & Events Bölümü ----- \\
require('./util/eventLoader')(client);

// ----- Ayarlar Bölümü ----- \\
const config = require('./config.json'); // eslint-disable-next-line no-unused-vars
const { resolve } = require('path');
const { rejects } = require('assert');
const prefix = config.prefix; // eslint-disable-next-line no-unused-vars
const splax = config.splax; // eslint-disable-next-line no-unused-vars
const token = config.token; // eslint-disable-next-line no-unused-vars

client.login(token);
// ------ Yardım Komutlar Bölümü -------- \\
fs.readdir('./komutlar/yardım', (err, files) => {
	console.log(`\n// (${files.length}) Yardım Komutlar Bölümü \\\\`);
	if (err) {
		throw err;
	}
	let jsFile = files.filter(f => f.endsWith('.js'));
	if(jsFile.length <= 0) return console.log('JS dosyası yok! \n');
	files.forEach((file) => {
		if (!file.endsWith('.js')) {
			return;
		}
		let Komut = require(`./komutlar/yardım/${file}`);
		let Komutismi = file.split('.')[0];
		client.commands.set(Komut.help.name, Komut);
		console.log(`Komut : ${Komutismi}`);
		if (Komut.help.aliases) {
			Komut.help.aliases.forEach(alias => {
				client.aliases.set(alias, Komut.help.name);
			});
		}
	});
	console.log('');
});

client.reload = command => {
	return new Promise((resolve, reject) => {
		try {
			delete require.cache[require.resolve(`./komutlar/yardım/${command}`)];
			let Komut = require(`./komutlar/yardım/${command}`);
			client.commands.delete(command);
			client.aliases.forEach((Komut, alias) => {
				if (Komut === command) client.aliases.delete(alias);
			});
			client.commands.set(command, Komut);
			Komut.conf.aliases.forEach(alias => {
				client.aliases.set(alias, Komut.help.name);
			});
			resolve();
		}
		catch (e) {
			reject(e);
		}
	});
};

client.load = command => {
	return new Promise((resolve, reject) => {
		try {
			let Komut = require(`./komutlar/yardım/${command}`);
			client.commands.set(command, Komut);
			Komut.conf.aliases.forEach(alias => {
				client.aliases.set(alias, Komut.help.name);
			});
			resolve();
		}
		catch (e) {
			reject(e);
		}
	});
};

// ------- Kayıt Sistemi Bölümü -------- \\
fs.readdir('./komutlar/kayıt', (err, files) => {
	console.log(`// (${files.length}) Kayıt Sistemi Bölümü \\\\`);
	if (err) {
		return console.error(err);
	}
	let jsFile = files.filter(f => f.endsWith('.js'));
	if(jsFile.length <= 0) return console.log('JS dosyası yok! \n');
	files.forEach((file) => {
		if (!file.endsWith('.js')) {
			return;
		}
		let Komut = require(`./komutlar/kayıt/${file}`);
		let Komutismi = file.split('.')[0];
		client.commands.set(Komut.help.name, Komut);
		console.log(`Kayıt : ${Komutismi}`);
		if (Komut.help.aliases) {
			Komut.help.aliases.forEach(alias => {
				client.aliases.set(alias, Komut.help.name);
			});
		}
	});
	console.log('');
});

// ------ Eğlence Komutlar Bölümü ------- \\
fs.readdir('./komutlar/eglence', (err, files) => {
	console.log(`// (${files.length}) Eğlence Komutlar Bölümü \\\\`);
	if (err) {
		return console.error(err);
	}
	let jsFile = files.filter(f => f.endsWith('.js'));
	if(jsFile.length <= 0) return console.log('JS dosyası yok! \n');
	files.forEach((file) => {
		if (!file.endsWith('.js')) {
			return;
		}
		let Komut = require(`./komutlar/eglence/${file}`);
		let Komutismi = file.split('.')[0];
		client.commands.set(Komut.help.name, Komut);
		console.log(`Komut : ${Komutismi}`);
		if (Komut.help.aliases) {
			Komut.help.aliases.forEach(alias => {
				client.aliases.set(alias, Komut.help.name);
			});
		}
	});
	console.log('');
});

client.reload = command => {
	return new Promise((resolve, reject) => {
		try {
			delete require.cache[require.resolve(`./komutlar/eglence/${command}`)];
			let Komut = require(`./komutlar/eglence/${command}`);
			client.commands.delete(command);
			client.aliases.forEach((Komut, alias) => {
				if (Komut === command) client.aliases.delete(alias);
			});
			client.commands.set(command, Komut);
			Komut.conf.aliases.forEach(alias => {
				client.aliases.set(alias, Komut.help.name);
			});
			resolve();
		}
		catch (e) {
			reject(e);
		}
	});
};

client.load = command => {
	return new Promise((resolve, reject) => {
		try {
			let Komut = require(`./komutlar/eglence/${command}`);
			client.commands.set(command, Komut);
			Komut.conf.aliases.forEach(alias => {
				client.aliases.set(alias, Komut.help.name);
			});
			resolve();
		}
		catch (e) {
			reject(e);
		}
	});
};

// ----- Moderasyon Komutlar Bölümü ----- \\
fs.readdir('./komutlar/moderasyon', (err, files) => {
	console.log(`// (${files.length}) Moderasyon Komutlar Bölümü \\\\`);
	if (err) {
		return console.error(err);
	}
	let jsFile = files.filter(f => f.endsWith('.js'));
	if(jsFile.length <= 0) return console.log('JS dosyası yok! \n');
	files.forEach((file) => {
		if (!file.endsWith('.js')) {
			return;
		}
		let Komut = require(`./komutlar/moderasyon/${file}`);
		let Komutismi = file.split('.')[0];
		client.commands.set(Komut.help.name, Komut);
		console.log(`Komut : ${Komutismi}`);
		if (Komut.help.aliases) {
			Komut.help.aliases.forEach(alias => {
				client.aliases.set(alias, Komut.help.name);
			});
		}
	});
	console.log('');
});

client.reload = command => {
	return new Promise((resolve, reject) => {
		try {
			delete require.cache[require.resolve(`./komutlar/moderasyon/${command}`)];
			let Komut = require(`./komutlar/moderasyon/${command}`);
			client.commands.delete(command);
			client.aliases.forEach((Komut, alias) => {
				if (Komut === command) client.aliases.delete(alias);
			});
			client.commands.set(command, Komut);
			Komut.conf.aliases.forEach(alias => {
				client.aliases.set(alias, Komut.help.name);
			});
			resolve();
		}
		catch (e) {
			reject(e);
		}
	});
};

client.load = command => {
	return new Promise((resolve, reject) => {
		try {
			let Komut = require(`./komutlar/moderasyon/${command}`);
			client.commands.set(command, Komut);
			Komut.conf.aliases.forEach(alias => {
				client.aliases.set(alias, Komut.help.name);
			});
			resolve();
		}
		catch (e) {
			reject(e);
		}
	});
};

// ------- Sahip Komutlar Bölümü -------- \\
fs.readdir('./komutlar/sahip', (err, files) => {
	console.log(`// (${files.length}) Sahip Komutlar Bölümü \\\\`);
	if (err) {
		return console.error(err);
	}
	let jsFile = files.filter(f => f.endsWith('.js'));
	if(jsFile.length <= 0) return console.log('JS dosyası yok!\n');
	files.forEach((file) => {
		if (!file.endsWith('.js')) {
			return;
		}
		let Komut = require(`./komutlar/sahip/${file}`);
		let Komutismi = file.split('.')[0];
		client.commands.set(Komut.help.name, Komut);
		console.log(`Komut : ${Komutismi}`);
		if (Komut.help.aliases) {
			Komut.help.aliases.forEach(alias => {
				client.aliases.set(alias, Komut.help.name);
			});
		}
	});
	console.log('');
});

client.reload = command => {
	return new Promise((resolve, reject) => {
		try {
			delete require.cache[require.resolve(`./komutlar/sahip/${command}`)];
			let Komut = require(`./komutlar/sahip/${command}`);
			client.commands.delete(command);
			client.aliases.forEach((Komut, alias) => {
				if (Komut === command) client.aliases.delete(alias);
			});
			client.commands.set(command, Komut);
			Komut.conf.aliases.forEach(alias => {
				client.aliases.set(alias, Komut.help.name);
			});
			resolve();
		}
		catch (e) {
			reject(e);
		}
	});
};

client.load = command => {
	return new Promise((resolve, reject) => {
		try {
			let Komut = require(`./komutlar/sahip/${command}`);
			client.commands.set(command, Komut);
			Komut.conf.aliases.forEach(alias => {
				client.aliases.set(alias, Komut.help.name);
			});
			resolve();
		}
		catch (e) {
			reject(e);
		}
	});
};

// ------- Komutlar permlvl Bölümü -------- \\
client.elevation = message => {
	if (!message.guild) {
		return;
	}
	let permlvl = 0;
	if (message.member.hasPermission('MANAGE_MESSAGES')) permlvl = 1;
	if (message.member.hasPermission('BAN_MEMBERS')) permlvl = 2;
	if (message.member.hasPermission('ADMINISTRATOR')) permlvl = 3;
	if (message.guild.owner.id === message.author.id) permlvl = 4;
	if (config.splax.includes(message.author.id)) permlvl = 5;
	return permlvl;
};

// \\_______________________________________________________________________________// \\
