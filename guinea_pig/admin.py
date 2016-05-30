from django.contrib import admin

from .models import Game, Record, Comment

admin.site.register(Game)
admin.site.register(Record)
admin.site.register(Comment)
