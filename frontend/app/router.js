import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('categories', function() {
    this.route("new", { path: "/new" });
    this.route('show', { path: ':id' });

    this.resource("tasks", function() {
      this.route("new", { path: "/new" });
    });
  });
});

export default Router;
