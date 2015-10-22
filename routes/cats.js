var Parse = require('parse/node');

module.exports = {
  get: function (req, res) {
    var Cats = Parse.Object.extend('Cats');

    (new Parse.Query(Cats))
    .include(['owner'])
    .find()
    .then(function(data){
      res.json(data);
    });
  },
  post: function (req, res) {
    
  },
  delete: function (req, res) {
    //do something with req.body
  },
  update: function (req, res) {
    //do something with req.body
  }
}