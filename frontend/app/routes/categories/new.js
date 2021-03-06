import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('category');
  },
  actions: {
    save(category) {
      var _this = this;
      category.save().then(function(category) {
        _this.transitionTo('categories.show', category);
      });
    },
    cancel: function() {
      this.transitionTo('categories');
    }
  }
});
