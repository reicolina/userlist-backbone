/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// User Model
	// ----------

	// Our basic **User** model has `name`, `phone`, and `group` attributes.
	app.User = Backbone.Model.extend({
		// Default attributes for the user
		defaults: {
			fullName: '',
			phone: '',
			group: ''
		}
	});
})();
