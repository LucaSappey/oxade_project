# Generated by Django 2.1.7 on 2019-11-29 17:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('vitrine', '0006_bdd_chiffre_nom'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='bdd_evenement',
            options={'ordering': ['id'], 'verbose_name': 'Évenement'},
        ),
    ]
