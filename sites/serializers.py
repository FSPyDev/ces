from rest_framework import serializers

from sites.models import Site
from ces.non_null_serializer import BaseSerializer


class SiteSerializer(BaseSerializer):
    """
    Serializer for Saving and Retriving sites.
    This class excepts details validates them
    and returns Site object.
    """
    class Meta:
        model = Site
        fields = '__all__'
