function sendScore(score) {
    var result;
    if (LOGGED_IN) {
    $.get('score', {'score': score}, function(data) {
        result = data;
        getHighscores();
    });
    }
    return result;
}
