var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
  idAttribute: 'objectId',
  growOlder: function () {
    this.set('age', this.get('age') + 1);
  }
});