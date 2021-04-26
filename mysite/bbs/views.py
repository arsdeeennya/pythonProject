from .models import Bbs
from .serializers import BbsSerializer
from rest_framework import generics

class UserList(generics.ListCreateAPIView):
    queryset = Bbs.objects.all()
    serializer_class = BbsSerializer