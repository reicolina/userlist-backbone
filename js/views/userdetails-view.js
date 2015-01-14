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
                                      '<input type="text" class="form-control" id="inputFullName" placeholder="Full Name" value="<%- fullName %>">' +
                                    '</div>' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="inputPhoneNumber" class="col-sm-2 control-label">Phone</label>' +
                                    '<div class="col-sm-10">' +
                                      '<input type="text" class="form-control" id="inputPhoneNumber" placeholder="Phone Number" value="<%- phone %>">' +
                                    '</div>' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="inputGroup" class="col-sm-2 control-label">Group</label>' +
                                    '<div class="col-sm-10">' +
                                        '<select class="form-control" id="inputGroup">' +
                                        '</select>' +
                                        '<button id="addGroup" class="btn btn-success pull-right">Add Group</button>' +
                                    '</div>' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<div class="col-sm-offset-2 col-sm-10">' +
                                      '<button id="cancel" class="btn btn-default">Cancel</button>' +
                                      '<button type="submit" class="btn btn-primary">Save</button>' +
                                    '</div>' +
                                  '</div>' +
                                '</form>'),

        // The DOM events specific to a user.
        events: {
            'click #cancel': 'goToMain',
            'click #addGroup': 'newGroup',
            'submit': 'save'
        },

        // save the user details
        save: function () {
            this.model.set('fullName', this.$('#inputFullName').val());
            this.model.set('phone', this.$('#inputPhoneNumber').val());
            this.model.set('group', this.$('#inputGroup').val());
            window.app.users.push(this.model);
            this.goToMain();
        },

        // navigate to the main view
        goToMain: function () {
            window.app.router.navigate("", {trigger: true});
        },

        // navigate to the new group view
        newGroup: function () {
            var param = window.app.users.get(this.model.cid) ? this.model.cid : "new";
            window.app.router.navigate("groupdetails/" + param, {trigger: true});
        },

        // fill the dropdownbox with the current groups
        populateDropdown: function () {
            window.app.groups.each(function (group) {
                var selected = (group.get("name") === this.model.get("group") ? " selected" : "");
                this.$('#inputGroup').append('<option' + selected + '>' + group.get("name") + '</option>');
            }, this);
        },

        // render the view and do some initialization
        initialize: function () {
            this.render();
            this.populateDropdown();
        },

        // render the view
        render: function () {
            this.$el.html(this.template(this.model.toJSON(), { groups: this.groups }));
            return this;
        }
    });
}());