from django.conf.urls import url

from . import views

app_name = 'guinea_pig'
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^user/new/$', views.user_register, name='user_register'),
    url(r'^user/profile/(?P<username>\w+)$', views.profile, name='profile'),
    url(r'^user/login/', views.user_login, name='user_login'),
    url(r'^user/logout/', views.user_logout, name='user_logout'),
    url(r'^game/(?P<game_name>\w+)/$', views.game, name='game'),
    url(r'^user/new/check/$', views.check_username, name='check_username'),
    url(r'^game/(?P<game_name>\w+)/highscores$', views.get_highscores, name='get_highscores'),
    url(r'^game/(?P<game_name>\w+)/score$', views.send_score, name='send_score'),
]
