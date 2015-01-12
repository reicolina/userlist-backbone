/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function ($) {
	'use strict';

	// The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	app.AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#usersapp',

		// At initialization, kick things off by
		// loading any preexisting users that might be saved.
		initialize: function () {
			this.$list = $('#user-list');
			this.addAll();
		},

		// Add a single user to the list by creating a view for it, and
		// appending its element to the `<table>`.
		addOne: function (user) {
			var view = new app.UserView({ model: user });
			this.$list.append(view.render().el);
		},

		// Add all items in the **Users** collection at once.
		addAll: function () {
			this.$list.html('');
			app.users.each(this.addOne, this);
		},

	});
})(jQuery);
