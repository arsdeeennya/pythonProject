from django.db import models
import socket
import base64

class Bbs(models.Model):
    name = models.CharField(max_length=20, default='森のくまさん')
    message = models.TextField()
    ip = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        ip = socket.gethostbyname(socket.gethostname())
        self.ip = base64.b64encode(ip.encode('ascii')).decode('ascii')[:-2]
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name