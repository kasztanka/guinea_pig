# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-05-15 09:04
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('admin', '0002_logentry_remove_auto_add'),
        ('guinea_pig', '0003_ouruser_avatar'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ouruser',
            name='user_ptr',
        ),
        migrations.RemoveField(
            model_name='record',
            name='user',
        ),
        migrations.DeleteModel(
            name='OurUser',
        ),
    ]
