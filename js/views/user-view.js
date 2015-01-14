window.app = window.app || {};

(function () {
    'use strict';

    // User Item View
    // --------------

    // The DOM element for a user item...
    window.app.UserView = Backbone.View.extend({
        //... it is a row tag.
        tagName:  'tr',

        // Cache the template function for a single item.
        template: _.template('<td id="fullName"><%- fullName %></td><td><button id="deleteBtn" class="btn btn-danger btn-xs pull-right">x</button></td>'),

        // The DOM events specific to a user.
        events: {
            'click #deleteBtn': 'deleteUser',
            'click #fullName': 'showDetails'
        },

        // navigate to the user details view
        showDetails: function () {
            window.app.router.navigate("userdetails/" + this.model.cid, {trigger: true});
        },

        // The userView listens for changes to its model, re-rendering.
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },

        // delete the user model
        deleteUser: function () {
            this.model.destroy();
        },

        // render the view
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });
}());