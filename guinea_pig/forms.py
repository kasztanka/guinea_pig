from django.contrib.auth.models import User
from django import forms

from .models import UserProfile, Comment

class RegisterUserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = {'username', 'email', 'password'}

class LoginUserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = {'username', 'password'}

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = {'text'}
