#!/usr/bin/env python

import random

from models import *
from sites.models import Site


def dump_instantaneous_data(obj_id, number):
    measurement_object = Measurements(param1LifeTime=number,
                           param2Instantaneous="1",
                           param3Site=obj_id)
    measurement_object.save()
    return measurement_object

def generate_dump_for_sites():
    site_obj = Site.objects.all()
    for obj in site_obj:
        number = random.randint(0,99)
        dump_instantaneous_data(str(obj.id), str(number))
    return True


if __name__ == '__main__':
    generate_dump_for_sites()
