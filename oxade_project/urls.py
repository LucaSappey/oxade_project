from django.conf import settings
from django.conf.urls import include, url
from django.contrib import admin
from django.conf.urls.static import static

from django.conf.urls.i18n import i18n_patterns


urlpatterns = [
	#Admin
	url(r'^admin/', admin.site.urls),
	url(r'^i18n/', include('django.conf.urls.i18n')),
    
    #les applicaiton include
]

urlpatterns += i18n_patterns(
    url(r'^', include('vitrine.urls'))
) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
	urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
	urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)