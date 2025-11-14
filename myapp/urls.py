from . import views
from django.urls import path

urlpatterns = [
    path('', views.super_admin, name='super_admin'),  # 👈 route to your SuperAdmin.html
]
