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
            "groupdetails": "handleGroupDetails"
        },

        handleMain: function () {
            // if (!this.mainView) {
            this.mainView = new window.app.MainView();
            // }

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

        handleGroupDetails: function () {
            this.groupDetailsView = new window.app.GroupDetailsView();
            this.container.myChildView = this.groupDetailsView;
            this.container.render();
        },
    });

    $(document).ready(function () {
        window.app.router = new MyRouter();
        Backbone.history.start();
    });
}());
