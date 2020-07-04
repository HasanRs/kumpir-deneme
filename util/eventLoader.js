/* eslint-disable no-var */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
	client.on('message', reqEvent('message'));
	client.on('ready', () => reqEvent('ready')(client));
};
