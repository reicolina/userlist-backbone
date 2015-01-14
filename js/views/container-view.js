window.app = window.app || {};

(function () {
    'use strict';

    // Container View
    // --------------

    window.app.ContainerView = Backbone.View.extend({
        myChildView: null,

        render: function () {
            this.$el.html("");
            this.$el.append(this.myChildView.$el);
            return this;
        }

    });
}());