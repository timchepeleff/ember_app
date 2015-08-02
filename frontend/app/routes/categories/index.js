import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('category');
  },
   actions: {
    delete(category) {
      category.destroyRecord();
      return false;
    }
  }
});
