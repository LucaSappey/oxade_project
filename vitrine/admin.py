from django.contrib import admin

# Register your models here.

from .models import *

class Bdd_evenementAdmin(admin.ModelAdmin):
	search_fields = ['titre']
	list_display = ('id','titre','texte','img','date')

class Bdd_mailAdmin(admin.ModelAdmin):
	search_fields = ['mail']
	list_display = ('id','mail')

class Bdd_chiffreAdmin(admin.ModelAdmin):
	search_fields = ['nombre']
	list_display = ('id','nom','nombre')

class Bdd_reseauxAdmin(admin.ModelAdmin):
	search_fields = ['nom']
	list_display = ('id','nom','lien')


admin.site.register(Bdd_chiffre,Bdd_chiffreAdmin)

admin.site.register(Bdd_mail,Bdd_mailAdmin)

admin.site.register(Bdd_evenement,Bdd_evenementAdmin)

admin.site.register(Bdd_reseaux,Bdd_reseauxAdmin)
