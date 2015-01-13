/*global Backbone */
window.app = window.app || {};

(function () {
    'use strict';

    // User Collection
    // ---------------

    // The collection of users is backed by *localStorage* instead of a remote server (for now!)
    var Users = Backbone.Collection.extend({
        // Reference to this collection's model.
        model: window.app.User,
        // Filter down the list to only users that contain the search string.
        searchResult: function () {
            return this.filter(function (user) { return user.get("fullName").indexOf("Brown") > -1; });
        }
    });

    // Create our global collection of **Users**.
    window.app.users = new Users();
    // Populate the collection with dummy data (for now!)
    var user = new window.app.User();
    user.set("fullName", "Luis Brown");
    window.app.users.push(user);
    user = new window.app.User();
    user.set("fullName", "Carlos Smith");
    window.app.users.push(user);
}());
