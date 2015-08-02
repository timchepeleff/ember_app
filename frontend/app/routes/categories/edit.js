import Ember from 'ember';

export default Ember.Route.extend({

    actions: {
      save(category) {
        var _this = this;
        category.save().then(function(category) {
          _this.transitionTo('categories.show', category);
        });
      },
      cancel(category) {
        this.transitionTo('categories.show', category)
      }
    }
});
