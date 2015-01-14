window.app = window.app || {};

(function () {
    'use strict';

    // Group Model
    // -----------

    // Our basic **Group** model has a `name` attribute.
    window.app.Group = Backbone.Model.extend({
        // Default attributes for the group
        defaults: {
            name: ""
        }
    });
}());
