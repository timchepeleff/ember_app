import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('task', {
      state: 'borrowed',
      category:this.modelFor('categories/show')
    });
  },
  actions: {
    save(task) {
      var _this = this;
      task.save().then(function(task) {
        _this.transitionTo('categories.show');
      });
    },
    cancel: function() {
      this.transitionTo('categories');
    }
  }
});
