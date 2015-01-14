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
            "userdetails": "handleUserDetails"
        },

        handleMain: function () {
            // if (!this.mainView) {
                this.mainView = new window.app.MainView();
            // }

            this.container.myChildView = this.mainView;
            this.container.render();
        },

        handleUserDetails: function () {
            if (!this.userDetailsView) {
                this.userDetailsView = new window.app.UserDetailsView();
            }

            this.container.myChildView = this.userDetailsView;
            this.container.render();
        },
    });

    $(document).ready(function () {
        window.app.router = new MyRouter();
        Backbone.history.start();
    });
}());
