from .models import Bbs
from .serializers import BbsSerializer
from rest_framework import generics

class BbsListCreate(generics.ListCreateAPIView):
    queryset = Bbs.objects.all()
    serializer_class = BbsSerializer