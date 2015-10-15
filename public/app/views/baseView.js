
module.exports = Backbone.View.extend({
   initialize: function () {
    this.subViews = {};
   },

   remove: function () {
    _.each(this.subViews, function (subView) {
      subView.remove();
    });

    Backbone.View.prototype.remove(); 
   }
});