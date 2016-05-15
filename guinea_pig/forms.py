from django.contrib.auth.models import User
from django import forms

from .models import UserProfile

class RegisterUserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = {'username', 'email', 'password'}

class RegisterUserProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = {'avatar'}

class LoginUserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = {'username', 'password'}

