window.app = window.app || {};

(function () {
    'use strict';

    // Group Collection
    // ----------------

    var Groups = Backbone.Collection.extend({
        // Reference to this collection's model.
        model: window.app.Group,
    });

    // Create our global collection of **Groups**.
    window.app.groups = new Groups();
    // Populate the collection with dummy data (for now!)
    var group = new window.app.Group();
    group.set("name", "Admin");
    window.app.groups.push(group);
    group = new window.app.Group();
    group.set("name", "Engineering");
    window.app.groups.push(group);
    group = new window.app.Group();
    group.set("name", "Marketing");
    window.app.groups.push(group);
    group = new window.app.Group();
    group.set("name", "Sales");
    window.app.groups.push(group);
}());
