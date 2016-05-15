# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-05-14 12:53
from __future__ import unicode_literals

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('guinea_pig', '0002_game_source'),
    ]

    operations = [
        migrations.AddField(
            model_name='ouruser',
            name='avatar',
            field=models.PositiveIntegerField(default=1, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(20)]),
        ),
    ]