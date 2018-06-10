import requests
from random import randint

from django.conf import settings
from django.core.mail import EmailMessage


def send_mail(user_email, name):
    subject = "Customised Energy Solution Registration Confirmation Mail!!!"
    body = "Hey " + name + ", Your Account has been Activated. You can now enjoy our services"
    email = EmailMessage(subject, body, to=[user_email])
    email.send()


def generate_oauth_token(self, username, password):
    """
    Function to generate Access Token
    """
    client_id = settings.CLIENT_ID
    client_secret = settings.CLIENT_SECRET
    headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    payload = {'grant_type': 'password',
               'username': username,
               'password': password,
               'client_id': client_id,
               'client_secret': client_secret}

    host = self.request.get_host()
    return (requests.post(
        settings.SERVER_PROTOCOLS + host + "/o/token/",
        data=payload,
        headers=headers))
