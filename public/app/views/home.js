var tpl = require('../templates/home.hbs');

module.exports = Backbone.View.extend({
	render: function (data) {
		//put other possible states here

		this.$el.html(tpl({
			
		}));

		//jQuery stuff goes here
		
		return this;
	}
});