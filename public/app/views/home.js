var tpl = require('../templates/home.hbs');
var Parse = require('parse').Parse;

module.exports = Backbone.View.extend({
	events: {
    'submit .signup-form': 'onSignupFormSubmit',
    'submit .login-form': 'onSignInFormSubmit'
  },
  render: function (data) {
		//Is there a user logged in?
    if(Parse.User.current()) {
      window.location = '/cats';
      return this;
    }

		this.$el.html(tpl({
		}));

		//jQuery stuff goes here
		
		return this;
	},
  onSignupFormSubmit: function (e) {
    var username = this.$('.signup-form [name="email"]').val();
    var password = this.$('.signup-form [name="password"]').val();
    new Parse.User({
      username: username,
      password: password
    }).save().then(function () {
      return Parse.User.logIn(username, password);
    }).then(function () {
      window.location = '/cats';
    });

    e.preventDefault();
    return false;
  },

  onSignInFormSubmit : function (e) {
    var username = this.$('.login-form [name="email"]').val();
    var password = this.$('.login-form [name="password"]').val();
    
    Parse.User.logIn(username, password).then(function () {
      window.location = '/cats';
    });

    e.preventDefault();
    return false;
  }

});