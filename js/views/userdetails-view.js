window.app = window.app || {};

(function () {
    'use strict';

    // User Details View
    // -----------------

    window.app.UserDetailsView = Backbone.View.extend({

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html("hello from the user details view");
            return this;
        }
    });
}());