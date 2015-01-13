window.app = window.app || {};

(function () {
    'use strict';

    // Search Model
    // ------------

    // Our basic **Search** model has a `text` attribute.
    var Search = Backbone.Model.extend({
        // Default attributes for the search model
        defaults: {
            text: ''
        }
    });
    // Create our global search model
    window.app.search = new Search();
}());
