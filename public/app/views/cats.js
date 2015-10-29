var tpl = require('../templates/cats.hbs');
var _ = require('underscore');

var CatsProfileView = require('./cats-profile');
var BaseView = require('./baseView');

var parseUtils = require('../modules/parseUtils');

var Parse = require('parse').Parse;

module.exports = BaseView.extend({
  events: {
    'click li': 'onClickCat'
  },

  render: function () {
    var self = this;
    this.subViews = [];

    if (!this.cats) {
      var Cats = Parse.Object.extend('Cats');
      (new Parse.Query(Cats))
      .include(['owner'])
      .find()
      .then(function(data){
        self.cats = parseUtils.toJSON(data);
        self.render();
      });
      return this;
    }

    //do something with self.cats

    this.$el.html(
      tpl({
        cats: this.cats
      })
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