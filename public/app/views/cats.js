var tpl = require('../templates/cats.hbs');
var _ = require('underscore');

var CatsProfileView = require('./cats-profile');
var CatsCollection = require('../collections/cats');
var CatView = require('./cat');
var BaseView = require('./baseView');

var Parse = require('parse').Parse;

module.exports = BaseView.extend({
  events: {
    'click li': 'onClickCat'
  },

  render: function () {
    var self = this;
    this.subViews = [];

    if (!this.catsCollection) {
      this.catsCollection = new CatsCollection();
      this.catsCollection.fetch().then(function (){
        self.render();
        self.catsCollection.each(function (cat) {
          self.subViews.push(
            new CatView({
              model: cat
            }).render().$el.appendTo(this.$('.cats'))
          );
        });
      });
      return this;
    }

    this.$el.html(
      tpl()
    );
    //jQuery stuff goes here
    
    return this;
  },

  onClickCat: function (e) {
    console.log($(e.target).data('id'));
  },

  remove: function () {
    // Put all functions to clean up your view's specifics here

    // Calls the Parent's remove function
    return BaseView.prototype.remove.apply(this, arguments);
  }
});