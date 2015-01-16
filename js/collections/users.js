window.app = window.app || {};

(function () {
    'use strict';

    // User Collection
    // ---------------

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

    // if you want to connect to a API server to get the data you can use:
    // Backbone.ajax({
    //     dataType: "json",
    //     url: "https://api.mysite.com/users",
    //     data: "",
    //     success: function (data) {
    //         // ... manipulate the data (JSON) and set the appropiate values in a model
    //     },
    //     error: function (data) {
    //         // ... do error handling here
    //     }
    // });

}());
