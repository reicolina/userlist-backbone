window.app = window.app || {};

(function ($) {
    'use strict';

    // The Application
    // ---------------

    // Our overall **AppView** is the top-level piece of UI.
    window.app.AppView = Backbone.View.extend({

        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        // el: '#usersapp',

        // Our template for the user counter
        counterTemplate: _.template('<p class="text-right">Displaying <%- count %> users</p>'),

        // At initialization, kick things off by
        // loading any preexisting users that might be saved.
        initialize: function () {
            this.searchView = new window.app.SearchView({ model: window.app.search });
            this.usersView = new window.app.UsersView({ collection: window.app.users });
            this.render();
            _.bind(this.addUsersSection, this, window.app.search);
            this.$search = $('#search-box');
            this.$list = $('#user-section');
            this.$count = $('#user-count');
            this.listenTo(window.app.users, 'remove', this.decreaseCount);
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
            this.userList = new window.app.UsersView({ collection: window.app.users });
            this.userList.setSearch(search);
            this.$list.append(this.userList.renderUsers());
            this.renderCounter();
        },

        decreaseCount: function () {
            this.userList.setCount(this.userList.getCount() - 1);
            this.renderCounter();
        },

        renderCounter: function () {
            var count;
            if (!this.userList.getCount()) {
                count = 0;
            } else {
                count = this.userList.getCount();
            }
            this.$count.html(this.counterTemplate({
                count: count,
            }));
        },

        render: function () {
            this.$el.html('<h3>User List</h3>' +
                            '<div style="width:300px">' +
                                '<div id="search-box"></div>' +
                                '<div id="user-section"></div>' +
                                '<div id="user-count"></div>' +
                                '<button class="btn btn-primary pull-right">New User</button>' +
                            '</div>');
            this.searchView.setElement(this.$('#search-box')).render();
            this.usersView.setElement(this.$('#user-section')).render();
            return this.el;
        }

    });
}(jQuery));
