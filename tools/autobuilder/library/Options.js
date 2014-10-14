module.exports = function() {

	var GITHUB_REPO = "dougbtv/docker-asterisk";

	this.parse = function(callback) {

		var opts = require("nomnom")
			.option('gituser', {
				abbr: 'u',
				help: 'Github user',
				required: true
			})
			.option('gitpassword', {
				abbr: 'p',
				help: 'Github password',
				required: true
			})
			.option('gitrepo', {
				abbr: 'r',
				default: GITHUB_REPO,
				help: 'Github repo url in format: user/project'
			})
			.option('irc_channel', {
				default: "##asterisk-autobuilder",
				help: 'The bots chanel on IRC'
			})
			.option('irc_nick', {
				default: "ast-autobuild",
				help: 'The bots nick on IRC'
			})
			.option('irc_realname', {
				default: "asterisk-autobuilder",
				help: 'The bots "real name" on IRC'
			})
			.option('irc_server', {
				default: "chat.freenode.net",
				help: 'The IRC network to connect to'
			})
			.option('irc_debug', {
				flag: true,
				help: 'Show IRC debug output'
			})
			.option('irc_disabled', {
				flag: true,
				help: 'Do not connect to IRC'
			})
			.option('forceupdate', {
				flag: true,
				help: 'Force an update automatically.'
			})
			.parse();

		callback(opts);


	}.bind(this);	

};