from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import User
from django.utils import timezone
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
    def __str__(self):
        return self.name

class UserProfile(models.Model):
    user = models.OneToOneField(User)
    avatar = models.ForeignKey(Avatar, default=1, on_delete=models.SET_DEFAULT)
    def __str__(self):
        return self.user.username

class Record(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    author = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    score = models.IntegerField(default=0)
    game_date = models.DateTimeField('date of glory')
    def __str__(self):
        return self.author.user.username + ": " + str(self.score)

class Comment(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    author = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    text = models.CharField(max_length=600)
    pub_date = models.DateTimeField('publication date', default=timezone.now)
    def __str__(self):
        return self.game.name + "_" + self.author.user.username + "_" + pub_date
