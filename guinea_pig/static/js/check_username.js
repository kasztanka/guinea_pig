$(function() {
    var username_field = $("#id_username");
    $('<p id="user_validation"></p>').insertAfter(username_field);
    username_field.keyup(function() {
        $.get('check/', {username: this.value},
            function(data) {
                $("#user_validation").html(data);
            });
    });
});
