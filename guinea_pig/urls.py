from django.conf.urls import url

from . import views

app_name = 'guinea_pig'
urlpatterns = [
    url(r'^$', views.index, name='index'),
]
