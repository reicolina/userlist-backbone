window.app = window.app || {};

(function () {
    'use strict';

    // Users List View
    // ---------------

    // The DOM element for the users list ...
    window.app.UsersView = Backbone.View.extend({
        //... is a table tag.
        tagName:  'table',

        // Cache the template function for the users list.
        template: _.template('<table id="user-list" class="table table-hover .table-condensed"></table>'),

        setSearch: function (search) {
            this.search = search;
        },

        // Add a single user to the list by creating a view for it, and
        // appending its element to the `<table>`.
        renderUser: function (user) {
            var view = new window.app.UserView({ model: user });
            this.$('#user-list').append(view.render().el);
        },

        // Add all items in the **Users** collection at once.
        renderUsers: function () {
            this.$el.html('');
            this.$el.html(this.template());
            if (!this.search) {
                this.collection.each(this.renderUser, this);
                this.count = this.collection.length;
            } else {
                var i, filtered = this.collection.filter(function (user) {
                    return user.get("fullName").indexOf(this.search.get('text')) > -1;
                }, this);
                for (i = 0; i < filtered.length; i++) {
                    this.renderUser(filtered[i]);
                }
                this.count = filtered.length;
            }
        },

        // set the user count
        setCount: function (newCount) {
            this.count = newCount;
        },

        // return the user count
        getCount: function () {
            return this.count;
        }
    });
}());