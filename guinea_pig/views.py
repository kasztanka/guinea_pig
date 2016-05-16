from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.template import loader

from .forms import RegisterUserForm, RegisterUserProfileForm, LoginUserForm
from .models import UserProfile, Game

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
    header_text = "Welcome to our website!"
    context = {"header_text": header_text}
    return render(request, "guinea_pig/index.html", context)

def profile(request, username):
    user = get_object_or_404(User, username=username)
    profile = get_object_or_404(UserProfile, user=user)
    return render(request, 'guinea_pig/profile.html', {'profile': profile, 'user': user})

def user_register(request):
    if request.method == "POST":
        user_form = RegisterUserForm(data=request.POST)
        profile_form = RegisterUserProfileForm(data=request.POST)
        if user_form.is_valid() and profile_form.is_valid():
            user = user_form.save()
            user.set_password(user.password)
            user.save()
            profile = profile_form.save(commit=False)
            profile.user = user
            profile.save()
            login(request, user)
            return redirect('guinea_pig:profile', username=user.username)
    else:
        user_form = RegisterUserForm()
        profile_form = RegisterUserProfileForm()
    return render(request, 'guinea_pig/user_register.html', {'user_form': user_form, 'profile_form': profile_form})

def user_login(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            return redirect('guinea_pig:index')
        else:
            form = LoginUserForm(request.POST)
            return render(request, 'guinea_pig/login.html', {'form': form, 'errors': 'Wrong password or username'})
    else:
        form = LoginUserForm()
        return render(request, 'guinea_pig/login.html', {'form': form})

@login_required
def user_logout(request):
    logout(request)
    return redirect('guinea_pig:index')

def game(request, game_name):
    game_obj = get_object_or_404(Game, name=game_name)
    return render(request, 'guinea_pig/game.html', {'game': game_obj})

