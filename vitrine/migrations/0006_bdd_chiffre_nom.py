# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2019-11-20 10:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vitrine', '0005_bdd_chiffre'),
    ]

    operations = [
        migrations.AddField(
            model_name='bdd_chiffre',
            name='nom',
            field=models.CharField(default=' ', max_length=400),
        ),
    ]
