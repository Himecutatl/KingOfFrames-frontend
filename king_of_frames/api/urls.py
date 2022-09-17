from django.urls import path, include
from rest_framework import routers
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

router = routers.DefaultRouter()
router.register(r'characters', views.CharacterViewSet)
router.register(r'movelists', views.MoveListViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('index/', views.character_index, name='index'),
    path('index/<int:pk>', views.character_details, name='detail'),
]

urlpatterns += staticfiles_urlpatterns()