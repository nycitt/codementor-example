var tpl = require('../templates/cats.hbs');
var _ = require('underscore');

var CatsProfileView = require('./cats-profile');

var Parse = require('parse').Parse;

module.exports = Backbone.View.extend({
  events: {
    'click li': 'onClickCat'
  },

  className: 'cats',

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
      cats: _.map(self.cats, function (cat, index) {
        cat.zIndex = index;
        cat.left = index * 5 + 'px';
        cat.top = index * 5 + 'px';
        return cat;
      })
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
<<<<<<< Updated upstream
    console.log($(e.target).data('id'));
=======
    $(e.target).remove();
>>>>>>> Stashed changes
  }
});