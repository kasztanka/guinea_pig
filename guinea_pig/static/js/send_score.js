function sendScore(score) {
    var result;
    $.get('score', {'score': score}, function(data) {
        result = data;
        getHighscores();
    });
    return result;
}
