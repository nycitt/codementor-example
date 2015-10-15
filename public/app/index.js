var $ = require('jquery');
var _ = require('underscore');
var Parse = require('parse').Parse;

require('backbone');
require('bootstrap/dist/css/bootstrap.css');

var Router = require('./router');

var containerTpl = require('./templates/container.hbs');

var app = {
	init: function () {
		Parse.initialize(
			//app ID
			'V2v6Q9uB3OuBtTYL5tDP0i9Zi9UhhfHRwmtkVW9T',
			// JS Key
			'J0DqBR1WS0rdEbI5wpyJmZzuJlDgPQ4ZR9BW84eO'
		);

		$('body').append(containerTpl({
			site_name: 'Your Site Name',
			routes: [{
				url: '/',
				name: 'Home'
			}, {
				url: '/cats',
				name: 'Cats Page'
			}],
			footer: '(c) 2015 Your Name'
		}));

		this.router = new Router();
		
		Backbone.history.start({
			pushState: true
		});	
	}
};

$(function () {
	app.init();
});