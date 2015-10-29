var tpl = require('../templates/cat.hbs')
module.exports = Backbone.View.extend({
  events: {
    'click .submit': 'onSubmit'
  },
  render: function () {
    this.$el.html(tpl(this.model.toJSON()));

    return this;
  },
  onSubmit: function () {
    this.model.save({
      name: this.$('.name').val()
    });
    return false;
  }
});