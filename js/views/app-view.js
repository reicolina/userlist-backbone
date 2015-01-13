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
        counterTemplate: _.template('<p class="text-right">Displaying <%- count %> users</p>'),

        // At initialization, kick things off by
        // loading any preexisting users that might be saved.
        initialize: function () {
            _.bind(this.addUsersSection, this, window.app.search);
            this.$search = $('#search-box');
            this.$list = $('#user-section');
            this.$count = $('#user-count');
            this.listenTo(window.app.users, 'all', this.renderCounter);
            this.listenTo(window.app.search, 'change:text', this.addUsersSection);
            this.addSearch();
            this.addUsersSection();
        },

        addSearch: function () {
            var searchBox = new window.app.SearchView({ model: window.app.search });
            this.$search.append(searchBox.render().el);
        },

        // Add all items in the **Users** collection at once.
        addUsersSection: function (search) {
            var userList = new window.app.UsersView({ collection: window.app.users });
            userList.setSearch(search);
            this.$list.append(userList.renderUsers());
            this.renderCounter(userList.getCount());
        },

        renderCounter: function (count) {
            if (!count) {
                count = 0;
            }
            this.$count.html(this.counterTemplate({
                count: count,
            }));
        },

    });
}(jQuery));
