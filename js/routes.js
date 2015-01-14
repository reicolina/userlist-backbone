window.app = window.app || {};

(function () {
    'use strict';

    // Router Object
    // -------------

    var MyRouter = Backbone.Router.extend({
        initialize: function () {
            this.container = new window.app.ContainerView({ el: $("#AppContainer") });
        },

        routes: {
            "": "handleMain",
            "userdetails/:userId": "handleUserDetails",
            "groupdetails/:from": "handleGroupDetails"
        },

        handleMain: function () {
            this.mainView = new window.app.MainView();
            this.container.myChildView = this.mainView;
            this.container.render();
        },

        handleUserDetails: function (userId) {
            if (userId && userId === "new") {
                this.userDetailsView = new window.app.UserDetailsView({ model: new window.app.User() });
            } else {
                this.userDetailsView = new window.app.UserDetailsView({ model: window.app.users.get(userId) });
            }

            this.container.myChildView = this.userDetailsView;
            this.container.render();
        },

        handleGroupDetails: function (from) {
            this.groupDetailsView = new window.app.GroupDetailsView({ model: new window.app.Group(), from: from });
            this.container.myChildView = this.groupDetailsView;
            this.container.render();
        },
    });

    // initialize the router and kick off the history engine
    $(document).ready(function () {
        window.app.router = new MyRouter();
        Backbone.history.start();
    });
}());
