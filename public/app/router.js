var HomeView = require('./views/home');
var CatsView = require('./views/cats');
var DogsView = require('./views/dogs');

module.exports = Backbone.Router.extend({
	initialize: function () {

  },

  routes: {
		'': function () {
			appendView(new HomeView().render());
		},
    'cats': function () {
      appendView(new CatsView().render());
    },
    'dogs': function () {
      appendView(new DogsView().render());
    }
	}
});

function appendView(view) {
	$('.main')
		.empty()
		.append(view.$el);
}