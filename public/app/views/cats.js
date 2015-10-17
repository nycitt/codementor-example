var tpl = require('../templates/cats.hbs');
var _ = require('underscore');

var CatsProfileView = require('./cats-profile');

var Parse = require('parse').Parse;

module.exports = Backbone.View.extend({
  events: {
    'click li': 'onClickCat'
  },

  render: function () {
    var self = this;

    if (!this.cats) {
      var Cats = Parse.Object.extend('Cats');

        (new Parse.Query(Cats))
        .find()
        .then(function(data){
          self.cats = _.invoke(data, 'toJSON');
          console.log(self.cats);
          self.render();
        });
      return this;
    }

    var data = {
      cats: self.cats
    };

    this.catsProfile = new CatsProfileView({

    }).render();

    this.$el.html(
      tpl(data)
    );

    //jQuery stuff goes here
    
    return this;
  },

  onClickCat: function (e) {
    console.log($(e.target).data('id'));
  }
});