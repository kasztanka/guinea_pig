from django import template
from django.template.defaultfilters import stringfilter
register = template.Library()

@register.filter
@stringfilter
def under_to_space(text):
    return text.replace("_", " ")
