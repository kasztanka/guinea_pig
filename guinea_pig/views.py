from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

#def function(request):
#    data = some_data
#    template = loader.get_template("path_to_template")
#    context = {'arg1': data}
#    return HttpResponse(template.render(context, request))

#def function(request):
#    data = some_data
#    context = {'arg1': data}
#    return render(request, "path_to_template", context)

def index(request):
    header_text = "Welcome to our website!"
    context = {"header_text": header_text}
    return render(request, "guinea_pig/index.html", context)

