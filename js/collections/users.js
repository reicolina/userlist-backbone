/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// User Collection
	// ---------------

	// The collection of users is backed by *localStorage* instead of a remote server (for now!)
	var Users = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: app.User
	});

	// Create our global collection of **Users**.
	app.users = new Users();
	// Populate the collection with dummy data (for now!)
	var user = new app.User();
	user.set("fullName", "Luis Brown");
	app.users.push(user);
	user = new app.User();
	user.set("fullName", "Carlos Smith");
	app.users.push(user);
})();
