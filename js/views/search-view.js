window.app = window.app || {};

(function () {
    'use strict';

    // Serach View
    // -----------

    // The DOM element for a todo item...
    window.app.SearchView = Backbone.View.extend({
        //... is a list tag.
        tagName:  'div',

        // Cache the template function
        template: _.template($('#search-template').html()),

        // The DOM events specific to an item.
        events: {
            'keyup #user-search': 'updateModel'
        },

        // Re-render the titles of the todo item.
        render: function () {
            this.$el.html(this.template());
            return this;
        },

        updateModel: function () {
            this.model.set("text", this.$('#user-search').val());
        }
    });
}());
