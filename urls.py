from django.urls import path, include
from . import views

urlpatterns = [
    path('app', views.index),
    path('specialities', views.index)
]