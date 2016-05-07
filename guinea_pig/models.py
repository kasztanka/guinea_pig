from django.db import models

# Create your models here.

class Game(models.Model):
    name = models.CharField(max_length=22, primary_key=True)
    description = models.TextField()
    pub_date = models.DateTimeField('date')
    author = models.CharField(max_length=50)
    def get_top(self, n=10):
        assert isinstance(n, int), "number must be integer"
        assert n > 0, "number of top scores should be bigger than 0"
        scores = self.record_set
        return scores.order_by('-score')[:n]
    def __str__(self):
        return self.name


class OurUser(models.User):
    #avatar
    pass

class Record(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    user = models.ForeignKey(OurUser, on_delete=models.CASCADE)
    score = models.IntegerField(default=0)
    game_date = models.DateTimeField('date of glory')
    def __str__(self):
        return self.user.username + ": " + self.score

# TODO: class Comment(author, date, text, game, id?)
