from django.conf.urls import url, include
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^$', views.index_vitrine, name='index_vitrine'),


    url(r'^robots\.txt/$', TemplateView.as_view(template_name='robots.txt',content_type='text/plain')),
    url(r'^sitemap\.xml/$', TemplateView.as_view(template_name='sitemap.xml',content_type='text/xml')),


    url(r'^contact/', views.contact, name='contact'),
    url(r'^conduite-du-changement/', views.conduite_du_changement, name='conduite_du_changement'),
    url(r'^evenements/', views.evenements, name='evenements'),
    url(r'^digitalisation/', views.digitalisation, name='digitalisation'),
    url(r'^experience-client/', views.experience_client, name='experience_client'),
    url(r'^fusions-et-acquisitions/', views.fusions_et_acquisitions, name='fusions_et_acquisitions'),
    url(r'^gestion-de-projets/', views.gestion_de_projets, name='gestion_de_projets'),
    url(r'^reglementaire/', views.reglementaire, name='reglementaire'),
    url(r'^securite/', views.securite, name='securite'),
    url(r'^transformation/', views.transformation, name='transformation'),
    url(r'^mention-legales/', views.mentions_legales, name='mentions_legales'),

    url(r'^assurance/', views.assurance, name='assurance'),
    url(r'^banque/', views.banque, name='banque'),
    url(r'^telecommunications/', views.telecommunications, name='telecommunications'),
    url(r'^secteur-public/', views.secteur_public, name='secteur_public'),
    url(r'^transport_et_logistique/', views.transport_et_logistique, name='transport_et_logistique'),
    url(r'^energie/', views.energie, name='energie'),

    url(r'^a-propos-de-nous/', views.a_propos, name='a_propos'),
    url(r'^nous-rejoindre/', views.nous_rejoindre, name='nous_rejoindre'),



]
