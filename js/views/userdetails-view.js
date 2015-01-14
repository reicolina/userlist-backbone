window.app = window.app || {};

(function () {
    'use strict';

    // User Details View
    // -----------------

    window.app.UserDetailsView = Backbone.View.extend({

        template: _.template('<h3>User Details</h3>' +
                                '<form style="width:300px" class="form-horizontal">' +
                                  '<div class="form-group">' +
                                    '<label for="inputFullName" class="col-sm-2 control-label">Name</label>' +
                                    '<div class="col-sm-10">' +
                                      '<input type="text" class="form-control" id="inputFullName" placeholder="Full Name">' +
                                    '</div>' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="inputPhoneNumber" class="col-sm-2 control-label">Phone</label>' +
                                    '<div class="col-sm-10">' +
                                      '<input type="text" class="form-control" id="inputPhoneNumber" placeholder="Phone Number">' +
                                    '</div>' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="inputGroup" class="col-sm-2 control-label">Group</label>' +
                                    '<div class="col-sm-10">' +
                                        '<select class="form-control" id="inputGroup">' +
                                          '<option>Admin</option>' +
                                          '<option>Marketing</option>' +
                                          '<option>Sales</option>' +
                                        '</select>' +
                                        '<button class="btn btn-success pull-right">Add Group</button>' +
                                    '</div>' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<div class="col-sm-offset-2 col-sm-10">' +
                                      '<button class="btn btn-default">Cancel</button>' +
                                      '<button type="submit" class="btn btn-primary">Save</button>' +
                                    '</div>' +
                                  '</div>' +
                                '</form>'),

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });
}());