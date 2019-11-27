from django.shortcuts import render
from django.conf import settings
from django.http import HttpResponseRedirect, HttpResponse, HttpResponseNotFound,Http404
from django.contrib.auth.decorators import login_required
from django.core.mail import send_mail

from .models import *

def index_vitrine(request):

	evenement = Bdd_evenement.objects.all().reverse()[0]
	chiffre = Bdd_chiffre.objects.all()

	if request.POST.get("sv"):
		Bdd_mail.objects.create(mail=request.POST.get("mail"))

	context = locals()
	template = 'index_vitrine.html'
	return render(request,template,context)

def contact(request):

	evenement = Bdd_evenement.objects.all().reverse()[0]

	if request.POST.get('envoyer'):
		Nom =  request.POST.get('nom') + " " + request.POST.get('prenom')
		commentaire =  request.POST.get('message')
		tel = request.POST.get('tel')
		titre = request.POST.get('titre')
		subject = titre + " - Oxade contact"
		emailFrom = request.POST.get('mail')

		message ='%s, \n\n%s \n\nNom/prénom : %s\nEmail : %s\nTéléphone : %s\n' %(titre, commentaire, Nom, emailFrom,tel)
		emailTo =[settings.EMAIL_HOST_USER]
		send_mail(subject, message, emailFrom, emailTo, fail_silently=True)
		
	if request.POST.get("sv"):
		Bdd_mail.objects.create(mail=request.POST.get("mail"))
	context = locals()

	template = 'contact.html'
	return render(request,template,context)

def conduite_du_changement(request):

	evenement = Bdd_evenement.objects.all().reverse()[0]

	if request.POST.get("sv"):
		Bdd_mail.objects.create(mail=request.POST.get("mail"))

	context = locals()
	template = 'offres/conduite_du_changement.html'
	return render(request,template,context)

def evenements(request):

	events = Bdd_evenement.objects.all().reverse()
	evenement = Bdd_evenement.objects.all().reverse()[0]

	if request.POST.get("sv"):
		Bdd_mail.objects.create(mail=request.POST.get("mail"))


	context = locals()
	template = 'evenements.html'
	return render(request,template,context)

def digitalisation(request):

	evenement = Bdd_evenement.objects.all().reverse()[0]

	if request.POST.get("sv"):
		Bdd_mail.objects.create(mail=request.POST.get("mail"))

	context = locals()
	template = 'offres/digitalisation.html'
	return render(request,template,context)

def experience_client(request):

	evenement = Bdd_evenement.objects.all().reverse()[0]

	if request.POST.get("sv"):
		Bdd_mail.objects.create(mail=request.POST.get("mail"))

	context = locals()
	template = 'offres/experience_client.html'
	return render(request,template,context)

def fusions_et_acquisitions(request):

	evenement = Bdd_evenement.objects.all().reverse()[0]

	if request.POST.get("sv"):
		Bdd_mail.objects.create(mail=request.POST.get("mail"))

	context = locals()
	template = 'offres/fusions_et_acquisitions.html'
	return render(request,template,context)

def gestion_de_projets(request):

	evenement = Bdd_evenement.objects.all().reverse()[0]

	if request.POST.get("sv"):
		Bdd_mail.objects.create(mail=request.POST.get("mail"))

	context = locals()
	template = 'offres/gestion_de_projets.html'
	return render(request,template,context)

def reglementaire(request):

	evenement = Bdd_evenement.objects.all().reverse()[0]

	if request.POST.get("sv"):
		Bdd_mail.objects.create(mail=request.POST.get("mail"))

	context = locals()
	template = 'offres/reglementaire.html'
	return render(request,template,context)

def securite(request):

	evenement = Bdd_evenement.objects.all().reverse()[0]

	if request.POST.get("sv"):
		Bdd_mail.objects.create(mail=request.POST.get("mail"))

	context = locals()
	template = 'offres/securite.html'
	return render(request,template,context)

def transformation(request):

	evenement = Bdd_evenement.objects.all().reverse()[0]

	if request.POST.get("sv"):
		Bdd_mail.objects.create(mail=request.POST.get("mail"))

	context = locals()
	template = 'offres/transformation.html'
	return render(request,template,context)


def mentions_legales(request):

	evenement = Bdd_evenement.objects.all().reverse()[0]

	if request.POST.get("sv"):
		Bdd_mail.objects.create(mail=request.POST.get("mail"))

	context = locals()
	template = 'mentions_legales.html'
	return render(request,template,context)

def banque(request):

	evenement = Bdd_evenement.objects.all().reverse()[0]

	if request.POST.get("sv"):
		Bdd_mail.objects.create(mail=request.POST.get("mail"))

	context = locals()
	template = 'secteurs/banque.html'
	return render(request,template,context)

def assurance(request):

	evenement = Bdd_evenement.objects.all().reverse()[0]

	if request.POST.get("sv"):
		Bdd_mail.objects.create(mail=request.POST.get("mail"))

	context = locals()
	template = 'secteurs/assurance.html'
	return render(request,template,context)

def energie(request):

	evenement = Bdd_evenement.objects.all().reverse()[0]

	if request.POST.get("sv"):
		Bdd_mail.objects.create(mail=request.POST.get("mail"))

	context = locals()
	template = 'secteurs/energie.html'
	return render(request,template,context)

def secteur_public(request):

	evenement = Bdd_evenement.objects.all().reverse()[0]

	if request.POST.get("sv"):
		Bdd_mail.objects.create(mail=request.POST.get("mail"))

	context = locals()
	template = 'secteurs/secteur_public.html'
	return render(request,template,context)

def telecommunications(request):

	evenement = Bdd_evenement.objects.all().reverse()[0]

	if request.POST.get("sv"):
		Bdd_mail.objects.create(mail=request.POST.get("mail"))

	context = locals()
	template = 'secteurs/telecommunications.html'
	return render(request,template,context)

def transport_et_logistique(request):

	evenement = Bdd_evenement.objects.all().reverse()[0]

	if request.POST.get("sv"):
		Bdd_mail.objects.create(mail=request.POST.get("mail"))

	context = locals()
	template = 'secteurs/transport_et_logistique.html'
	return render(request,template,context)

def a_propos(request):

	evenement = Bdd_evenement.objects.all().reverse()[0]
	chiffre = Bdd_chiffre.objects.all()

	if request.POST.get("sv"):
		Bdd_mail.objects.create(mail=request.POST.get("mail"))

	context = locals()
	template = 'a_propos.html'
	return render(request,template,context)


def nous_rejoindre(request):

	evenement = Bdd_evenement.objects.all().reverse()[0]

	if request.POST.get("sv"):
		Bdd_mail.objects.create(mail=request.POST.get("mail"))

	if request.POST.get('envoyer'):
		Nom =  request.POST.get('nom')
		ecole =  request.POST.get('ecole')
		tel = request.POST.get('tel')
		mail = request.POST.get('email')
		intitule = request.POST.get('intitule')
		annee = request.POST.get('annee')
		subject = Nom +" - Oxade Nous rejoindre"
		emailFrom = request.POST.get('mail')
		cv = request.POST.get('cv')

		message ='Nom : %s\nTéléphone : %s\nMail : %s\nEcole : %s\nIntitulé : %s\nAnnee : %s\nCV : %s\n' %(Nom, tel, mail, ecole,intitule, annee, cv)
		emailTo =[settings.EMAIL_HOST_USER]
		send_mail(subject, message, emailFrom, emailTo, fail_silently=True)
		confirm_message = "Merci, Votre message à bien été envoyé !"

	context = locals()
	template = 'nous_rejoindre.html'
	return render(request,template,context)


