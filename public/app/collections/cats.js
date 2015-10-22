var CatModel = require('../models/cat');
module.exports = Backbone.Collection.extend({
  url: '/api/cats',
  model: CatModel
});