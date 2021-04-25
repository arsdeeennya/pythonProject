from django.db import models
from django.conf import settings

class Bbs(models.Model):
    name = models.CharField(max_length=20, default='森のくまさん')
    message = models.TextField()
    ip = models.CharField(max_length=50)
    week = models.CharField(max_length=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name