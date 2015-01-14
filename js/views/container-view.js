window.app = window.app || {};

(function () {
    'use strict';

    // Container View
    // --------------

    // this is the container for the entire app. Views will be rendered within this container
    window.app.ContainerView = Backbone.View.extend({
        myChildView: null,

        render: function () {
            this.$el.html("");
            this.$el.append(this.myChildView.$el);
            return this;
        }

    });
}());