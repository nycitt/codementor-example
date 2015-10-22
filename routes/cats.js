var cats = [{
  name: 'Alvin',
  age: 10
}];

module.exports = {
  get: function (req, res) {
    res.json(cats)
  },
  post: function (req, res) {
    cats.push(req.body);
    res.json(req.body);
    console.log(cats);
  },
  delete: function (req, res) {
    //do something with req.body
  },
  update: function (req, res) {
    //do something with req.body
  }
}