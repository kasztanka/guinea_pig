from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import User
from django.db import models


class Game(models.Model):
    name = models.CharField(max_length=22, primary_key=True)
    description = models.TextField()
    pub_date = models.DateTimeField('date')
    author = models.CharField(max_length=50)
    source = models.CharField(max_length=100, default="")
    def get_top(self, n=10):
        assert isinstance(n, int), "number must be integer"
        assert n > 0, "number of top scores should be bigger than 0"
        scores = self.record_set
        return scores.order_by('-score')[:n]
    def __str__(self):
        return self.name

class Avatar(models.Model):
    name = models.CharField(max_length=50)

class UserProfile(models.Model):
    user = models.OneToOneField(User)
    avatar = models.ForeignKey(Avatar, default=1, on_delete=models.SET_DEFAULT)


class Record(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    # user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    score = models.IntegerField(default=0)
    game_date = models.DateTimeField('date of glory')
    def __str__(self):
        return self.user.username + ": " + self.score

# TODO: class Comment(author, date, text, game, id?)
