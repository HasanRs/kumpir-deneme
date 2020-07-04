/* eslint-disable no-var */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const snekfetch = require('snekfetch');
const crypto = require('crypto');
const { IMGUR_KEY } = process.env;
const yes = ['yes', 'y', 'ye', 'yeah', 'yup', 'yea', 'yeap', 'evet', 'e', 'olur', 'kabul'];
const no = ['no', 'n', 'nah', 'nope', 'hayır', 'h', 'ret', 'olmaz'];

class Util {
	static wait(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	static shuffle(array) {
		const arr = array.slice(0);
		for (let i = arr.length - 1; i >= 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
		return arr;
	}

	static list(arr, conj = 've') {
		const len = arr.length;
		return `${arr.slice(0, -1).join(', ')}${len > 1 ? `${len > 2 ? ',' : ''} ${conj} ` : ''}${arr.slice(-1)}`;
	}

	static shorten(text, maxLen = 2000) {
		return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
	}

	static filterPkmn(arr) {
		const filtered = arr.filter(entry => entry.language.name === 'tr');
		return filtered[Math.floor(Math.random() * filtered.length)];
	}

	static duration(ms) {
		const sec = Math.floor((ms / 1000) % 60).toString();
		const min = Math.floor((ms / (1000 * 60)) % 60).toString();
		const hrs = Math.floor(ms / (1000 * 60 * 60)).toString();
		return `${hrs.padStart(2, '0')}:${min.padStart(2, '0')}:${sec.padStart(2, '0')}`;
	}

	static randomRange(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	static trimArray(arr, maxLen = 10) {
		if (arr.length > maxLen) {
			const len = arr.length - maxLen;
			arr = arr.slice(0, maxLen);
			arr.push(`${len} daha...`);
		}
		return arr;
	}

	static base64(text) {
		return Buffer.from(text).toString('base64');
	}

	static hash(text, algorithm) {
		return crypto.createHash(algorithm).update(text).digest('hex');
	}

	static async randomFromImgurAlbum(album) {
		const { body } = await snekfetch
			.get(`https://api.imgur.com/3/album/${album}`)
			.set({ Authorization: `Client-ID ${IMGUR_KEY}` });
		if (!body.data.images.length) return null;
		return body.data.images[Math.floor(Math.random() * body.data.images.length)].link;
	}

	static cleanXML(text) {
		return text
			.replace(/<br \/>/g, '')
			.replace(/&apos;|&#0?39;/g, '\'')
			.replace(/&mdash;/g, '—')
			.replace(/&ndash;/g, '–')
			.replace(/&quot;|&#0?34;/g, '"')
			.replace(/&lt;|&#0?60;/g, '<')
			.replace(/&gt;|&#0?62;/g, '>')
			.replace(/&amp;|&#0?38;/g, '&')
			.replace(/&eacute;/g, 'é')
			.replace(/\[i\]|\[\/i\]/g, '*');
	}

	static async awaitPlayers(msg, max, min, { text = 'oyuna katıl', time = 30000 } = {}) {
		const joined = [];
		joined.push(msg.author.id);
		const filter = res => {
			if (msg.author.bot) return false;
			if (joined.includes(res.author.id)) return false;
			if (res.content.toLowerCase() !== text.toLowerCase()) return false;
			joined.push(res.author.id);
			return true;
		};
		const verify = await msg.channel.awaitMessages(filter, { max, time });
		verify.set(msg.id, msg);
		if (verify.size < min) return false;
		return verify.map(message => message.author);
	}

	static async verify(channel, user, time = 30000) {
		const filter = res => {
			const value = res.content.toLowerCase();
			return res.author.id === user.id && (yes.includes(value) || no.includes(value));
		};
		const verify = await channel.awaitMessages(filter, {
			max: 1,
			time,
		});
		if (!verify.size) return 0;
		const choice = verify.first().content.toLowerCase();
		if (yes.includes(choice)) return true;
		if (no.includes(choice)) return false;
		return false;
	}
}

module.exports = Util;
