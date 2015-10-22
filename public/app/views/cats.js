var tpl = require('../templates/cats.hbs');
var _ = require('underscore');

var CatsProfileView = require('./cats-profile');
var CatsCollection = require('../collections/cats');

var Parse = require('parse').Parse;

module.exports = Backbone.View.extend({
  events: {
    'click li': 'onClickCat'
  },

  render: function () {
    var self = this;

    if (!this.cats) {
      /*
      var Cats = Parse.Object.extend('Cats');

        (new Parse.Query(Cats))
        .include(['owner'])
        .find()
        .then(function(data){
          self.cats = _.invoke(data, 'toJSON');
          console.log(self.cats);
          self.render();
        });*/
      this.catsCollection = new CatsCollection();
      this.catsCollection.fetch().then(function (){
        self.catsCollection.at(0).growOlder();
        console.log(self.catsCollection.at(0).get('age'));

        self.cats = self.catsCollection.toJSON();
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