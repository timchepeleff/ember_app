import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('task');
  },
  actions: {
    save(task) {
      var _this = this;
      task.save().then(function(task) {
        _this.transitionTo('categories.show', task.category_id);
      });
    },
    cancel: function() {
      this.transitionTo('categories');
    }
  }
});
