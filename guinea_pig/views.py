from django.contrib.staticfiles.templatetags.staticfiles import static
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponse, JsonResponse
from django.core.urlresolvers import reverse
from django.contrib.auth.models import User
from django.template import loader

from .forms import RegisterUserForm, LoginUserForm, CommentForm
from .models import UserProfile, Game, Avatar, Comment, Record


'''
def function(request):
    data = some_data
    template = loader.get_template("path_to_template")
    context = {'arg1': data}
    return HttpResponse(template.render(context, request))

def function(request):
    data = some_data
    context = {'arg1': data}
    return render(request, "path_to_template", context)
'''

def index(request):
    games = Game.objects.all()
    context = {'games': games}
    return render(request, "guinea_pig/index.html", context)

def profile(request, username):
    user = get_object_or_404(User, username=username)
    profile = get_object_or_404(UserProfile, user=user)
    records = Record.objects.filter(player=profile).order_by('game__name')
    return render(request, 'guinea_pig/profile.html', {'profile': profile, 'records': records})

def user_register(request):
    if request.method == "POST":
        user_form = RegisterUserForm(data=request.POST)
        if user_form.is_valid():
            user = user_form.save()
            unhashed_password = user.password
            user.set_password(user.password)
            user.save()
            profile = UserProfile.objects.create(user=user)
            avatar_name = request.POST['avatar']
            avatar = Avatar.objects.get(name=avatar_name)
            profile.avatar = avatar
            profile.save()
            user_obj = authenticate(username=user.username, password=unhashed_password)
            login(request, user_obj)
            return redirect('guinea_pig:profile', username=user.username)
    else:
        avatars = Avatar.objects.all()
        img_names = list(map(lambda avatar: avatar.name, avatars))
        user_form = RegisterUserForm()
        context = {'user_form': user_form, 'avatars': avatars, 'img_names': img_names}
        return render(request, 'guinea_pig/user_register.html', context)

def user_login(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            return redirect(request.GET["nextpage"])
        else:
            form = LoginUserForm(request.POST)
            return render(request, 'guinea_pig/login.html',
                {'form': form, 'errors': 'Wrong password or username'})
    else:
        form = LoginUserForm()
        return render(request, 'guinea_pig/login.html', {'form': form})

@login_required
def user_logout(request):
    logout(request)
    return redirect(request.GET["nextpage"])

def game(request, game_name):
    game_obj = get_object_or_404(Game, name=game_name)
    if request.method == "POST":
        comment_form = CommentForm(data=request.POST)
        if comment_form.is_valid():
            comment = comment_form.save(commit=False)
            comment.game = game_obj
            comment.author = UserProfile.objects.get(user=request.user)
            comment = comment.save()
    comments = Comment.objects.filter(game=game_obj).order_by('-pub_date')
    comment_form = CommentForm()
    context = {'game': game_obj, 'comments': comments, 'comment_form': comment_form}
    return render(request,'guinea_pig/game.html', context)
    
def get_highscores(request, game_name):
    game_obj = get_object_or_404(Game, name=game_name)
    highscores = game_obj.get_top()
    result = "<h2>Highscores</h2>"
    for i, record in enumerate(highscores):
        number = '<p>' + str(i + 1) + '. '
        score = '<span>' + str(record.score) + '</span> '
        url_to_profile = reverse('guinea_pig:profile', args=[str(record.player)])
        gamer = '<a href="' + url_to_profile + '">' + str(record.player) + '</a>' + '</p>'
        result += number + score + gamer
    return HttpResponse(result)

def send_score(request, game_name):
    game_obj = get_object_or_404(Game, name=game_name)
    user_obj = UserProfile.objects.get(user=request.user)
    try:
        record = (Record.objects.get(player=user_obj, game=game_obj))
    except ObjectDoesNotExist:
        record = Record.objects.create(player=user_obj, game=game_obj)
    new_score = request.GET['score']
    data = {}
    if int(new_score) > record.score:
        record.score = new_score
        data['better'] = 1
    else:
        data['better'] = 0
    record.save()
    highscores = game_obj.get_top()
    if record in highscores:
        data['top'] = 1
    else:
        data['top'] = 0
    return JsonResponse(data)
    

def check_username(request):
    try:
        User.objects.get(username=request.GET['username'])
        return HttpResponse("<p>Username not available. Try another!</p>")
    except ObjectDoesNotExist:
        return HttpResponse("")
        
