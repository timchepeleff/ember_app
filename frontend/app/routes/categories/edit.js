import Ember from 'ember';

export default Ember.Route.extend({

    actions: {
      save(category) {
        var _this = this;
        category.save().then(function(category) {
          _this.transitionTo('categories');
        });
      },
      cancel(category) {
        this.transitionTo('categories');
      }
    }
});
