from django.utils import timezone

from mongoengine import *

connect("ces", host='localhost', port=27017)


class Measurements(Document):
    """
    Model Document For storing Param Information
    """
    param1LifeTime = StringField()
    param2Instantaneous = StringField()
    param3Site = StringField()
    eventDate = DateTimeField(default=timezone.now)


class InervalMeasurements(Document):
    """
    Model Document For storing Param2 Information
    """
    param1LifeTime = StringField()
    param2DifferentialInterval = StringField()
    param3Site = StringField()
    eventDate = DateTimeField(default=timezone.now)
