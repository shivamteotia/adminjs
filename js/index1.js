$(document).ready(function() {
    var json = {

        "name": "yash",
        "title": "veer"
    };
    makeTemplates();

    rb(".user", "rest", json,);
});