var setup = require('./setup');
var _ = require('underscore');
var cats = require('./routes/cats');

var app = {
	init: function () {
		//comment in the tools you want to use
		var modules = [
			'config',
			'logging',
			'server',
			'socket',
			'localTunnel',
			// 'twilio',
			'mailgun',
			'parse'
		];

		_.each(modules, function (module) {
			setup[module].call(this);
		}, this);

		this.app.get('/api/cats', cats.get);
		this.app.post('/api/cats', cats.post);
		// this.app.update('/cats', cats.post);
		// this.app.delete('/cats', cats.post);

		// Put after all your this.app.get/post routes
		setup.pushState.call(this);
	},
};

app.init();