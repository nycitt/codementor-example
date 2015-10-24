var Parse = require('parse/node');
var Cats = Parse.Object.extend('Cats');

module.exports = {
  get: function (req, res) {
    (new Parse.Query(Cats))
    .include(['owner'])
    .find()
    .then(function(data){
      res.json(data);
    });
  },
  update: function (req, res) {
    new Cats(req.body).save().then(function (){
      res.json(req.body)
    }, function (err){
      console.log(err);
    });
  },
  post: function (req, res) {
    
  },
  delete: function (req, res) {
    //do something with req.body
  },
  
}