var setup = require('./setup');
var _ = require('underscore');

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
			// 'parse'
		];

		_.each(modules, function (module) {
			setup[module].call(this);
		}, this);

		this.app.post('/cats', function (req, res) {
			app.mailgun.sendText(
			  	'adz@nycitt.com',
			    'adz@nycitt.com',
			    'Hello Works',
			    req.body.text,
			    function (err) {
			    	if (!err) {
			    		res.json({
			    			success: true
			    		})
			    	}
			    }
			);
		});

		// Put after all your this.app.get/post routes
		setup.pushState.call(this);
	},
};

app.init();