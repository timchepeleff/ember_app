import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('categories', function() {
    this.route("new");
    this.route('show', { path: ':id' });
    this.route('edit', { path: ':id/edit' });
    this.route('tasks', { path: ':id/tasks' }, function() {
      this.route('new');
    });
  });
});


export default Router;
