from rest_framework import serializers
from .models import Bbs


class BbsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bbs
        fields = ['id', 'name', 'message', 'ip', 'created_at']
        extra_kwargs = {
            'ip': {'read_only': True},
            'created_at': {'read_only': True}}