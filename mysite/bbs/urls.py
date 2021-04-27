from django.urls import path
from bbs import views

app_name = 'bbs'

urlpatterns = [
    path('index/', views.BbsListCreate.as_view(), name='index'),
]