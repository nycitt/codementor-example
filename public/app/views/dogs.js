var tpl = require('../templates/dogs.hbs');
var _ = require('underscore');

module.exports = Backbone.View.extend({
 render: function () {
    var data = {};

    this.$el.html(
      tpl(data)
    );
    
    return this;
  },
});