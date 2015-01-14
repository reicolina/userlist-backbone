window.app = window.app || {};

(function () {
    'use strict';

    // Container View
    // --------------

    window.app.MainView = Backbone.View.extend({

        template: _.template('<h3>User List</h3>' +
                            '<div style="width:300px">' +
                                '<div id="search-box"></div>' +
                                '<div id="user-section"></div>' +
                                '<div id="user-count"></div>' +
                                '<button class="btn btn-primary pull-right">New User</button>' +
                            '</div>'),

        counterTemplate: _.template('<p class="text-right">Displaying <%- count %> users</p>'),

        initialize: function () {
            this.render();
            _.bind(this.addUsersSection, this, window.app.search);
            this.listenTo(window.app.users, 'remove', this.decreaseCount);
            this.listenTo(window.app.search, 'change:text', this.addUsersSection);
            this.addSearch();
            this.addUsersSection();
        },

        addSearch: function () {
            this.searchView = new window.app.SearchView({ model: window.app.search });
            this.searchView.setElement(this.$('#search-box')).render();
        },

        // Add all items in the **Users** collection at once.
        addUsersSection: function (search) {
            this.userList = new window.app.UsersView({ collection: window.app.users });
            this.userList.setSearch(search);
            this.userList.setElement(this.$('#user-section')).renderUsers();
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
            this.$('#user-count').html(this.counterTemplate({
                count: count,
            }));
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });
}());