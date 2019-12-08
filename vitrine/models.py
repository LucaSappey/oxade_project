from django.db import models
from django.utils import timezone
from django.forms import ModelForm
from django.conf import settings
from django.contrib.auth.models import User


# class Bdd_evenement(models.Model):

# 	id = models.AutoField(primary_key = True)
# 	titre = models.CharField(default=' ',max_length=400)
# 	texte = models.TextField(default=' ')
# 	img = models.FileField(upload_to='image_evenement/')
# 	date = models.DateTimeField(auto_now_add=True, blank=True)
	
# 	class Meta:
# 		verbose_name = "Evenement"
# 		ordering = ['id']
	
# 	def __str__(self):
# 		return self.titre

class Bdd_evenement(models.Model):

	id = models.AutoField(primary_key = True)
	titre = models.CharField(default=' ',max_length=400)
	texte = models.TextField(default=' ')
	img = models.FileField(upload_to='image_evenement/')
	date = models.DateTimeField(auto_now_add=True, blank=True)
	
	class Meta:
		verbose_name = "Évenement"
		ordering = ['id']
	
	def __str__(self):
		return self.titre

class Bdd_reseaux(models.Model):

	id = models.AutoField(primary_key = True)
	nom = models.CharField(default=' ',max_length=400)
	lien = models.CharField(default=' ',max_length=400)
	
	class Meta:
		verbose_name = "Réseaux lien"
		ordering = ['id']
	
	def __str__(self):
		return self.nom

class Bdd_mail(models.Model):

	id = models.AutoField(primary_key = True)
	mail = models.CharField(default=' ',max_length=400)
	
	class Meta:
		verbose_name = "Mail"
		ordering = ['id']
	
	def __str__(self):
		return self.mail


class Bdd_chiffre(models.Model):

	id = models.AutoField(primary_key = True)
	nom = models.CharField(default=' ',max_length=400)
	nombre = models.IntegerField(default=0)
	
	class Meta:
		verbose_name = "Chiffres clé"
		ordering = ['id']
	
	def __str__(self):
		return self.nom

# class Bdd_nous_rejoindre(models.Model):
# 	id = models.AutoField(primary_key = True)
# 	nom = models.CharField(default=' ', max_length=400)


# 	class Meta:
# 		verbose_name = "Candidat"
# 		ordering = ['id']

# 	def __str__(self):
# 		return self.nom