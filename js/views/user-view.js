window.app = window.app || {};

(function ($) {
    'use strict';

    // User Item View
    // --------------

    // The DOM element for a user item...
    window.app.UserView = Backbone.View.extend({
        //... is a row tag.
        tagName:  'tr',

        // Cache the template function for a single item.
        template: _.template($('#user-template').html()),

        // The userView listens for changes to its model, re-rendering.
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });
}(jQuery));