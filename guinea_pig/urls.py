from django.conf.urls import url

from . import views

app_name = 'guinea_pig'
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^user/new/$', views.user_register, name='user_register'),
    url(r'^user/profile/(?P<username>\w+)$', views.profile, name='profile'),
    url(r'^user/login/$', views.user_login, name='user_login'),
    url(r'^user/logout/$', views.user_logout, name='user_logout'),
]
