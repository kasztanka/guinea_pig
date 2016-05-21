from django.core.exceptions import ObjectDoesNotExist
import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mysite.settings")
import django
django.setup()
from guinea_pig.models import Avatar

if __name__ == '__main__':    
    avatars_path = os.path.join(os.getcwd(), "guinea_pig", "static", "images", "avatars")
    av_list = os.listdir(avatars_path)
    for img_name in av_list:
        try:
            Avatar.objects.get(name=img_name)
        except ObjectDoesNotExist:
            new_img = Avatar.objects.create(name=img_name)
            new_img.save()
    
