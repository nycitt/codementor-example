var tpl = require('../templates/cats.hbs');
var _ = require('underscore');

var CatsProfileView = require('./cats-profile');
var CatsCollection = require('../collections/cats');
var CatView = require('./cat');

var Parse = require('parse').Parse;

module.exports = Backbone.View.extend({
  events: {
    'click li': 'onClickCat'
  },

  render: function () {
    var self = this;

    if (!this.catsCollection) {
      this.catsCollection = new CatsCollection();
      this.catsCollection.fetch().then(function (){
        self.render();
        self.catsCollection.each(function (catModel) {
          new CatView({
            model: catModel
          }).render().$el.appendTo(this.$('.cats'));
        });
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