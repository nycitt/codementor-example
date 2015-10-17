var tpl = require('../templates/cats-profile.hbs');
var _ = require('underscore');

module.exports = Backbone.View.extend({
  initialize : function (opts) {
    this.cat = opts.cat;
  },

  render: function () {
    this.$el.html(tpl(this.cat));
  }
})