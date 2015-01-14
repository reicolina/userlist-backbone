window.app = window.app || {};

(function () {
    'use strict';

    // User Model
    // ----------

    // Our basic **User** model has `name`, `phone`, and `group` attributes.
    window.app.User = Backbone.Model.extend({
        // Default attributes for the user
        defaults: {
            fullName: "",
            phone: "",
            group: ""
        }
    });
}());
