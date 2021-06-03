from django.db import models
import socket
import base64

class Bbs(models.Model):
    name = models.CharField(max_length=20, default='森のくまさん')
    message = models.TextField()
    ip = socket.gethostbyname(socket.gethostname())
    encoded_ip = base64.b64encode(ip.encode('ascii')).decode('ascii')[:-2]
    ip = models.CharField(max_length=50, default=encoded_ip)
    week = models.CharField(max_length=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name