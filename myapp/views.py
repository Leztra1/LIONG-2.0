from django.shortcuts import render

def super_admin(request):
    return render(request, 'liong/SuperAdmin.html')