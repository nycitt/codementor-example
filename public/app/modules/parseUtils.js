var _ = require('underscore');

module.exports = {
  toJSON: function (parseObj) {
    if(_.isArray(parseObj)) {
      var out = [];
      _.each(parseObj, function (prop, index) {
        out[index] = this.toJSON(prop);
      }, this);
      return out;
    } else {
      var out = parseObj.toJSON();
      _.each(out, function (prop, index) {
        if(prop.toJSON || _.isArray(prop)) {
          out[index] = this.toJSON(prop);
        }
      }, this);
      return out;
    }
  }
}