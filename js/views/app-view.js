window.app = window.app || {};

(function ($) {
    'use strict';

    // The Application
    // ---------------

    // Our overall **AppView** is the top-level piece of UI.
    window.app.AppView = Backbone.View.extend({

        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        el: '#usersapp',

        // Our template for the user counter
        counterTemplate: _.template($('#counter-template').html()),

        // At initialization, kick things off by
        // loading any preexisting users that might be saved.
        initialize: function () {
            this.$list = $('#user-list');
            this.$count = $('#user-count');
            this.addAll();
            this.render();
        },

        // Add a single user to the list by creating a view for it, and
        // appending its element to the `<table>`.
        addOne: function (user) {
            var view = new window.app.UserView({ model: user });
            this.$list.append(view.render().el);
        },

        // Add all items in the **Users** collection at once.
        addAll: function () {
            this.$list.html('');
            window.app.users.each(this.addOne, this);
        },

        render: function () {
            var count = window.app.users.length;
            if (count) {
                this.$count.html(this.counterTemplate({
                    count: count,
                }));
            } else {
                this.$count.hide();
            }
        },

    });
}(jQuery));
