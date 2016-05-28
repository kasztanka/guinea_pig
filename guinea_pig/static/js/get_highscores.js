function getHighscores() {
    $.get('highscores', {}, function(data) {
        $("#highscores").html(data);
    });
}

$(function() {
    getHighscores();
});
