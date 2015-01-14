window.app = window.app || {};

(function () {
    'use strict';

    // Main View
    // ---------

    // initial view of the application
    window.app.MainView = Backbone.View.extend({

        template: _.template('<h3>User List</h3>' +
                            '<div style="width:300px">' +
                                '<div id="search-box"></div>' +
                                '<div id="user-section"></div>' +
                                '<div id="user-count"></div>' +
                                '<button id="new-user" class="btn btn-primary pull-right">New User</button>' +
                            '</div>'),

        counterTemplate: _.template('<p class="text-right">Displaying <%- count %> users</p>'),

        // The DOM events specific to an item.
        events: {
            'click #new-user': 'newUser'
        },

        // go to the new user view
        newUser: function () {
            window.app.router.navigate("userdetails/new", {trigger: true});
        },

        // render and fill the subcomponents within this view
        initialize: function () {
            this.render();
            _.bind(this.addUsersSection, this, window.app.search);
            this.listenTo(window.app.users, 'remove', this.decreaseCount);
            this.listenTo(window.app.search, 'change:text', this.addUsersSection);
            this.addSearch();
            this.addUsersSection();
        },

        // add the search component to the view
        addSearch: function () {
            this.searchView = new window.app.SearchView({ model: window.app.search });
            this.searchView.setElement(this.$('#search-box')).render();
        },

        // add all items in the **Users** collection at once.
        addUsersSection: function (search) {
            this.userList = new window.app.UsersView({ collection: window.app.users });
            this.userList.setSearch(search);
            this.userList.setElement(this.$('#user-section')).renderUsers();
            this.renderCounter();
        },

        // decrease the user count when deleting a user
        decreaseCount: function () {
            this.userList.setCount(this.userList.getCount() - 1);
            this.renderCounter();
        },

        // add the counter component to the view
        renderCounter: function () {
            var count;
            if (!this.userList.getCount()) {
                count = 0;
            } else {
                count = this.userList.getCount();
            }
            this.$('#user-count').html(this.counterTemplate({
                count: count,
            }));
        },

        // render this view
        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });
}());